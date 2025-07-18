import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/button/button.component.css');

/**
 * Crea un botón reutilizable.
 * @param {Object} options
 * @param {string} options.text - Texto del botón
 * @param {'primary'|'secondary'|'icon'} [options.variant='primary']
 * @param {string} [options.icon] - (opcional) Clase FontAwesome si es botón con ícono
 * @param {Function} [options.onClick] - Handler de click
 * @returns {HTMLButtonElement}
 */
export function createButton({ text='', variant = 'primary', icon='', onClick }) {
    const button = document.createElement('button');
    button.className = `btn btn-${variant}`;
    button.type = 'button';

    if (icon) {
        button.innerHTML = `<i class="${icon}"></i> ${text}`;
    } else {
        button.textContent = text;
    }

    if (onClick) button.addEventListener('click', onClick);

    return button;
}