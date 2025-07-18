// js/layout/forecast/forecast-carousel.component.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/layout/forecast/forecast-carousel.component.css');

import { createForecastLocation } from './forecast-location.component.js';

/**
 * Crea el carrusel horizontal con múltiples ubicaciones
 * @param {Array<Object>} ubicaciones - Array de ubicaciones con su pronóstico
 * @returns {HTMLElement}
 */
export function createForecastCarousel(ubicaciones) {
    const wrapper = document.createElement('div');
    wrapper.className = 'forecast-carousel-wrapper';

    const carousel = document.createElement('div');
    carousel.className = 'forecast-carousel';
    carousel.id = 'forecast-carousel';

    ubicaciones.forEach(ubicacion => {
        const locationCard = createForecastLocation(ubicacion);
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.appendChild(locationCard);
        carousel.appendChild(slide);
    });

    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';

    ubicaciones.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        indicators.appendChild(dot);
    });

    wrapper.appendChild(carousel);
    wrapper.appendChild(indicators);

    // Scroll + indicador activo
    carousel.addEventListener('scroll', () => {
        const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
        const dots = indicators.querySelectorAll('.carousel-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    });

    return wrapper;
}
