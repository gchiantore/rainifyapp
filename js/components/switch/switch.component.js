import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/switch/switch.component.css');

/**
 * Crea un switch interactivo.
 * @param {Object} options
 * @param {string} options.label - Texto a mostrar al lado del switch
 * @param {string} options.name - Name e ID del input
 * @param {boolean} [options.checked=false] - Si está activado por defecto
 * @param {Function} [options.onChange] - Callback al cambiar estado
 * @returns {HTMLDivElement}
 */
export function createSwitch({ label, name, checked = false, onChange }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'switch-wrapper';
  
    const labelEl = document.createElement('label');
    labelEl.textContent = label;
    labelEl.setAttribute('for', name);
    labelEl.className = 'switch-label';
  
    const switchContainer = document.createElement('label');
    switchContainer.className = 'switch';
  
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = name;
    input.name = name;
    input.checked = checked;
  
    const slider = document.createElement('span');
    slider.className = 'slider';
  
    if (onChange) {
      input.addEventListener('change', e => onChange(e.target.checked));
    }
  
    switchContainer.appendChild(input);
    switchContainer.appendChild(slider);
  
    wrapper.appendChild(labelEl);
    wrapper.appendChild(switchContainer);
    return wrapper;
  }