import { loadCss } from '../../utils/loadcss.util.js';

/**
 * Crea un input reutilizable con label, error, etc.
 * @param {Object} options
 * @param {string} options.label - Texto de la etiqueta
 * @param {string} options.placeholder - Placeholder del input
 * @param {string} [options.type="text"] - Tipo de input
 * @param {string} [options.name] - Atributo name
 * @param {string} [options.value] - Valor inicial
 * @param {boolean} [options.required] - Si es obligatorio
 * @param {string} [options.error] - Texto de error
 * @returns {HTMLElement} - Elemento HTML del input completo
 */
export function createInput({ label, placeholder, type = "text", name, value = "", required = false, error = "" }) {
    loadCss('/js/components/input/input.component.css');
    const wrapper = document.createElement('div');
    wrapper.className = 'input-wrapper';
  
    const labelEl = document.createElement('label');
    labelEl.className = 'input-label';
    labelEl.textContent = label;
  
    const inputEl = document.createElement('input');
    inputEl.className = 'input-field';
    inputEl.type = type;
    inputEl.placeholder = placeholder;
    if (name) inputEl.name = name;
    if (value) inputEl.value = value;
    if (required) inputEl.required = true;
  
    if (error) {
      inputEl.classList.add('error');
      const errorEl = document.createElement('div');
      errorEl.className = 'input-error';
      errorEl.textContent = error;
      wrapper.appendChild(errorEl);
    }
  
    wrapper.appendChild(labelEl);
    wrapper.appendChild(inputEl);
  
    return wrapper;
  }