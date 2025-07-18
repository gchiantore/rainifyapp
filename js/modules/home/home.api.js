
// js/modules/home/home.api.js

const API_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * Simula los favoritos del usuario logueado
 */
const mockUserId = 'user123';

const fovori = [
    {
      id: 'fav1',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'La Para',
      lat: -30.894444,
      lon: -62.999722
    },
    {
      id: 'fav2',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'Rancho El Tolo',
      lat: -30.820833,
      lon: -62.883611
    },
    {
      id: 'fav3',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'Laguna Larga',
      lat: -30.910278,
      lon: -62.942222
    },
    {
      id: 'fav4',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'Lomas del Trozo',
      lat: -30.776389,
      lon: -63.015278
    },
    {
      id: 'fav5',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'Villa Fontana',
      lat: -30.895833,
      lon: -63.116667
    },
    {
      id: 'fav6',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'El Tostado',
      lat: -31.004167,
      lon: -63.050278
    },
    {
      id: 'fav7',
      userId: mockUserId,
      tipo: 'spot',
      nombre: 'La Crianza',
      lat: -31.001667,
      lon: -63.000556
    }
  ];




const favoritos = [
    {
        id: 'fav1',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'La Para',
        lat: -30.894444,
        lon: -62.999722
    },
    {
        id: 'fav2',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'Rancho El Tolo',
        lat: -30.820833,
        lon: -62.883611
    },
    {
        id: 'fav3',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'Laguna Larga',
        lat: -30.910278,
        lon: -62.942222
    },
    {
        id: 'fav4',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'Lomas del Trozo',
        lat: -30.776389,
        lon: -63.015278
    },
    {
        id: 'fav5',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'Villa Fontana',
        lat: -30.895833,
        lon: -63.116667
    },
    {
        id: 'fav6',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'El Tostado',
        lat: -31.004167,
        lon: -63.050278
    },
    {
        id: 'fav7',
        userId: mockUserId,
        tipo: 'spot',
        nombre: 'La Crianza',
        lat: -31.001667,
        lon: -63.000556
    }
];

/**
 * Obtiene todos los pronósticos de los favoritos del usuario
 */
export async function getPronosticos() {
    const resultados = [];

    for (const favorito of favoritos) {
        const { id, nombre, tipo, lat, lon, userId } = favorito;

        const url = `${API_URL}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,weathercode,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        const res = await fetch(url);
        const data = await res.json();

        const estructurado = normalizarDatos(data, { id, nombre, tipo, userId });
        resultados.push(estructurado);
    }

    return resultados;
}

/**
 * Normaliza los datos para uso en el frontend
 */
function normalizarDatos(raw, { id, nombre, tipo, userId }) {
    const horas = raw.hourly.time.map((hora, i) => ({
        hora: hora.slice(11, 16), // Solo HH:mm
        fecha: hora.split('T')[0],
        temp: raw.hourly.temperature_2m[i],
        lluvia: raw.hourly.precipitation[i],
        humedad: raw.hourly.relative_humidity_2m[i],
        viento: `${raw.hourly.wind_speed_10m[i]} km/h`,
        direccion: `${raw.hourly.wind_direction_10m[i]}°`,
        racha: `${raw.hourly.wind_gusts_10m[i]} km/h`,
        direccion: `${raw.hourly.wind_direction_10m[i]}°`,
        icon: getIconFromCode(raw.hourly.weathercode[i]),
        estado: getEstadoFromCode(raw.hourly.weathercode[i]),
        condicion: getEstadoFromCode(raw.hourly.weathercode[i]),
        rocio: calcularPuntoRocio(raw.hourly.temperature_2m[i], raw.hourly.relative_humidity_2m[i])
    }));

    // Filtramos cada 3 horas
    const horasFiltradas = horas.filter(h => {
        const hh = parseInt(h.hora.slice(0, 2));
        return hh % 3 === 0;
    });

    // Extraer hoy
    const hoyStr = new Date().toISOString().split('T')[0];
    const hoy = horasFiltradas.filter(h => h.fecha === hoyStr);

    const actual = hoy[0] || horasFiltradas[0];

    return {
        id,
        userId,
        nombre,
        tipo,
        actual: {
            temp: actual.temp,
            icon: actual.icon,
            estado: actual.estado,
            viento: actual.viento,
            humedad: `${actual.humedad}%`,
            rocio: '-' // No disponible en Open-Meteo por ahora
        },
        hoy: hoy.map(h => ({
            hora: h.hora,
            temp: h.temp,
            icon: h.icon,
            lluvia: h.lluvia,
            viento: h.viento,
            humedad: `${h.humedad}%`,
            rocio: h.rocio,
            racha: h.racha,
            direccion: h.direccion,
            condicion: h.estado
        })),
        diario: agruparPorDia(horasFiltradas, hoyStr)
    };
}

function agruparPorDia(horas, hoyStr) {
    const diasMap = {};

    horas.forEach(h => {
        if (h.fecha === hoyStr) return; // omitimos hoy
        if (!diasMap[h.fecha]) diasMap[h.fecha] = [];
        diasMap[h.fecha].push(h);
    });

    return Object.entries(diasMap)
        .slice(0, 10)
        .map(([fecha, detalle]) => {
            const temps = detalle.map(h => h.temp);
            const resumen = detalle[Math.floor(detalle.length / 2)];

            return {
                dia: convertirFechaADia(fecha), // Ej: 'Miércoles'
                icon: resumen.icon,
                tempMax: Math.max(...temps),
                tempMin: Math.min(...temps),
                lluvia: detalle.reduce((acc, h) => acc + h.lluvia, 0),
                detalle: detalle.map(h => ({
                    hora: h.hora,
                    temp: h.temp,
                    icon: h.icon,
                    lluvia: h.lluvia,
                    viento: h.viento,
                    humedad: `${h.humedad}%`,
                    rocio: h.rocio,
                    racha: h.racha,
                    direccion: h.direccion,
                    condicion: h.estado
                }))
            };
        });
}

function convertirFechaADia(fechaStr) {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[new Date(fechaStr).getDay()];
}

/**
 * Devuelve el ícono FontAwesome a partir del weathercode
 */
function getIconFromCode(code) {
    if ([0].includes(code)) return 'fa-sun';
    if ([1, 2].includes(code)) return 'fa-cloud-sun';
    if ([3].includes(code)) return 'fa-cloud';
    if ([45, 48].includes(code)) return 'fa-smog';
    if ([51, 53, 55].includes(code)) return 'fa-cloud-drizzle';
    if ([61, 63, 65, 80, 81, 82].includes(code)) return 'fa-cloud-showers-heavy';
    if ([71, 73, 75, 77, 85, 86].includes(code)) return 'fa-snowflake';
    if ([95, 96, 99].includes(code)) return 'fa-bolt';
    return 'fa-question';
}

/**
 * Devuelve una descripción en texto a partir del weathercode
 */
function getEstadoFromCode(code) {
    if (code === 0) return 'Despejado';
    if ([1, 2].includes(code)) return 'Parcialmente nublado';
    if (code === 3) return 'Nublado';
    if ([45, 48].includes(code)) return 'Neblina';
    if ([51, 53, 55].includes(code)) return 'Llovizna';
    if ([61, 63, 65].includes(code)) return 'Lluvia';
    if ([80, 81, 82].includes(code)) return 'Chubascos';
    if ([71, 73, 75].includes(code)) return 'Nieve';
    if ([95, 96, 99].includes(code)) return 'Tormenta';
    return 'Sin datos';
}

function calcularPuntoRocio(temp, humedad) {
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temp) / (b + temp)) + Math.log(humedad / 100);
    const rocio = (b * alpha) / (a - alpha);
    return `${rocio.toFixed(1)}°C`;
}