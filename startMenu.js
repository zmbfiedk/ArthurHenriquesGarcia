function renderStartMenu() {
    document.getElementById('startMenu').innerHTML = `
        <header class="start-header"><span class="start-avatar">AH</span><strong>Arthur Henriques Garcia</strong></header>
        <div class="start-columns">
            <div class="start-left">
                <button data-start-action="projects">My Projects</button>
                <button data-start-action="about">About Me</button>
                <button data-start-action="contact"><span class="start-item-icon">${CONTACT_ICON}</span>Outlook Express</button>
                <small>Portfolio apps and folders</small>
            </div>
            <div class="start-right">
                <button data-start-action="projects">My Projects</button>
                <button data-start-action="about">My Documents</button>
                <button data-start-action="display">Control Panel</button>
                <button data-start-action="search">Search</button>
            </div>
        </div>
        <footer class="start-footer"><button data-start-action="shutdown">Turn Off Computer</button></footer>
    `;
}

function toggleStartMenu(force) {
    const menu = document.getElementById('startMenu');
    const open = force ?? menu.hidden;
    menu.hidden = !open;
    document.getElementById('startButton').setAttribute('aria-expanded', String(open));
}

document.addEventListener('click', (event) => {
    const startAction = event.target.closest('[data-start-action]');
    if (!startAction) return;
    const action = startAction.dataset.startAction;
    toggleStartMenu(false);
    if (action === 'projects') explorerWindow(['Projects']);
    if (action === 'about') explorerWindow(['About Me']);
    if (action === 'contact') openContactApp();
    if (action === 'display') openDisplayApp();
    if (action === 'search') openSearchApp();
    if (action === 'shutdown') openShutdown();
});

document.getElementById('startButton')?.addEventListener('click', () => toggleStartMenu());
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleStartMenu(false);
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('#startMenu, #startButton')) toggleStartMenu(false);
});

renderStartMenu();
