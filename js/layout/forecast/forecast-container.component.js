// js/layout/forecast/forecast-container.component.js
import { loadCss } from '../../utils/loadcss.util.js';
import { createForecastToday } from './forecast-today.component.js';
import { createForecastAccordion } from './forecast-accordion.component.js';
import { createForecastPagination } from './forecast-pagination.component.js';

loadCss('/js/layout/forecast/forecast-container.component.css');

/**
 * Crea el contenedor de pronóstico para una ciudad o spot
 * @param {Object} data - Datos del pronóstico
 * @param {string} data.nombre - Nombre del lugar
 * @param {Object} data.actual - Datos actuales y horas de hoy
 * @param {Array} data.dias - Datos diarios (10 días)
 * @param {number} index - Índice actual del slide
 * @param {number} total - Total de slides para paginación
 * @returns {HTMLElement}
 */
export function createForecastContainer({ nombre, actual, dias }, index, total) {
    const container = document.createElement('div');
    container.className = 'forecast-container';

    const pagination = createForecastPagination(index, total);
    const title = `<h2 class="forecast-title">${nombre}</h2>`;
    const today = createForecastToday(actual);
    const accordion = createForecastAccordion(dias);

    container.innerHTML = '';
    container.appendChild(pagination);
    container.insertAdjacentHTML('beforeend', title);
    container.appendChild(today);
    container.appendChild(accordion);

    return container;
}