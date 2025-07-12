/**
 * Theme Manager for DocuHelp
 * Handles light/dark theme switching with persistence
 */
class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme();
        this.systemTheme = this.getSystemTheme();
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.updateThemeIcon();
        this.addEventListeners();
    }

    getStoredTheme() {
        return localStorage.getItem('docuhelp-theme') || 'light';
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('docuhelp-theme', theme);
        this.updateThemeIcon();
        this.announceThemeChange(theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle?.querySelector('i');
        
        if (icon) {
            icon.className = this.currentTheme === 'light' 
                ? 'fas fa-moon text-gray-600' 
                : 'fas fa-sun text-yellow-500';
        }

        // Update button aria-label for accessibility
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                this.currentTheme === 'light' 
                    ? 'Switch to dark mode' 
                    : 'Switch to light mode'
            );
        }
    }

    addEventListeners() {
        // Theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('docuhelp-theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });

        // Keyboard shortcut (Ctrl/Cmd + Shift + D)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    announceThemeChange(theme) {
        // Create announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Theme changed to ${theme} mode`;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Public methods for external use
    getCurrentTheme() {
        return this.currentTheme;
    }

    isDarkMode() {
        return this.currentTheme === 'dark';
    }

    isLightMode() {
        return this.currentTheme === 'light';
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.docuHelpTheme = new ThemeManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}
