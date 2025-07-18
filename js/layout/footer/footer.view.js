// js/layout/footer.view.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/footer.css');

export function renderFooter(container) {
    const footer = document.createElement('footer');
    footer.className = 'app-footer';

    footer.innerHTML = `
    <div class="footer-content">
      <span class="footer-text">&copy; ${new Date().getFullYear()} Rainify</span>
      <div class="footer-links">
        <a href="#home" class="footer-link">Inicio</a>
        <a href="#mapa" class="footer-link">Mapa</a>
        <a href="#stats" class="footer-link">Estadísticas</a>
      </div>
    </div>
  `;

    container.appendChild(footer);
}