import { loadView } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  loadView('home');

  const navButtons = document.querySelectorAll('nav button');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      loadView(view);
    });
  });
});