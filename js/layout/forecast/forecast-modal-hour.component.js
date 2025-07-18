/*import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/forecast/forecast-modal-hour.component.css');


/**
 * Crea el contenido visual para el modal de una hora del pronóstico.
 * @param {Object} h - Datos de la hora
 * @returns {HTMLElement}
 *
export function createHourModalContent(h) {
    const container = document.createElement('div');
    container.className = 'hour-detail-grid';
  
    const items = [
      { icon: 'fa-clock', label: 'Hora', value: h.hora },
      { icon: 'fa-temperature-three-quarters', label: 'Temperatura', value: `${h.temp}°` },
      { icon: 'fa-cloud-rain', label: 'Lluvia', value: `${h.lluvia} mm` },
      { icon: 'fa-cloud', label: 'Condición', value: h.condicion || 'N/A' },
      { icon: 'fa-wind', label: 'Viento', value: h.viento || 'N/A' },
      { icon: 'fa-solid fa-wind', label: 'Racha', value: h.racha || 'N/A' },
      { icon: 'fa-location-arrow', label: 'Direccion', value: h.direccion || 'N/A' },
      { icon: 'fa-tint', label: 'Humedad', value: `${h.humedad || 'N/A'}` },
      { icon: 'fa-thermometer-half', label: 'Punto de rocío', value: `${h.rocio || 'N/A'}°` }
    ];
  
    items.forEach(({ icon, label, value }) => {
      const row = document.createElement('div');
      row.className = 'hour-detail-row';
      row.innerHTML = `
        <i class="fas ${icon} icon"></i>
        <span class="label">${label}</span>
        <span class="value">${value}</span>
      `;
      container.appendChild(row);
    });
  
    return container;
  }
  */

  import { loadCss } from '../../utils/loadcss.util.js';
import { getDireccionViento } from '../../utils/direccionviento.util.js';
import { createWindDirection } from '../../layout/forecast/wind-direction.component.js';

loadCss('/js/layout/forecast/forecast-modal-hour.component.css');

export function createHourModalContent(h) {
  const container = document.createElement('div');
  container.className = 'forecast-modal';

  const direccionViento = getDireccionViento(parseFloat(h.direccion));

  container.innerHTML = `
    <div class="forecast-header">
      <i class="fas ${h.icon}"></i>
      <div class="condicion">${h.condicion || 'Condición desconocida'}</div>
    </div>

    <div class="forecast-temp-block">
      <i class="fas fa-temperature-three-quarters"></i>
      <div class="temp">${h.temp}°</div>
    </div>

    <div class="forecast-group">
      <h4><i class="fas fa-wind"></i> Viento</h4>
      <!-- Acá se insertará dinámicamente el componente de dirección del viento -->
    </div>

    <div class="forecast-group">
      <h4><i class="fas fa-tint"></i> Humedad</h4>
      <div class="grid-pair">
        <div><strong>Humedad:</strong> ${h.humedad}</div>
        <div><strong>P. de rocío:</strong> ${h.rocio}°</div>
      </div>
    </div>

    <div class="forecast-group">
      <h4><i class="fas fa-cloud-rain"></i> Precipitación</h4>
      <div class="grid-pair">
        <div><strong>Lluvia:</strong> ${h.lluvia} mm</div>
      </div>
    </div>
  `;

  // 🔁 Insertar el componente visual de dirección del viento
  const vientoGroup = container.querySelector('.forecast-group');
  const windComponent = createWindDirection({
    viento: h.viento,
    racha: h.racha,
    grados: parseFloat(h.direccion),
  });
  vientoGroup.appendChild(windComponent);

  return container;
}
