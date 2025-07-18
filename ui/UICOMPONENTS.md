
# 🌦️ Componentes UI de Rainify

Este documento lista todos los **componentes base y visuales** implementados para la app, con sus **parámetros** y un ejemplo básico de uso para cada uno.

---

## ✅ COMPONENTES BASE

### 1. `Input`

**Parámetros:**

```js
createInput({ label, name, value = '', placeholder = '', type = 'text', onChange })
```

**Ejemplo:**

```js
const input = createInput({
  label: 'Nombre',
  name: 'nombre',
  placeholder: 'Ingresá tu nombre'
});
```

---

### 2. `Button`

**Parámetros:**

```js
createButton({ label, icon, variant = 'primary', onClick })
```

**Ejemplo:**

```js
const btn = createButton({
  label: 'Guardar',
  icon: 'fa-solid fa-check',
  onClick: () => alert('Guardado')
});
```

---

### 3. `Switch`

**Parámetros:**

```js
createSwitch({ label, name, checked = false, onChange })
```

**Ejemplo:**

```js
createSwitch({
  label: '¿Activado?',
  name: 'activo',
  checked: true,
  onChange: val => console.log(val)
});
```

---

### 4. `Select`

**Parámetros:**

```js
createSelect({ label, name, options = [], selected = '', onChange })
```

**Ejemplo:**

```js
createSelect({
  label: 'Provincia',
  name: 'provincia',
  options: ['Córdoba', 'Santa Fe'],
  onChange: val => console.log(val)
});
```

---

### 5. `Radio`

**Parámetros:**

```js
createRadio({ name, options = [], selected = '', onChange })
```

**Ejemplo:**

```js
createRadio({
  name: 'sexo',
  options: ['Masculino', 'Femenino'],
  selected: 'Femenino'
});
```

---

### 6. `Textarea`

**Parámetros:**

```js
createTextarea({ label, name, value = '', placeholder = '', onChange })
```

**Ejemplo:**

```js
createTextarea({
  label: 'Observaciones',
  name: 'obs',
  placeholder: 'Escribí algo...'
});
```

---

### 7. `HelperText`

**Parámetros:**

```js
createHelperText({ name, text })
```

**Ejemplo:**

```js
createHelperText({ name: 'email', text: 'Ingresá un email válido' });
```

---

### 8. `Divider`

**Parámetros:**

Sin parámetros

**Ejemplo:**

```js
createDivider();
```

---

## 🎨 COMPONENTES VISUALES

### 9. `Badge`

```js
createBadge({ text, icon })
```

---

### 10. `Loader`

```js
createLoader()
```

---

### 11. `KPI`

```js
createKPI({ label, value, icon })
```

---

### 12. `Avatar`

```js
createAvatar({ name, imageUrl, icon, onClick })
```

---

### 13. `EmptyState`

```js
createEmptyState({ icon, title, description })
```

---

### 14. `Modal`

```js
createModal({ title, content, footer, onClose })
```

---

### 15. `Card`

```js
createCard({ title, content })
```

---

### 16. `Table`

```js
createTable({ columns, data, renderActions })
```

---

### 17. `Accordion`

```js
createAccordion({ title, content, open = false })
```

---

### 18. `AccordionForecast`

```js
renderForecastAccordion(container)
```

---

### 19. `ScrollIndicator`

```js
createScrollIndicator({ direction = 'down', size = 'md' })
```

---

# 🧱 Utilidades

- `variables.css`: contiene los colores, tamaños y radios.
- `style.css`: layout general de la app.
- Cada componente está en su carpeta con su `.component.js` y `.css`.

---

> ⚡ Todos los componentes están listos para usarse en cualquier módulo con `loadCss()` y `appendChild()`.
