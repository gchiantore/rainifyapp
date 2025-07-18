import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/card/card.component.css');

/**
 * Crea una card reutilizable.
 * @param {Object} options
 * @param {string} [options.image] - URL de imagen (opcional)
 * @param {string} [options.title] - Título principal
 * @param {string} [options.subtitle] - Subtítulo (opcional)
 * @param {string|HTMLElement} [options.body] - Contenido principal
 * @param {HTMLElement} [options.footer] - Elemento para el footer (botones u otros)
 * @returns {HTMLDivElement}
 */
export function createCard({ image, title, subtitle, body, footer }) {
    const card = document.createElement('div');
    card.className = 'card';

    // Header
    if (image || title || subtitle) {
        const header = document.createElement('div');
        header.className = 'card-header';

        if (image) {
            const img = document.createElement('img');
            img.src = image;
            img.alt = title || 'Card image';
            img.className = 'card-image';
            header.appendChild(img);
        }

        const titleContainer = document.createElement('div');

        if (title) {
            const titleEl = document.createElement('div');
            titleEl.className = 'card-title';
            titleEl.textContent = title;
            titleContainer.appendChild(titleEl);
        }

        if (subtitle) {
            const subtitleEl = document.createElement('div');
            subtitleEl.className = 'card-subtitle';
            subtitleEl.textContent = subtitle;
            titleContainer.appendChild(subtitleEl);
        }

        header.appendChild(titleContainer);
        card.appendChild(header);
    }

    // Body
    if (body) {
        const bodyEl = document.createElement('div');
        bodyEl.className = 'card-body';
        if (typeof body === 'string') {
            bodyEl.textContent = body;
        } else {
            bodyEl.appendChild(body);
        }
        card.appendChild(bodyEl);
    }

    // Footer
    if (footer) {
        const footerEl = document.createElement('div');
        footerEl.className = 'card-footer';
        footerEl.appendChild(footer);
        card.appendChild(footerEl);
    }

    return card;
}
