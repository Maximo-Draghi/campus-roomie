// Función para el menú móvil
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navButtons = document.getElementById('navButtons');

    if (menuToggle && navLinks && navButtons) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navButtons.classList.toggle('active');
            
            // Cambiar icono ☰ a ✕ cuando está activo
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
});