// js/layout/nav.view.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/nav/nav.css');

const routes = [
  { hash: 'home', icon: 'fa-solid fa-cloud-sun', label: 'Inicio' },
  { hash: 'mapa', icon: 'fa-solid fa-map-location-dot', label: 'Mapa' },
  { hash: 'lugares', icon: 'fa-solid fa-city', label: 'Lugares' },
  { hash: 'spot', icon: 'fa-solid fa-location-dot', label: 'Spots' },
  { hash: 'stats', icon: 'fa-solid fa-chart-line', label: 'Stats' },
  { hash: 'cuenta', icon: 'fa-solid fa-user', label: 'Cuenta' }
];

export function renderNav(container) {
  const nav = document.createElement('nav');
  nav.className = 'app-nav';

  nav.innerHTML = routes
    .map(route => {
      return `
        <a href="#${route.hash}" class="nav-item" data-hash="${route.hash}">
          <i class="${route.icon}"></i>
          <span class="nav-label">${route.label}</span>
        </a>
      `;
    })
    .join('');

  container.appendChild(nav);

  const links = nav.querySelectorAll('.nav-item');

  function updateActive() {
    const currentHash = window.location.hash.replace('#', '') || 'home';
    links.forEach(link => {
      const isActive = link.dataset.hash === currentHash;
      link.classList.toggle('active', isActive);
    });
  }

  updateActive();
  window.addEventListener('hashchange', updateActive);
}