// js/components/avatar/avatar.component.js
import { loadCss } from '../../utils/loadcss.util.js';
loadCss('/js/components/avatar/avatar.component.css');

/**
 * Crea un avatar redondo con imagen, iniciales o ícono.
 * @param {Object} options
 * @param {'sm'|'md'|'lg'} [options.size='md'] - Tamaño del avatar
 * @param {string} [options.img] - URL de la imagen
 * @param {string} [options.initials] - Iniciales
 * @param {string} [options.icon] - Nombre del ícono de FontAwesome
 * @returns {HTMLDivElement}
 */
export function createAvatar({ size = 'md', img, initials, icon }) {
    const avatar = document.createElement('div');
    avatar.className = `avatar avatar-${size}`;

    const content = document.createElement('div');
    content.className = 'avatar-content';

    if (img) {
        const image = document.createElement('img');
        image.src = img;
        image.alt = 'Avatar';
        image.className = 'avatar-img';
        content.appendChild(image);
    } else if (initials) {
        const span = document.createElement('span');
        span.className = 'avatar-initials';
        span.textContent = initials;
        content.appendChild(span);
    }

    avatar.appendChild(content);

    if (icon) {
        const iconEl = document.createElement('div');
        iconEl.className = 'avatar-icon';
        iconEl.innerHTML = `<i class="fas fa-${icon}"></i>`;
        avatar.appendChild(iconEl);
    }

    return avatar;
}