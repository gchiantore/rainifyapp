import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/accordion/accordion.component.css');

/**
 * Crea un acordeón reutilizable.
 * @param {Object} options
 * @param {string} options.title - Título del acordeón
 * @param {HTMLElement} options.content - Contenido a mostrar dentro
 * @param {boolean} [options.open=false] - Si debe abrirse por defecto
 * @returns {HTMLDivElement}
 */
export function createAccordion({ title, content, open = false }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'accordion';

    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.innerHTML = `<span>${title}</span><i class="fas fa-chevron-down icon"></i>`;

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.appendChild(content);

    if (open) wrapper.classList.add('open');

    header.addEventListener('click', () => {
        wrapper.classList.toggle('open');
    });

    wrapper.appendChild(header);
    wrapper.appendChild(body);
    return wrapper;
}
