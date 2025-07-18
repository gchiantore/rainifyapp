// js/components/table/table.component.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/table/table.component.css');

/**
 * Crea una tabla visual a partir de columnas y datos
 * @param {Object} options
 * @param {Array} options.columns - Array de objetos { key, label, align }
 * @param {Array} options.data - Array de objetos con datos
 * @param {Function} [options.renderActions] - Función para renderizar acciones por fila
 * @returns {HTMLDivElement}
 */
export function createTable({ columns, data, renderActions }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.className = 'custom-table';

    // Head
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    columns.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col.label;
        th.className = `align-${col.align || 'left'}`;
        headRow.appendChild(th);
    });
    if (renderActions) {
        const th = document.createElement('th');
        th.textContent = ''; // Acciones
        headRow.appendChild(th);
    }
    thead.appendChild(headRow);

    // Body
    const tbody = document.createElement('tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.className = `align-${col.align || 'left'}`;
            td.textContent = row[col.key] ?? '';
            tr.appendChild(td);
        });
        if (renderActions) {
            const td = document.createElement('td');
            td.className = 'align-center';
            td.appendChild(renderActions(row));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    wrapper.appendChild(table);
    return wrapper;
}
