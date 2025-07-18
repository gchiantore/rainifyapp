import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/loader/loader.component.css');

/**
 * Crea un loader animado.
 * @param {Object} [options]
 * @param {'sm'|'md'|'lg'} [options.size='md']
 * @param {boolean} [options.fullscreen=false] - Si es loader de pantalla completa
 * @returns {HTMLDivElement}
 */
export function createLoader({ size = 'md', fullscreen = false } = {}) {
    const loader = document.createElement('div');
    const spinner = document.createElement('div');
    spinner.className = `loader loader-${size}`;

    if (fullscreen) {
        loader.className = 'loader-overlay';
        loader.appendChild(spinner);
    } else {
        loader.className = 'loader-wrapper';
        loader.appendChild(spinner);
    }

    return loader;
}