import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/textarea/textarea.component.css');

/**
 * Crea un textarea con estilo consistente.
 * @param {Object} options
 * @param {string} options.label - Texto de etiqueta
 * @param {string} options.name - Name e ID del textarea
 * @param {string} [options.placeholder] - Placeholder opcional
 * @param {string} [options.value] - Valor inicial
 * @returns {HTMLDivElement}
 */
export function createTextarea({ label, name, placeholder = '', value = '' }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'textarea-wrapper';

    const labelEl = document.createElement('label');
    labelEl.setAttribute('for', name);
    labelEl.className = 'textarea-label';
    labelEl.textContent = label;

    const textarea = document.createElement('textarea');
    textarea.name = name;
    textarea.id = name;
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.className = 'textarea';

    wrapper.appendChild(labelEl);
    wrapper.appendChild(textarea);
    return wrapper;
}