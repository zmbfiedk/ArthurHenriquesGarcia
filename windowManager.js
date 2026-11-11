const windowState = {
    windows: new Map(),
    nextId: 1,
    nextZ: 20,
    offset: 0
};

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[character]));
}

function createWindow(options) {
    const id = `window-${windowState.nextId++}`;
    const windowElement = document.createElement('article');
    windowElement.className = `xp-window ${options.className || ''}`;
    windowElement.dataset.windowId = id;
    windowElement.innerHTML = `
        <header class="window-titlebar" data-drag-handle>
            <button type="button" class="mobile-back" data-window-action="mobile-back" aria-label="Back">‹</button>
            <span class="window-icon" aria-hidden="true">${options.icon || '▣'}</span>
            <strong>${escapeHtml(options.title || 'Window')}</strong>
            <div class="window-controls">
                <button type="button" data-window-action="minimize" aria-label="Minimize">_</button>
                <button type="button" data-window-action="maximize" aria-label="Maximize">□</button>
                <button type="button" data-window-action="close" aria-label="Close">×</button>
            </div>
        </header>
        <div class="window-content">${options.content || ''}</div>
        ${options.status ? `<footer class="window-status">${options.status}</footer>` : ''}
        <span class="resize-handle" data-resize-handle aria-hidden="true"></span>
    `;
    document.getElementById('windowLayer').append(windowElement);

    const offset = windowState.offset % 5;
    windowState.offset += 1;
    windowElement.style.left = `${Math.max(14, 110 + offset * 28)}px`;
    windowElement.style.top = `${Math.max(14, 62 + offset * 24)}px`;
    if (options.width) windowElement.style.width = options.width;
    if (options.height) windowElement.style.height = options.height;

    const state = { id, element: windowElement, title: options.title, icon: options.icon || '▣', minimized: false, maximized: false };
    windowState.windows.set(id, state);
    bringToFront(id);
    windowElement.addEventListener('pointerdown', () => bringToFront(id));
    enableDragging(windowElement);
    enableResizing(windowElement);
    renderTaskbarWindows();
    requestAnimationFrame(() => windowElement.classList.add('window-open'));
    return id;
}

function bringToFront(id) {
    const state = windowState.windows.get(id);
    if (!state) return;
    state.element.style.zIndex = String(windowState.nextZ++);
    document.querySelectorAll('.taskbar-window-button').forEach((button) => {
        button.classList.toggle('active', button.dataset.windowId === id && !state.minimized);
    });
}

function closeWindow(id) {
    const state = windowState.windows.get(id);
    if (!state) return;
    state.element.remove();
    windowState.windows.delete(id);
    renderTaskbarWindows();
}

function toggleMinimize(id) {
    const state = windowState.windows.get(id);
    if (!state) return;
    state.minimized = !state.minimized;
    state.element.classList.toggle('window-minimized', state.minimized);
    if (!state.minimized) bringToFront(id);
    renderTaskbarWindows();
}

function toggleMaximize(id) {
    const state = windowState.windows.get(id);
    if (!state) return;
    state.maximized = !state.maximized;
    state.element.classList.toggle('window-maximized', state.maximized);
    state.element.querySelector('[data-window-action="maximize"]').textContent = state.maximized ? '❐' : '□';
}

function renderTaskbarWindows() {
    const taskbar = document.getElementById('taskbarWindows');
    taskbar.innerHTML = [...windowState.windows.values()].map((state) => `
        <button class="taskbar-window-button ${state.minimized ? '' : 'active'}" type="button" data-window-id="${state.id}" title="${escapeHtml(state.title)}">
            <span class="taskbar-icon">${typeof state.icon === 'string' && state.icon.startsWith('<svg') ? state.icon : escapeHtml(state.icon)}</span>${escapeHtml(state.title)}
        </button>
    `).join('');
}

function enableDragging(windowElement) {
    const handle = windowElement.querySelector('[data-drag-handle]');
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    handle.addEventListener('pointerdown', (event) => {
        if (window.innerWidth < 700 || event.target.closest('button')) return;
        const state = windowState.windows.get(windowElement.dataset.windowId);
        if (state?.maximized) return;
        dragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = windowElement.offsetLeft;
        startTop = windowElement.offsetTop;
        handle.setPointerCapture(event.pointerId);
    });
    handle.addEventListener('pointermove', (event) => {
        if (!dragging) return;
        windowElement.style.left = `${Math.max(0, startLeft + event.clientX - startX)}px`;
        windowElement.style.top = `${Math.max(0, startTop + event.clientY - startY)}px`;
    });
    handle.addEventListener('pointerup', () => { dragging = false; });
}

function enableResizing(windowElement) {
    const handle = windowElement.querySelector('[data-resize-handle]');
    let resizing = false;
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    handle.addEventListener('pointerdown', (event) => {
        if (window.innerWidth < 700) return;
        const state = windowState.windows.get(windowElement.dataset.windowId);
        if (state?.maximized) return;
        resizing = true;
        startX = event.clientX;
        startY = event.clientY;
        startWidth = windowElement.offsetWidth;
        startHeight = windowElement.offsetHeight;
        handle.setPointerCapture(event.pointerId);
    });
    handle.addEventListener('pointermove', (event) => {
        if (!resizing) return;
        windowElement.style.width = `${Math.max(280, startWidth + event.clientX - startX)}px`;
        windowElement.style.height = `${Math.max(180, startHeight + event.clientY - startY)}px`;
    });
    handle.addEventListener('pointerup', () => { resizing = false; });
}

document.addEventListener('click', (event) => {
    const action = event.target.closest('[data-window-action]');
    if (action) {
        const id = action.closest('.xp-window')?.dataset.windowId;
        if (id) {
            const actionName = action.dataset.windowAction;
            if (actionName === 'close') closeWindow(id);
            if (actionName === 'mobile-back') closeWindow(id);
            if (actionName === 'minimize') toggleMinimize(id);
            if (actionName === 'maximize') toggleMaximize(id);
        }
        return;
    }

    const taskbarButton = event.target.closest('.taskbar-window-button');
    if (taskbarButton) toggleMinimize(taskbarButton.dataset.windowId);
});
