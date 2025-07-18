// js/components/kpi/kpi.component.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/kpi/kpi.component.css');

/**
 * Crea un bloque KPI visual.
 * @param {Object} options
 * @param {string} options.label - Título del KPI (ej: 'Documentos')
 * @param {string|number} options.value - Valor a mostrar
 * @param {string} [options.icon] - Clase FontAwesome opcional
 * @returns {HTMLDivElement}
 */
export function createKpi({ label, value, icon }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'kpi-card';

    if (icon) {
        const iconEl = document.createElement('i');
        iconEl.className = `kpi-icon ${icon}`;
        wrapper.appendChild(iconEl);
    }

    const valueEl = document.createElement('div');
    valueEl.className = 'kpi-value';
    valueEl.textContent = value;

    const labelEl = document.createElement('div');
    labelEl.className = 'kpi-label';
    labelEl.textContent = label;

    wrapper.appendChild(valueEl);
    wrapper.appendChild(labelEl);

    return wrapper;
}