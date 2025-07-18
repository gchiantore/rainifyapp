import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/modal/modal.component.css');

/**
 * Crea un modal reutilizable.
 * @param {Object} options
 * @param {string} [options.title] - Título del modal
 * @param {HTMLElement} options.content - Contenido principal
 * @param {HTMLElement[]} [options.footerButtons] - Array de botones para el footer
 * @returns {{ element: HTMLElement, open: Function, close: Function }}
 */
export function createModal({ title, content, footerButtons = [] }) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    const modal = document.createElement('div');
    modal.className = 'modal';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Cerrar modal');

    closeButton.addEventListener('click', () => backdrop.classList.remove('visible'));
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('visible');
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') backdrop.classList.remove('visible');
    });

    // Header
    if (title) {
        const header = document.createElement('div');
        header.className = 'modal-header';
        header.innerText = title;
        modal.appendChild(header);
    }

    modal.appendChild(closeButton);

    // Content
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'modal-content';
    contentWrapper.appendChild(content);
    modal.appendChild(contentWrapper);

    // Footer (if buttons exist)
    if (footerButtons.length > 0) {
        const footer = document.createElement('div');
        footer.className = 'modal-footer';
        footerButtons.forEach(btn => footer.appendChild(btn));
        modal.appendChild(footer);
    }

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    return {
        element: backdrop,
        open: () => backdrop.classList.add('visible'),
        close: () => backdrop.classList.remove('visible')
    };
}
