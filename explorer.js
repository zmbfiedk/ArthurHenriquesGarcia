const explorerHistory = new Map();

function getNode(path) {
    return path.reduce((node, part) => node?.[part], fileSystem);
}

function iconForNode(node) {
    if (node?.type === 'case-study') return '▤';
    if (node?.type === 'text') return '▤';
    if (node?.type === 'image') return '▧';
    if (node?.type === 'url') return '↗';
    return '📁';
}

function explorerWindow(path = []) {
    const title = path.length ? path[path.length - 1] : 'My Computer';
    const project = path[0] === 'Projects' && path[1] ? getProject(path[1]) : null;
    const engine = project ? ENGINES[project.engine] || ENGINES.other : null;
    const id = createWindow({
        title,
        icon: engine?.icon || '📁',
        className: 'explorer-window',
        width: '760px',
        height: '520px',
        status: '0 object(s)'
    });
    explorerHistory.set(id, { path: [...path], back: [], forward: [] });
    renderExplorer(id);
    return id;
}

function renderExplorer(id) {
    const state = windowState.windows.get(id);
    const history = explorerHistory.get(id);
    if (!state || !history) return;
    const node = getNode(history.path) || {};
    let entries = Object.entries(node);
    if (history.groupByEngine && history.path.length === 1 && history.path[0] === 'Projects') {
        entries.sort(([, left], [, right]) => (left.engine || 'other').localeCompare(right.engine || 'other'));
    }
    const selectedProject = history.path[0] === 'Projects' && history.path[1] ? getProject(history.path[1]) : null;
    const selectedEngine = selectedProject ? ENGINES[selectedProject.engine] || ENGINES.other : null;
    const content = state.element.querySelector('.window-content');
    content.innerHTML = `
        <div class="explorer-menu"><span>File</span><span>Edit</span><span>View</span><span>Help</span></div>
        <div class="explorer-toolbar">
            <button data-explorer-action="back" ${history.back.length ? '' : 'disabled'}>← Back</button>
            <button data-explorer-action="forward" ${history.forward.length ? '' : 'disabled'}>→ Forward</button>
            <button data-explorer-action="up" ${history.path.length ? '' : 'disabled'}>↑ Up</button>
            <label>Address <input readonly value="C:\\${history.path.join('\\')}"></label>
            <button data-explorer-action="toggle-view">Details</button>
            <button data-explorer-action="group-engine" aria-pressed="${history.groupByEngine ? 'true' : 'false'}">Group by engine</button>
        </div>
        <div class="explorer-body">
            <aside class="explorer-sidebar">
                <h3>File and Folder Tasks</h3>
                <button data-explorer-action="home">My Computer</button>
                <button data-explorer-action="projects">My Projects</button>
                <h3>Other Places</h3>
                <button data-explorer-action="about">About Me</button>
                <button data-explorer-action="contact"><span class="start-item-icon">${CONTACT_ICON}</span>Contact</button>
                ${selectedProject ? `<div class="explorer-details"><strong>Details</strong><span class="engine-inline">${selectedEngine.icon}${escapeHtml(selectedEngine.label)}</span><span>${escapeHtml(selectedProject.year || 'Year not set')}</span><span>${escapeHtml((selectedProject.tags || []).join(', ') || 'Tags not set')}</span></div>` : ''}
            </aside>
            <div class="explorer-pane" data-view="${history.view || 'icons'}">
                ${history.view === 'details' ? '<div class="details-heading"><span>Name</span><span>Engine</span></div>' : ''}
                ${entries.length ? entries.map(([name, value]) => `
                    <button class="file-item" type="button" title="${escapeHtml(value?.type ? '' : `${ENGINES[value?.engine || 'other'].label} | ${value?.year || 'Year not set'} | ${(value?.tags || []).join(', ') || 'Tags not set'}`)}" data-entry-name="${escapeHtml(name)}" data-entry-type="${value?.type || 'folder'}">
                        <span class="file-icon">${iconForNode(value)}</span>
                        <span>${value?.type ? '' : `<span class="engine-corner">${(ENGINES[value?.engine || 'other'] || ENGINES.other).icon}</span>`}${escapeHtml(name)}</span>
                        <small class="details-engine">${value?.type ? '' : escapeHtml((ENGINES[value?.engine || 'other'] || ENGINES.other).label)}</small>
                    </button>
                `).join('') : '<p class="empty-folder">This folder is empty.</p>'}
            </div>
        </div>
    `;
    state.element.querySelector('.window-status').textContent = `${entries.length} object(s)`;
}

function openEntry(id, name) {
    const history = explorerHistory.get(id);
    const node = getNode(history.path)?.[name];
    if (!node) return;
    if (!node.type) {
        if (history.path.length === 1 && history.path[0] === 'Projects') {
            const project = getProject(name);
            if (project?.openMode !== 'explorer') openProject(name);
            else {
                history.back.push([...history.path]);
                history.path.push(name);
                history.forward = [];
                renderExplorer(id);
            }
            return;
        }
        history.back.push([...history.path]);
        history.path.push(name);
        history.forward = [];
        renderExplorer(id);
        return;
    }
    if (node.type === 'text') openNotepad(name, typeof node.content === 'function' ? node.content() : node.content);
    if (node.type === 'case-study') renderCaseStudy(node.project);
    if (node.type === 'image') openImageViewer(name, node.src);
    if (node.type === 'url') window.open(node.href, '_blank', 'noopener,noreferrer');
}

document.addEventListener('dblclick', (event) => {
    const item = event.target.closest('.file-item');
    if (!item) return;
    openEntry(item.closest('.xp-window').dataset.windowId, item.dataset.entryName);
});

document.addEventListener('contextmenu', (event) => {
    const item = event.target.closest('.file-item');
    if (!item) return;
    const windowElement = item.closest('.xp-window');
    const history = windowElement && explorerHistory.get(windowElement.dataset.windowId);
    if (history?.path.length === 1 && history.path[0] === 'Projects' && item.dataset.entryType === 'folder') {
        event.preventDefault();
        explorerWindow(['Projects', item.dataset.entryName]);
    }
});

document.addEventListener('click', (event) => {
    const action = event.target.closest('[data-explorer-action]');
    if (!action) return;
    const windowElement = action.closest('.xp-window');
    const id = windowElement?.dataset.windowId;
    const history = id && explorerHistory.get(id);
    if (!history) return;
    const name = action.dataset.explorerAction;
    if (name === 'toggle-view') {
        const pane = windowElement.querySelector('.explorer-pane');
        const details = pane.dataset.view === 'details';
        pane.dataset.view = details ? 'icons' : 'details';
        history.view = pane.dataset.view;
        action.textContent = details ? 'Details' : 'Icons';
        return;
    }
    if (name === 'group-engine') {
        history.groupByEngine = !history.groupByEngine;
        renderExplorer(id);
        return;
    }
    if (name === 'back' && history.back.length) {
        history.forward.push([...history.path]);
        history.path = history.back.pop();
    } else if (name === 'forward' && history.forward.length) {
        history.back.push([...history.path]);
        history.path = history.forward.pop();
    } else if (name === 'up' && history.path.length) {
        history.back.push([...history.path]);
        history.path.pop();
        history.forward = [];
    } else if (name === 'home') {
        history.back.push([...history.path]);
        history.path = [];
        history.forward = [];
    } else if (name === 'projects') {
        history.back.push([...history.path]);
        history.path = ['Projects'];
        history.forward = [];
    } else if (name === 'about') {
        history.back.push([...history.path]);
        history.path = ['About Me'];
        history.forward = [];
    } else if (name === 'contact') {
        explorerWindow(['Contact']);
        return;
    }
    renderExplorer(id);
});
