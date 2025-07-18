// js/modules/home/home.view.js
import { getPronosticos } from './home.api.js';

import { createForecastCarousel } from '../../layout/forecast/forecast-carousel.component.js';

export async function render(container) {
  container.innerHTML = '';

  try {
    const data = await getPronosticos ();
    console.log(data);
    const carousel = createForecastCarousel(data);
    container.appendChild(carousel);
  } catch (err) {
    console.error('Error cargando pronóstico:', err);
    container.innerHTML = '<p>Error cargando el pronóstico. Intentá de nuevo más tarde.</p>';
  }
}