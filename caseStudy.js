function getProject(projectTitle) {
    return menuData[0].items.find((item) => item.title.en === projectTitle);
}

function projectImageSources(project) {
    const info = PROJECT_DETAIL_INFO[project.title.en] || {};
    const story = project.caseStudy || info.caseStudy || {};
    const diagrams = story.media || story.diagrams || info.diagrams || [];
    const cover = info.coverPath || (diagrams[0] && projectMediaPath(project, diagrams[0].file));
    const sources = [cover, ...diagrams.map((diagram) => projectMediaPath(project, diagram.file))].filter(Boolean);
    return [...new Set(sources)];
}
function projectMediaPath(project, file) {
    const info = PROJECT_DETAIL_INFO[project.title.en] || {};
    const story = project.caseStudy || {};
    const imagePath = story.imagePath || info.imagePath || 'Files/Tower of babel/Images';
    return file ? `${imagePath}/${file}` : '';
}

function renderCaseStudy(projectTitle) {
    const project = getProject(projectTitle);
    if (!project) return;
    const story = project.caseStudy || {};
    const stats = story.stats || [];
    const chapters = story.chapters || story.sections || [];
    const code = story.code || story.codeSnippets || [];
    const diagrams = story.media || story.diagrams || [];
    const engine = ENGINES[project.engine] || ENGINES.other;
    let diagramIndex = 0;

    chapters.forEach((chapter, index) => {
        const chapterCards = [];
        if (code[index]) chapterCards.push({ type: 'code', ...code[index] });
        const remainingChapters = Math.max(1, chapters.length - index);
        const remainingDiagrams = diagrams.length - diagramIndex;
        const diagramsForChapter = Math.ceil(remainingDiagrams / remainingChapters);
        diagrams.slice(diagramIndex, diagramIndex + diagramsForChapter).forEach((diagram) => chapterCards.push({ type: 'image', ...diagram }));
        diagramIndex += diagramsForChapter;
        if (!chapterCards.length && index === 0 && code.length) chapterCards.push({ type: 'code', ...code[0] });
        chapter.cards = chapterCards;
    });

    const cards = chapters.map((chapter, index) => `
            <section class="story-chapter" id="chapter-${index + 1}" data-chapter="${index + 1}">
                <div class="chapter-copy">
                    <span class="chapter-number">${String(index + 1).padStart(2, '0')}</span>
                    <h2>${escapeHtml(chapter.heading || chapter.title || 'Chapter')}</h2>
                    <p>${escapeHtml(chapter.text || '')}</p>
                </div>
                <div class="story-cards">${chapter.cards.map((card) => renderStoryCard(card, project)).join('')}</div>
            </section>
        `);

    const cover = projectImageSources(project)[0];
    const id = createWindow({
        title: `${project.title.en} - Case Study`,
        icon: engine.icon,
        className: 'case-study-window',
        width: '900px',
        height: '650px',
        status: `${engine.label} | ${project.language || 'Project'}`
    });
    const state = windowState.windows.get(id);
    state.caseStudyProject = projectTitle;
    state.element.querySelector('.window-content').innerHTML = `
        <div class="case-study-browserbar"><span>File</span><span>Edit</span><span>View</span><span>Help</span><span class="case-study-address">http://portfolio.local/${encodeURIComponent(project.title.en)}</span></div>
        <div class="case-study-layout">
            <aside class="case-study-rail">
                <strong>Chapters</strong>
                ${chapters.map((chapter, index) => `<a href="#chapter-${index + 1}">${String(index + 1).padStart(2, '0')} ${escapeHtml(chapter.heading || chapter.title || 'Chapter')}</a>`).join('')}
                <hr>
                <a href="#" data-case-action="back-folder">Back to folder</a>
            </aside>
            <article class="case-study-story" data-case-story>
                ${window.innerWidth < 700 && cover ? '<button class="case-screenshot-button" data-case-action="view-screenshot">View screenshot</button>' : ''}
                <header class="story-header">
                    <div class="engine-badge">${engine.icon}<span>${escapeHtml(engine.label)}</span></div>
                    <p class="story-label">CASE STUDY / ${escapeHtml(project.year || 'PROJECT')}</p>
                    <h1>${escapeHtml(project.title.en)}</h1>
                    <p class="story-intro">${escapeHtml(story.intro || project.content.en || '')}</p>
                    <div class="story-stats">${stats.map((stat) => `<div><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></div>`).join('')}</div>
                </header>
                <div class="story-timeline">${cards.join('')}</div>
                <footer class="story-footer"><a href="#" data-case-action="next-project">Next project</a><a href="#" data-case-action="back-folder">Back to folder</a></footer>
            </article>
        </div>
    `;
    setupCaseStudy(id);
}

function renderStoryCard(card, project) {
    const type = card.type || 'note';
    if (type === 'code') {
        return `<article class="story-card code-card">
            <div class="card-heading"><div><strong>${escapeHtml(card.title || 'Code')}</strong><small>${escapeHtml(card.language || card.lang || '')}</small></div><button type="button" data-lightbox-card aria-label="Expand code card">⛶</button></div>
            <p>${escapeHtml(card.explanation || card.description || '')}</p>
            <div class="code-toolbar"><span>${escapeHtml(card.source || '')}</span><button type="button" data-copy-code>Copy</button></div>
            <pre tabindex="0"><code>${highlightCode(card.code || '')}</code></pre>
        </article>`;
    }

    function highlightCode(code) {
        let highlighted = escapeHtml(code);
        highlighted = highlighted.replace(/(&quot;.*?&quot;|'[^']*')/g, '<span class="code-string">$1</span>');
        highlighted = highlighted.replace(/\b(private|public|protected|void|float|int|bool|class|if|else|return|new|yield|for|while|const)\b/g, '<span class="code-keyword">$1</span>');
        return highlighted;
    }
    if (type === 'image' || type === 'video' || type === 'gif') {
        const source = card.src || projectMediaPath(project, card.file);
        const media = type === 'video' ? `<video controls src="${escapeHtml(source)}"></video>` : `<img src="${escapeHtml(source)}" alt="${escapeHtml(card.title || 'Project diagram')}">`;
        return `<article class="story-card media-card"><div class="media-stage">${source ? media : '<span>Media placeholder</span>'}<button type="button" data-lightbox-card aria-label="Expand media card">⛶</button></div><div class="media-caption"><strong>${escapeHtml(card.title || 'Diagram')}</strong><span>${escapeHtml(card.caption || card.description || '')}</span></div></article>`;
    }
    return `<article class="story-card note-card"><strong>${escapeHtml(card.title || 'Note')}</strong><p>${escapeHtml(card.text || card.description || '')}</p></article>`;
}

function setupCaseStudy(id) {
    const state = windowState.windows.get(id);
    const story = state.element.querySelector('[data-case-story]');
    const rail = state.element.querySelector('.case-study-rail');
    const chapters = [...story.querySelectorAll('.story-chapter')];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('chapter-visible');
    }), { root: story, threshold: 0.18 });
    chapters.forEach((chapter) => observer.observe(chapter));
    story.addEventListener('scroll', () => {
        const max = story.scrollHeight - story.clientHeight;
        story.style.setProperty('--story-progress', `${max ? story.scrollTop / max * 100 : 0}%`);
        let current = chapters[0];
        chapters.forEach((chapter) => { if (chapter.getBoundingClientRect().top < story.getBoundingClientRect().top + 180) current = chapter; });
        rail.querySelectorAll('a[href^="#chapter"]').forEach((link) => link.classList.toggle('active', link.hash === `#${current.id}`));
    }, { passive: true });
    state.element.addEventListener('click', (event) => {
        const copy = event.target.closest('[data-copy-code]');
        if (copy) navigator.clipboard?.writeText(copy.closest('.code-card').querySelector('code').textContent);
        const lightbox = event.target.closest('[data-lightbox-card]');
        if (lightbox) openCaseLightbox(lightbox.closest('.story-card'));
        const action = event.target.closest('[data-case-action]');
        if (!action) return;
        event.preventDefault();
        if (action.dataset.caseAction === 'back-folder') {
            closeWindow(id);
            explorerWindow(['Projects', state.caseStudyProject]);
        }
        if (action.dataset.caseAction === 'view-screenshot') {
            const project = getProject(state.caseStudyProject);
            const gallery = projectImageSources(project);
            if (gallery[0]) openImageViewer(state.caseStudyProject, gallery[0], (ENGINES[project.engine] || ENGINES.other).icon, gallery);
        }
        if (action.dataset.caseAction === 'next-project') {
            const index = menuData[0].items.findIndex((item) => item.title.en === state.caseStudyProject);
            const next = menuData[0].items[(index + 1) % menuData[0].items.length];
            closeWindow(id);
            renderCaseStudy(next.title.en);
        }
    });
    return id;
}

function findProjectWindow(projectTitle, className) {
    return [...windowState.windows.values()].find((state) => state.projectTitle === projectTitle && state.element.classList.contains(className));
}

function restoreProjectWindow(state) {
    if (!state) return;
    if (state.minimized) {
        state.minimized = false;
        state.element.classList.remove('window-minimized');
        renderTaskbarWindows();
    }
    bringToFront(state.id);
}

function openProject(projectTitle) {
    const project = getProject(projectTitle);
    if (!project) return;
    if (project.openMode === 'explorer') {
        explorerWindow(['Projects', projectTitle]);
        return;
    }
    const screenshot = projectImageSources(project)[0];
    const gallery = projectImageSources(project);
    const caseWindow = findProjectWindow(projectTitle, 'case-study-window');
    const imageWindow = findProjectWindow(projectTitle, 'image-window');

    if (window.innerWidth >= 700 && screenshot && !imageWindow) {
        const imageId = openImageViewer(projectTitle, screenshot, (ENGINES[project.engine] || ENGINES.other).icon, gallery);
        const imageState = windowState.windows.get(imageId);
        imageState.projectTitle = projectTitle;
        imageState.projectEngineIcon = (ENGINES[project.engine] || ENGINES.other).icon;
        imageState.element.style.left = '3vw';
        imageState.element.style.top = '7vh';
        imageState.element.style.width = '40vw';
        imageState.element.style.height = '70vh';
    } else if (imageWindow) {
        restoreProjectWindow(imageWindow);
    }

    const openedCaseWindow = caseWindow || renderCaseStudy(projectTitle);
    const caseState = windowState.windows.get(openedCaseWindow);
    if (caseState) {
        caseState.projectTitle = projectTitle;
        caseState.element.style.left = window.innerWidth >= 700 ? '44vw' : '0';
        caseState.element.style.top = window.innerWidth >= 700 ? '7vh' : '0';
        if (window.innerWidth >= 700) {
            caseState.element.style.width = '54vw';
            caseState.element.style.height = '82vh';
        }
        restoreProjectWindow(caseState);
    }
}

function openCaseLightbox(card) {
    const copy = card.cloneNode(true);
    copy.querySelectorAll('[data-lightbox-card], [data-copy-code]').forEach((button) => button.remove());
    createWindow({ title: 'Case Study - Expanded', icon: '▣', className: 'case-lightbox', width: '760px', height: '560px', content: `<div class="case-lightbox-body">${copy.outerHTML}</div>` });
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const lightboxes = [...windowState.windows.values()].filter((state) => state.element.classList.contains('case-lightbox'));
    const lightbox = lightboxes.sort((left, right) => Number(right.element.style.zIndex) - Number(left.element.style.zIndex)).at(0);
    if (lightbox) closeWindow(lightbox.id);
});
