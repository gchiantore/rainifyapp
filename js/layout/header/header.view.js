// js/layout/header.view.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/header/header.css');

export function renderHeader(container) {
    const header = document.createElement('header');
    header.className = 'app-header';

    header.innerHTML = `
      <img src="/assets/img/rainify-logo-ligth.png" alt="Rainify" class="logo-centered" />
    `;

    container.appendChild(header);
}