import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/badge/badge.component.css');

/**
 * Crea un badge visual (etiqueta pequeña)
 * @param {Object} options
 * @param {string} [options.text] - Texto del badge
 * @param {string} [options.icon] - Clase de icono FontAwesome (ej: 'fa-lock')
 * @param {'default'|'success'|'error'|'warning'|'info'} [options.variant]
 * @returns {HTMLSpanElement}
 */
export function createBadge({ text = '', icon = '', variant = 'default' }) {
    const badge = document.createElement('span');
    badge.className = `badge badge-${variant}`;

    if (icon) {
        const iconEl = document.createElement('i');
        iconEl.className = `fas ${icon} badge-icon`;
        badge.appendChild(iconEl);
    }

    if (text) {
        const spanText = document.createElement('span');
        spanText.textContent = text;
        badge.appendChild(spanText);
    }

    return badge;
}