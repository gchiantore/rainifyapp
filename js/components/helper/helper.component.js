// js/components/helpertext/helpertext.component.js

import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/helper/helper.component.css');

/**
 * Crea un helper text que aparece al enfocar el campo relacionado.
 * @param {string} text - El texto de ayuda a mostrar.
 * @param {string} forId - El ID del input asociado.
 * @returns {HTMLDivElement}
 */
export function createHelperText(text, forId) {
    const helper = document.createElement('div');
    helper.className = 'helper-text';
    helper.textContent = text;
    helper.style.opacity = '0'; // Oculto por defecto
  
    const relatedInput = document.getElementById(forId);
    if (relatedInput) {
      relatedInput.addEventListener('focus', () => {
        helper.style.opacity = '1';
      });
      relatedInput.addEventListener('blur', () => {
        helper.style.opacity = '0';
      });
    } else {
      // Si no encuentra el input aún, espera a que el DOM lo tenga
      setTimeout(() => {
        const retryInput = document.getElementById(forId);
        if (retryInput) {
          retryInput.addEventListener('focus', () => {
            helper.style.opacity = '1';
          });
          retryInput.addEventListener('blur', () => {
            helper.style.opacity = '0';
          });
        }
      }, 100);
    }
  
    return helper;
  }