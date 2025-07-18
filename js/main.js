import { loadView } from './router.js';
import { renderNav } from './layout/nav/nav.view.js';
import { renderHeader } from './layout/header/header.view.js';
import { renderSplash } from './layout/splash/splash.view.js';


document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header');
    const navContainer = document.getElementById('nav');
    // Splash primero
  renderSplash(document.body, () => {
    renderHeader(headerContainer);
    renderNav(navContainer);
    loadView('home');
  });
});  