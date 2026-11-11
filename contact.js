function renderContactWindow() {
    const groups = CONTACT.groups.map((group) => `
        <section class="legacy-contact-group">
            <h2>${escapeHtml(group.title)}</h2>
            <div class="legacy-contact-links">
                ${group.links.map((link) => {
                    const external = !link.url.startsWith('mailto:');
                    return `<a class="legacy-contact-link" href="${escapeHtml(link.url)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${escapeHtml(`${link.label}${external ? ', opens in a new tab' : ''}`)}">
                        <span class="legacy-contact-icon" aria-hidden="true">${LINK_ICONS[link.icon] || LINK_ICONS.link}</span>
                        <span><strong>${escapeHtml(link.label)}</strong><small>${escapeHtml(link.note || link.url)}</small></span>
                    </a>`;
                }).join('')}
            </div>
        </section>
    `).join('');

    return `<div class="legacy-contact-page">
        <header class="legacy-contact-header">
            <p class="legacy-contact-kicker">CONTACT</p>
            <h1>Let's connect</h1>
            <p>${escapeHtml(CONTACT.intro)}</p>
        </header>
        ${groups}
        <div class="legacy-contact-actions">
            <button type="button" class="legacy-contact-button" data-copy-email>Copy email</button>
            <button type="button" class="legacy-contact-button" data-open-contact-form>Send a message</button>
            <output class="copy-tooltip" aria-live="polite"></output>
        </div>
    </div>`;
}

function openContactApp() {
    createWindow({
        title: 'Contact',
        icon: CONTACT_ICON,
        className: 'contact-window',
        width: '650px',
        height: '560px',
        content: renderContactWindow()
    });
}

function openContactFormWindow() {
    createWindow({
        title: 'Outlook Express - Send a message',
        icon: '✉',
        className: 'contact-form-window',
        width: '520px',
        height: '430px',
        content: `<form class="contact-form">
            <p class="app-intro">Send a message to Arthur.</p>
            <label>Name<input name="name" required></label>
            <label>Email<input name="email" type="email" required></label>
            <label>Message<textarea name="message" rows="6" required></textarea></label>
            <button type="submit">Send Message</button>
            <output class="form-status" aria-live="polite"></output>
        </form>`
    });
}

document.addEventListener('click', (event) => {
    const copyButton = event.target.closest('[data-copy-email]');
    if (copyButton) {
        navigator.clipboard?.writeText('arthurhgarcia10@gmail.com');
        copyButton.closest('.legacy-contact-actions').querySelector('.copy-tooltip').textContent = 'Copied!';
    }
    if (event.target.closest('[data-open-contact-form]')) openContactFormWindow();
});

document.addEventListener('submit', (event) => {
    if (!event.target.matches('.contact-form')) return;
    event.preventDefault();
    event.target.querySelector('.form-status').textContent = 'Thanks! Your email client can be used to send this message.';
    const formData = new FormData(event.target);
    window.location.href = `mailto:arthurhgarcia10@gmail.com?subject=Portfolio contact from ${encodeURIComponent(formData.get('name'))}&body=${encodeURIComponent(formData.get('message'))}`;
});
