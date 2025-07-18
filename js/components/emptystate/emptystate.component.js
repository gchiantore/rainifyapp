import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/emptystate/emptystate.component.css');

/**
 * Crea un componente de Empty State.
 * @param {Object} options
 * @param {string} options.icon - Nombre del ícono FontAwesome (sin el prefijo `fa-`)
 * @param {string} options.title - Título principal
 * @param {string} options.subtitle - Subtítulo o explicación
 * @param {string} [options.actionText] - Texto del botón de acción (opcional)
 * @param {Function} [options.onAction] - Función a ejecutar al hacer clic en el botón
 * @returns {HTMLDivElement}
 */
export function createEmptyState({ icon, title, subtitle, actionText, onAction }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'empty-state';

    const iconEl = document.createElement('i');
    iconEl.className = `fas fa-${icon} empty-icon`;

    const titleEl = document.createElement('h3');
    titleEl.className = 'empty-title';
    titleEl.textContent = title;

    const subtitleEl = document.createElement('p');
    subtitleEl.className = 'empty-subtitle';
    subtitleEl.textContent = subtitle;

    wrapper.appendChild(iconEl);
    wrapper.appendChild(titleEl);
    wrapper.appendChild(subtitleEl);

    if (actionText && onAction) {
        const button = document.createElement('button');
        button.className = 'empty-button';
        button.textContent = actionText;
        button.addEventListener('click', onAction);
        wrapper.appendChild(button);
    }

    return wrapper;
}
