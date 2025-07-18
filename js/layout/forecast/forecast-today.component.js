

import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/forecast/forecast-today.component.css');

import { createScrollIndicator } from '../../components/scroll-indicator/scroll-indicator.component.js';
import { createModal } from '../../components/modal/modal.component.js';
import { createHourModalContent } from './forecast-modal-hour.component.js';

/**
 * Devuelve la hora más cercana en el array `hoy` a la hora actual.
 * @param {Array} hoy - array de objetos horarios con campo .hora tipo "8", "14"
 */
function getHoraMasCercana(hoy, actualHour) {
  let minDiff = Infinity;
  let resultado = hoy[0];

  hoy.forEach(h => {
    const hNum = parseInt(h.hora);
    const diff = Math.abs(hNum - actualHour);
    if (diff < minDiff) {
      minDiff = diff;
      resultado = h;
    }
  });

  return resultado;
}

/**
 * Crea la card de pronóstico de hoy
 * @param {Object} data
 * @param {Object} data.actual - Datos actuales
 * @param {Array} data.hoy - Array con las próximas horas
 * @returns {HTMLElement}
 */
export function createTodayCard({ actual, hoy }) {
  const section = document.createElement('section');
  section.className = 'forecast-today';

  const ahora = new Date();
  const horaActual = ahora.getHours();
  const hCercana = getHoraMasCercana(hoy, horaActual);
  
  // Parte actual
  const nowElement = document.createElement('div');
  nowElement.className = 'today-now';
  nowElement.innerHTML = `
    <i class="fas ${hCercana.icon} weather-icon"></i>
    <div class="temp-now">${hCercana.temp}°</div>
    <div class="state-now">${hCercana.condicion}</div>
    <div class="extra-info">
      <span><i class="fas fa-tint"></i> ${hCercana.humedad}</span>
      <span><i class="fas fa-wind"></i> ${hCercana.viento}</span>
    </div>
  `;

  // Scroll + indicadores
  const scrollWrapper = document.createElement('div');
  scrollWrapper.className = 'hours-scroll-wrapper';

  const scrollLeft = createScrollIndicator({direction:'left', size:'sm'});
  const scrollRight = createScrollIndicator({direction:'right', size:'sm'});

  const hoursScroll = document.createElement('div');
  hoursScroll.className = 'hours-scroll';

  hoy.forEach(h => {
    const box = document.createElement('div');
    box.className = 'hour-box';
    box.innerHTML = `
      <div class="hour">${h.hora}</div>
      <i class="fas ${h.icon} weather-icon-small"></i>
      <div class="temp">${h.temp}°</div>
     
    `;
    hoursScroll.appendChild(box);
    box.addEventListener('click', () => {
      const modal = createModal({
        title: `Detalle - ${h.hora}`,
        content: createHourModalContent(h)
      });
      modal.open();
    });
  });

  scrollWrapper.appendChild(scrollLeft);
  scrollWrapper.appendChild(hoursScroll);
  scrollWrapper.appendChild(scrollRight);

  // Lógica de visibilidad flechas
  function updateIndicators() {
    const maxScroll = hoursScroll.scrollWidth - hoursScroll.clientWidth;
    scrollLeft.classList.toggle('hidden', hoursScroll.scrollLeft <= 5);
    scrollRight.classList.toggle('hidden', hoursScroll.scrollLeft >= maxScroll - 5);
  }

  hoursScroll.addEventListener('scroll', updateIndicators);
  window.addEventListener('resize', updateIndicators);
  setTimeout(updateIndicators, 50); // primer render

  // Ensamblado final
  section.appendChild(nowElement);
  section.appendChild(scrollWrapper);

  return section;
}

