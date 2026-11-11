function openNotepad(title, text) {
    createWindow({
        title: `${title} - Notepad`,
        icon: '▤',
        className: 'notepad-window',
        width: '620px',
        height: '440px',
        content: `<div class="notepad-menu">File&nbsp;&nbsp; Edit&nbsp;&nbsp; Format&nbsp;&nbsp; View&nbsp;&nbsp; Help</div><textarea aria-label="${escapeHtml(title)} content" readonly>${escapeHtml(text)}</textarea>`
    });
}

function getSearchEntries(node, path = [], entries = []) {
    Object.entries(node || {}).forEach(([name, value]) => {
        const nextPath = [...path, name];
        const isFolder = value && !value.type;
        const project = path[0] === 'Projects' && path.length === 1 ? getProject(name) : null;
        entries.push({
            name,
            path: nextPath,
            type: isFolder ? 'folder' : value.type,
            text: [name, value?.content, value?.href, project?.description?.en, project?.content?.en, project?.tags?.join(' ')].filter(Boolean).join(' ')
        });
        if (isFolder) getSearchEntries(value, nextPath, entries);
    });
    return entries;
}

function renderSearchResults(state, query = '') {
    const normalized = query.trim().toLowerCase();
    const results = state.searchEntries.filter((entry) => !normalized || entry.text.toLowerCase().includes(normalized));
    state.searchResults = results;
    const resultPane = state.element.querySelector('[data-search-results]');
    if (!resultPane) return;
    resultPane.innerHTML = results.length
        ? results.map((entry, index) => `<button type="button" class="search-result" data-search-index="${index}"><span class="file-icon">${entry.type === 'folder' ? '📁' : entry.type === 'image' ? '▧' : entry.type === 'url' ? '↗' : '▤'}</span><span><strong>${escapeHtml(entry.name)}</strong><small>${escapeHtml(`C:\\${entry.path.join('\\')}`)}</small></span></button>`).join('')
        : '<p class="search-empty">No matching items were found.</p>';
    state.element.querySelector('[data-search-count]').textContent = `${results.length} result(s)`;
}

function openSearchApp() {
    const id = createWindow({
        title: 'Search',
        icon: '⌕',
        className: 'search-window',
        width: '620px',
        height: '500px',
        content: `<form class="search-form"><label for="desktop-search-input">Search files, projects, and links</label><div class="search-controls"><input id="desktop-search-input" data-search-input type="search" placeholder="Type a name or keyword" autocomplete="off"><button type="submit">Search</button></div></form><div class="search-results" data-search-results></div><footer class="search-status" data-search-count>0 result(s)</footer>`
    });
    const state = windowState.windows.get(id);
    state.searchEntries = getSearchEntries(fileSystem);
    renderSearchResults(state);
    state.element.querySelector('[data-search-input]').focus();
    return id;
}

document.addEventListener('input', (event) => {
    if (!event.target.matches('[data-search-input]')) return;
    const state = windowState.windows.get(event.target.closest('.xp-window')?.dataset.windowId);
    if (state) renderSearchResults(state, event.target.value);
});

document.addEventListener('submit', (event) => {
    if (!event.target.matches('.search-form')) return;
    event.preventDefault();
    const input = event.target.querySelector('[data-search-input]');
    input.focus();
});

document.addEventListener('dblclick', (event) => {
    const result = event.target.closest('.search-result');
    if (!result) return;
    const state = windowState.windows.get(result.closest('.xp-window')?.dataset.windowId);
    const entry = state?.searchResults?.[Number(result.dataset.searchIndex)];
    if (!entry) return;
    if (entry.type === 'folder') {
        if (entry.path[0] === 'Projects' && entry.path.length === 2) openProject(entry.name);
        else explorerWindow(entry.path);
    } else {
        const parent = entry.path.slice(0, -1);
        const parentNode = getNode(parent);
        const node = parentNode?.[entry.name];
        if (node) {
            if (node.type === 'text') openNotepad(entry.name, typeof node.content === 'function' ? node.content() : node.content);
            if (node.type === 'case-study') renderCaseStudy(node.project);
            if (node.type === 'image') openImageViewer(entry.name, node.src);
            if (node.type === 'url') window.open(node.href, '_blank', 'noopener,noreferrer');
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || !event.target.matches('.search-result')) return;
    event.target.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
});

function openImageViewer(title, src, icon = '▧', gallery = []) {
    const images = gallery.length ? gallery : [src];
    const id = createWindow({
        title: `${title} - Image Viewer`,
        icon,
        className: 'image-window',
        width: '680px',
        height: '500px',
        content: `<div class="image-viewer-body">${src ? `<img data-gallery-image src="${escapeHtml(src)}" alt="${escapeHtml(title)}">` : '<p>Image placeholder — add a media path in data.js.</p>'}</div>${images.length > 1 ? `<div class="image-viewer-controls"><button data-image-nav="previous">Previous</button><span data-image-count>1 / ${images.length}</span><button data-image-nav="next">Next</button></div>` : ''}`
    });
    const state = windowState.windows.get(id);
    if (state) {
        state.imageGallery = images;
        state.imageIndex = 0;
    }
    return id;
}

document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-image-nav]');
    if (!button) return;
    const state = windowState.windows.get(button.closest('.xp-window')?.dataset.windowId);
    if (!state?.imageGallery?.length) return;
    const direction = button.dataset.imageNav === 'next' ? 1 : -1;
    state.imageIndex = (state.imageIndex + direction + state.imageGallery.length) % state.imageGallery.length;
    state.element.querySelector('[data-gallery-image]').src = state.imageGallery[state.imageIndex];
    state.element.querySelector('[data-image-count]').textContent = `${state.imageIndex + 1} / ${state.imageGallery.length}`;
});

function openResume() {
    window.open('Docs/CV/Arthur_Garcia_CV.pdf', '_blank', 'noopener,noreferrer');
}
