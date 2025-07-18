import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/scroll-indicator/scroll-indicator.component.css');

/**
 * Crea un indicador de scroll con dirección y animación.
 * @param {Object} options
 * @param {'up'|'down'|'left'|'right'} options.direction - Dirección de la flecha
 * @param {'sm'|'md'|'lg'} [options.size='md'] - Tamaño del indicador
 * @param {string} [options.ariaLabel] - Descripción accesible
 * @returns {HTMLElement}
 */
export function createScrollIndicator({ direction = 'down', size = 'md', ariaLabel = 'Scroll indicator' }) {
    const wrapper = document.createElement('div');
    wrapper.className = `scroll-indicator scroll-${direction} size-${size}`;
    wrapper.setAttribute('aria-label', ariaLabel);

    const icon = document.createElement('i');
    icon.className = `fa-solid fa-arrow-${direction}`;

    wrapper.appendChild(icon);
    return wrapper;
}
