document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    function loadSection(sectionName, btn) {
        fetch(`sections/${sectionName}.html`)
            .then(response => response.ok ? response.text() : Promise.reject('Section not found'))
            .then(html => {
                contentDiv.innerHTML = html;
                highlightActiveButton(btn);
                loadSectionCSS(sectionName); // Load corresponding CSS
            })
            .catch(() => {
                contentDiv.innerHTML = '<p class="error">Error loading content. Please try again later.</p>';
            });
    }
    
    function loadSectionCSS(sectionName) {
        const oldCSS = document.getElementById('dynamic-section-css');
        if (oldCSS) oldCSS.remove();

        const newCSS = document.createElement('link');
        newCSS.id = 'dynamic-section-css';
        newCSS.rel = 'stylesheet';
        newCSS.href = `sections/${sectionName}.css?v=${new Date().getTime()}`;
        document.head.appendChild(newCSS);
    }

    function highlightActiveButton(activeBtn) {
        document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const section = btn.getAttribute('data-section');
            loadSection(section, btn);
        });
    });

    const defaultBtn = document.querySelector('[data-section="home"]');
    if (defaultBtn) loadSection('home', defaultBtn);

    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'login.html';
            }
        });
    }
});
