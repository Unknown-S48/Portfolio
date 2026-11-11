// 1. THEME TOGGLE
const toggle = document.getElementById('themeToggle');
const label  = document.getElementById('themeLabel');
const icon   = toggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggle(currentTheme);

toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggle(next);
});

function updateToggle(theme) {
    if (theme === 'light') {
        label.textContent = 'Light';
        icon.className = 'fas fa-sun';
    } else {
        label.textContent = 'Dark';
        icon.className = 'fas fa-moon';
    }
}

// 2. TABS
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels  = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabButtons.forEach(b => {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });

        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === 'tab-' + target);
        });
    });
});