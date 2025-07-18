import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/select/select.component.css');

/**
 * Crea un componente de selección (dropdown).
 * @param {Object} options
 * @param {string} options.label - Texto del label
 * @param {string} options.name - Atributo name del select
 * @param {Array<{ value: string, label: string }>} options.options - Opciones del select
 * @param {boolean} [options.required=false] - Si es obligatorio
 * @returns {HTMLDivElement}
 */
export function createSelect({ label, name, options, required = false }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'select-wrapper';

  const labelEl = document.createElement('label');
  labelEl.className = 'select-label';
  labelEl.textContent = label;
  labelEl.setAttribute('for', name);

  const selectEl = document.createElement('select');
  selectEl.className = 'select-field';
  selectEl.name = name;
  selectEl.id = name;
  if (required) selectEl.required = true;

  options.forEach(opt => {
    const optionEl = document.createElement('option');
    optionEl.value = opt.value;
    optionEl.textContent = opt.label;
    selectEl.appendChild(optionEl);
  });

  wrapper.appendChild(labelEl);
  wrapper.appendChild(selectEl);
  return wrapper;
}