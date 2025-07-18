
const views = {
    home: () => import('./modules/home/home.view.js'),
    mapa: () => import('./modules/mapa/mapa.view.js'),
    cuenta: () => import('./modules/cuenta/cuenta.view.js'),
    lugares: () => import('./modules/lugares/lugares.view.js'),
    spot: () => import('./modules/spot/spot.view.js'),
    stats: () => import('./modules/stats/stats.view.js')
  };
  
  export async function loadView(name) {
    const view = views[name];
    if (!view) return;
  
    const module = await view();
    const container = document.getElementById('app');
    container.innerHTML = '';
  
    // Si la vista pide ocultar header/nav
    const hideUI = module.hideUI || false;
    document.getElementById('header').style.display = hideUI ? 'none' : 'block';
    document.getElementById('nav').style.display = hideUI ? 'none' : 'flex';
  
    module.render(container);
  }

  // Detectar cambios en el hash
function handleRouteChange() {
  const hash = window.location.hash.replace('#', '') || 'home';
  loadView(hash);
}

// Escuchar cambios
window.addEventListener('hashchange', handleRouteChange);

// Inicial
handleRouteChange();