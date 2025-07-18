import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/splash/splash.css');

export function renderSplash(container, onFinish) {
  const splash = document.createElement('div');
  splash.id = 'splash';
  splash.innerHTML = `
    <img src="/assets/img/rainify-logo-ligth.png" alt="Rainify Logo" class="splash-logo" />
    <p class="splash-phrase">Cada gota cuenta.</p>
    <audio id="splash-audio" src="/assets/sounds/drop.mp3" preload="auto"></audio>
  `;

  container.appendChild(splash);

  // Esperar a que cargue bien y hacer salida
  setTimeout(() => {
    splash.classList.add('splash-hide');

    // 🔒 Timeout de respaldo por si la animación falla
    const fallback = setTimeout(() => {
      splash.remove();
      onFinish?.();
    }, 1000); // tiempo de splashOut

    // 🎯 Ideal: escuchar cuando termina la animación de salida
    splash.addEventListener('animationend', () => {
      clearTimeout(fallback);
      splash.remove();
      onFinish?.();
    }, { once: true });

  }, 2000); // tiempo visible del splash
}