import { loadCss } from '../../utils/loadcss.util.js';
import { createAccordion } from '../accordion/accordion.component.js';
import { createButton } from '../button/button.component.js';
import { createTable } from '../table/table.component.js';

loadCss('/js/components/accordion-forecast/accordion-forecast.component.css');

const forecastData = [
    {
        day: 'Martes',
        icon: 'fa-cloud-sun',
        tempMax: 29,
        tempMin: 17,
        rain: 4,
        hourly: [
            { hora: '06:00', temp: '17°C', lluvia: '0 mm', viento: '5 km/h' },
            { hora: '12:00', temp: '25°C', lluvia: '1 mm', viento: '12 km/h' },
            { hora: '18:00', temp: '28°C', lluvia: '3 mm', viento: '9 km/h' },
        ]
    },
    {
        day: 'Miércoles',
        icon: 'fa-sun',
        tempMax: 31,
        tempMin: 19,
        rain: 0,
        hourly: [
            { hora: '06:00', temp: '19°C', lluvia: '0 mm', viento: '3 km/h' },
            { hora: '12:00', temp: '27°C', lluvia: '0 mm', viento: '10 km/h' },
            { hora: '18:00', temp: '31°C', lluvia: '0 mm', viento: '8 km/h' },
        ]
    },
    {
        day: 'Jueves',
        icon: 'fa-cloud-showers-heavy',
        tempMax: 26,
        tempMin: 18,
        rain: 12,
        hourly: [
            { hora: '06:00', temp: '18°C', lluvia: '2 mm', viento: '6 km/h' },
            { hora: '12:00', temp: '23°C', lluvia: '4 mm', viento: '15 km/h' },
            { hora: '18:00', temp: '26°C', lluvia: '6 mm', viento: '12 km/h' },
        ]
    }
];

export function renderForecastAccordion(container) {
    forecastData.forEach(({ day, icon, tempMax, tempMin, rain, hourly }) => {
        const title = `
      <div class="day-summary">
        <div class="day-name">${day}</div>
        <i class="fa-solid ${icon} weather-icon"></i>
        <div class="temps">${tempMin}° / ${tempMax}°</div>
        <div class="rain">${rain} mm</div>
      </div>
    `;

        const table = createTable({
            columns: [
                { key: 'hora', label: 'Hora', align: 'left' },
                { key: 'temp', label: 'Temperatura', align: 'center' },
                { key: 'lluvia', label: 'Lluvia (mm)', align: 'right' },
                { key: 'viento', label: 'Viento (km/h)', align: 'right' }
            ],
            data: hourly.map(h => ({hora:h.hora, temp:h.temp, lluvia:h.lluvia, viento:h.viento})),
        });

        const item = createAccordion({
            title,
            content: table,
            open: false
        });

        container.appendChild(item);
    });
}
