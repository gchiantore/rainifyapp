/*import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/forecast/wind-direction.component.css');

/**
 * Renderiza el componente de dirección del viento.
 * @param {Object} datos - Datos de viento
 * @param {number} datos.viento - Velocidad del viento (km/h)
 * @param {number} datos.racha - Velocidad de racha (km/h)
 * @param {number} datos.grados - Dirección del viento en grados
 * @returns {HTMLElement}
 
export function createWindDirection({ viento, racha, grados }) {
  const container = document.createElement('div');
  container.className = 'viento-widget';

  // Calcular rotación
  const rotacion = ((grados % 360) + 180) % 360; // Norte hacia abajo

  container.innerHTML = `
    <div class="brujula">
      <div class="ticks">
        <span class="tick">N</span>
        <span class="tick">NE</span>
        <span class="tick">E</span>
        <span class="tick">SE</span>
        <span class="tick">S</span>
        <span class="tick">SO</span>
        <span class="tick">O</span>
        <span class="tick">NO</span>
      </div>
      <div class="flecha" style="transform: translate(-50%, -50%) rotate(${rotacion}deg)">
        <i class="fas fa-arrow-up"></i>
      </div>
    </div>
    <div class="valores-viento">${viento} / ${racha}</div>
    <div class="subtexto">km/h</div>
  `;

  return container;
}

*/


// js/components/wind-direction/wind-direction.component.js

import { loadCss } from '../../utils/loadcss.util.js';
import { getDireccionViento } from '../../utils/direccionviento.util.js';

loadCss('/js/layout/forecast/wind-direction.component.css');

/**
 * Crea un componente visual de dirección del viento.
 * @param {Object} data - Datos del viento
 * @param {number} data.viento - Velocidad del viento (km/h)
 * @param {number} data.racha - Velocidad de la racha (km/h)
 * @param {number|string} data.grados - Dirección del viento en grados
 * @returns {HTMLElement} - Nodo del componente
 */
export function createWindDirection({ viento, racha, grados }) {
  const { claseRotacion } = getDireccionViento(grados);

  const wrapper = document.createElement('div');
  wrapper.className = 'viento-widget';

  wrapper.innerHTML = `
    <div class="brujula">
      <div class="ticks">
        <span class="tick">N</span>
        <span class="tick">NE</span>
        <span class="tick">E</span>
        <span class="tick">SE</span>
        <span class="tick">S</span>
        <span class="tick">SO</span>
        <span class="tick">O</span>
        <span class="tick">NO</span>
      </div>
      <div class="flecha ${claseRotacion}" style="transform: translate(-50%, -50%)">
        <i class="fas fa-arrow-up"></i>
      </div>
    </div>
    <div class="valores-viento">${parseFloat(viento).toFixed(1)} / ${parseFloat(racha).toFixed(1)}</div>
    <div class="subtexto">km/h</div>
  `;

  return wrapper;
}

