import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/radio/radio.component.css');

/**
 * Crea un grupo de radio buttons.
 * @param {Object} options
 * @param {string} options.name - Nombre del grupo
 * @param {Array} options.options - Array de objetos { label, value }
 * @param {string} [options.selected] - Valor seleccionado por defecto
 * @param {Function} [options.onChange] - Callback al cambiar selección
 * @returns {HTMLDivElement}
 */
export function createRadioGroup({ name, options, selected, onChange }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'radio-group';

    options.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'radio-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = opt.value;
        if (selected === opt.value) input.checked = true;

        if (onChange) {
            input.addEventListener('change', () => {
                if (input.checked) onChange(opt.value);
            });
        }

        label.appendChild(input);
        label.append(opt.label);
        wrapper.appendChild(label);
    });

    return wrapper;
}