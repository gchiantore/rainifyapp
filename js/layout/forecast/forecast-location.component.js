// js/layout/forecast/forecast-location.component.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/forecast/forecast-location.component.css');

import { createTodayCard } from './forecast-today.component.js';
import { createForecastAccordion } from './forecast-accordion.component.js';

/**
 * Crea una card completa de pronóstico para una ubicación específica.
 * @param {Object} datos - Datos del pronóstico.
 * @param {string} datos.nombre - Nombre de la ubicación.
 * @param {Object} datos.hoy - Datos del día actual.
 * @param {Array} datos.dias - Array de días siguientes.
 * @returns {HTMLElement}
 */
export function createForecastLocation({ nombre, actual, hoy, diario }) {
    const card = document.createElement('section');
    card.className = 'forecast-location';

    const header = document.createElement('div');
    header.className = 'location-header';
    header.innerHTML = `
    <h3>${nombre}</h3>
  `;

    const todayCard = createTodayCard({ actual, hoy });
    const accordion = createForecastAccordion(diario);

    card.appendChild(header);
    card.appendChild(todayCard);
    card.appendChild(accordion);

    return card;
}
