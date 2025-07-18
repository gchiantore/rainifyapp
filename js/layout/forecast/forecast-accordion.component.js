import { loadCss } from '../../utils/loadcss.util.js';
import { createHourModalContent } from './forecast-modal-hour.component.js';
import { createModal } from '../../components/modal/modal.component.js';
loadCss('/js/layout/forecast/forecast-accordion.component.css');

/**
 * Renderiza el acordeón de pronóstico por días.
 * @param {Array} diario - Array de días con resumen y detalle por hora.
 * @returns {HTMLElement}
 */
export function createForecastAccordion(diario) {
    const container = document.createElement('section');
    container.className = 'forecast-accordion';

    diario.forEach(dia => {
        const item = document.createElement('details');
        item.className = 'accordion-item';

        const summary = document.createElement('summary');
        summary.className = 'accordion-summary';
        summary.innerHTML = `
            <div class="day-name">${dia.dia}</div>
            <i class="fas ${dia.icon} weather-icon-small"></i>
            <div class="day-temp">${dia.tempMin}° / ${dia.tempMax}°</div>
            <div class="rain-total">${dia.lluvia} mm</div>
        `;

        const hourlyList = document.createElement('div');
        hourlyList.className = 'hourly-list';

        if (Array.isArray(dia.detalle)) {
            dia.detalle.forEach(h => {
                const hourRow = document.createElement('div');
                hourRow.className = 'hour-row';
                hourRow.innerHTML = `
                    <div class="hour">${h.hora}</div>
                    <i class="fas ${h.icon || 'fa-question'} weather-icon-sm"></i>
                    <div class="temp">${h.temp}°</div>
                    <div class="rain">${h.lluvia} mm</div>
                    <div class="wind">${h.viento}</div>
                `;
                // Agregamos apertura de modal al hacer clic en la fila
                hourRow.addEventListener('click', () => {
                    const modalContent = createHourModalContent(h);
                    const modal = createModal({
                        title: `Detalle - ${h.hora}`,
                        content: modalContent
                    });
                    modal.open();
                });
                hourlyList.appendChild(hourRow);
            });
        } else {
            const noData = document.createElement('div');
            noData.className = 'hour-row';
            noData.textContent = 'Sin datos por hora';
            hourlyList.appendChild(noData);
        }

        item.appendChild(summary);
        item.appendChild(hourlyList);
        container.appendChild(item);
    });

    return container;
}
