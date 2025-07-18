export function loadCss(href) {
    const alreadyLoaded = document.querySelector(`link[href="${href}"]`);
    if (alreadyLoaded) return;
  
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }