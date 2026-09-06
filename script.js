document.addEventListener("DOMContentLoaded", function() {
    const user = "nico";
    const domain = "buehrig.org";
    const mailAddr = user + "@" + domain;

    const link = document.getElementById('mail-link');
    const text = document.getElementById('mail-text');

    if (link && text) {
        link.href = "mailto:" + mailAddr;
        text.textContent = mailAddr;
    }

    // Falls die HTML-Datei lokal von der Festplatte (file://) geöffnet wird:
    if (window.location.protocol === 'file:') {
        const badge = document.getElementById('lab-status-badge');
        if (badge) {
            badge.src = "https://cv.nico-core.de/api/status-badge";
        }
    }
});