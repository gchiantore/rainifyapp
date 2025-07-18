/**
 * Convierte un ángulo en grados (como número o string tipo "270°") 
 * a dirección cardinal y clase de rotación.
 * @param {number|string} grados - Dirección del viento (ej: 270 o "270°")
 * @returns {Object} Objeto con nombre, ícono y clase CSS para rotación
 */
export function getDireccionViento(grados) {
    // Si viene como string con símbolo °
    if (typeof grados === 'string') {
      grados = parseFloat(grados.replace('°', '').trim());
    }
  
    if (typeof grados !== 'number' || isNaN(grados)) {
      return {
        nombre: "N/A",
        icon: "fa-arrow-up",
        claseRotacion: "rotar-0"
      };
    }
  
    const direcciones = [
      { nombre: "N",   angulo: 0 },
      { nombre: "NNE", angulo: 22.5 },
      { nombre: "NE",  angulo: 45 },
      { nombre: "ENE", angulo: 67.5 },
      { nombre: "E",   angulo: 90 },
      { nombre: "ESE", angulo: 112.5 },
      { nombre: "SE",  angulo: 135 },
      { nombre: "SSE", angulo: 157.5 },
      { nombre: "S",   angulo: 180 },
      { nombre: "SSO", angulo: 202.5 },
      { nombre: "SO",  angulo: 225 },
      { nombre: "OSO", angulo: 247.5 },
      { nombre: "O",   angulo: 270 },
      { nombre: "ONO", angulo: 292.5 },
      { nombre: "NO",  angulo: 315 },
      { nombre: "NNO", angulo: 337.5 }
    ];
  
    const ajustado = ((grados % 360) + 360) % 360;
    const index = Math.round(ajustado / 22.5) % 16;
    const direccion = direcciones[index];
  
    // Ajuste de rotación: norte visual apunta hacia abajo
    const rotacion = (direccion.angulo + 180) % 360;
  
    return {
      nombre: direccion.nombre,
      icon: "fa-arrow-up",
      claseRotacion: `rotar-${Math.round(rotacion)}`
    };
  }
  