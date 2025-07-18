import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/divider/divider.component.css');

/**
 * Crea un divisor horizontal opcionalmente con texto centrado.
 * @param {string} [text] - Texto opcional para mostrar en el centro del divisor.
 * @returns {HTMLDivElement}
 */
export function createDivider(text = '') {
  const wrapper = document.createElement('div');
  wrapper.className = 'divider-wrapper';

  if (text) {
    wrapper.innerHTML = `
      <hr class="divider-line" />
      <span class="divider-text">${text}</span>
      <hr class="divider-line" />
    `;
  } else {
    wrapper.innerHTML = `<hr class="divider-line" />`;
  }

  return wrapper;
}