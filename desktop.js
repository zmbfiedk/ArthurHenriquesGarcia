let currentLanguage = 'en';

function openDesktopIcon(icon) {
    if (icon.type === 'folder') {
        const project = icon.path[0] === 'Projects' && icon.path[1] ? getProject(icon.path[1]) : null;
        if (project) openProject(project.title.en);
        else explorerWindow(icon.path);
    }
    if (icon.app === 'contact') openContactApp();
    if (icon.app === 'resume') openResume();
    if (icon.type === 'recycle') openNotepad('Recycle Bin', 'The Recycle Bin is empty.');
}

function renderDesktopIcons() {
    const container = document.getElementById('desktopIcons');
    container.innerHTML = desktopIcons.map((icon) => `
        <button class="desktop-icon" type="button" data-desktop-id="${icon.id}" aria-label="${escapeHtml(icon.label)}">
            <span class="desktop-art ${icon.type}-art">${icon.type === 'folder' ? `<span class="folder-tab"></span><span class="folder-body"></span>` : icon.type === 'file' ? 'PDF' : icon.type === 'recycle' ? '♻' : icon.icon || ''}</span>
            <span>${escapeHtml(icon.label)}</span>
        </button>
    `).join('');
}

document.addEventListener('click', (event) => {
    const icon = event.target.closest('[data-desktop-id]');
    if (!icon) return;
    document.querySelectorAll('.desktop-icon.selected').forEach((item) => item.classList.remove('selected'));
    icon.classList.add('selected');
    if (window.innerWidth < 700) {
        const item = desktopIcons.find((entry) => entry.id === icon.dataset.desktopId);
        if (item) openDesktopIcon(item);
    }
});

document.addEventListener('dblclick', (event) => {
    if (window.innerWidth < 700) return;
    const element = event.target.closest('[data-desktop-id]');
    const icon = desktopIcons.find((item) => item.id === element?.dataset.desktopId);
    if (icon) openDesktopIcon(icon);
});

document.addEventListener('keydown', (event) => {
    const icon = document.activeElement.closest?.('[data-desktop-id]');
    if (icon && event.key === 'Enter') {
        const item = desktopIcons.find((entry) => entry.id === icon.dataset.desktopId);
        if (item) openDesktopIcon(item);
    }
});

document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
        currentLanguage = button.dataset.language;
        document.querySelectorAll('[data-language]').forEach((item) => item.classList.toggle('active', item === button));
        document.documentElement.lang = currentLanguage;
        document.querySelectorAll('.explorer-window').forEach((windowElement) => renderExplorer(windowElement.dataset.windowId));
    });
});

function updateClock() {
    document.getElementById('taskbarClock').textContent = new Intl.DateTimeFormat([], { hour: 'numeric', minute: '2-digit' }).format(new Date());
}

function openDisplayApp() {
    createWindow({
        title: 'Display Properties',
        icon: '▣',
        className: 'display-window',
        width: '520px',
        height: '360px',
        content: `<div class="display-settings">
            <h2>Display</h2>
            <label>Theme <select data-theme-select><option value="blue">Blue</option><option value="olive">Olive Green</option><option value="silver">Silver</option></select></label>
            <label>Wallpaper <select data-wallpaper-select><option value="bliss">Bliss</option><option value="midnight">Midnight Blue</option><option value="olive">Olive Hill</option></select></label>
            <button data-apply-display>Apply</button>
        </div>`
    });
}

function openShutdown() {
    createWindow({
        title: 'Turn Off Computer',
        icon: '⏻',
        className: 'shutdown-window',
        width: '420px',
        height: '240px',
        content: `<div class="shutdown-screen"><h2>It is now safe to close this window.</h2><p>Thanks for visiting Arthur's portfolio.</p></div>`
    });
}

document.addEventListener('click', (event) => {
    if (!event.target.matches('[data-apply-display]')) return;
    const windowElement = event.target.closest('.xp-window');
    const theme = windowElement.querySelector('[data-theme-select]').value;
    const wallpaper = windowElement.querySelector('[data-wallpaper-select]').value;
    document.body.dataset.theme = theme;
    document.body.dataset.wallpaper = wallpaper;
});

renderDesktopIcons();
updateClock();
setInterval(updateClock, 60000);
