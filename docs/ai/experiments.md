# Experimentos con IA en programación

En este documento se comparan diferentes tareas realizadas con y sin ayuda de inteligencia artificial durante el desarrollo del proyecto TaskFlow.

Se analizó el tiempo invertido, la calidad del código y la comprensión del problema en cada caso.

---

# Experimento 1 — Filtrar números pares

## Sin IA

Se implementó manualmente una función utilizando un bucle y condiciones.

Tiempo aproximado: 10 minutos.

## Con IA

Se pidió a la IA generar la función utilizando `filter()`.

Tiempo aproximado: 1 minuto.

## Resultado

La solución con IA fue más rápida y más limpia, aunque fue necesario revisar el código manualmente.

---

# Experimento 2 — Validaciones del formulario

## Sin IA

Se añadieron validaciones básicas revisando manualmente el formulario.

Tiempo aproximado: 15 minutos.

## Con IA

La IA ayudó a generar validaciones adicionales para longitud mínima y máxima de tareas.

Tiempo aproximado: 3 minutos.

## Resultado

La IA aceleró el proceso y ayudó a detectar casos no contemplados inicialmente.

---

# Experimento 3 — Renderizado de tareas

## Sin IA

La lógica inicial de renderizado se hizo manualmente usando createElement y appendChild.

Tiempo aproximado: 25 minutos.

## Con IA

La IA ayudó a reorganizar el código utilizando funciones reutilizables como `renderTasks()` y `renderTask()`.

Tiempo aproximado: 5 minutos.

## Resultado

El código quedó más limpio y fácil de mantener.

---

# Experimento 4 — Búsqueda de tareas

## Sin IA

Se intentó implementar manualmente usando condiciones y bucles.

Tiempo aproximado: 20 minutos.

## Con IA

La IA sugirió utilizar `includes()` junto con `toLowerCase()` para simplificar la búsqueda.

Tiempo aproximado: 2 minutos.

## Resultado

La solución fue más corta y más fácil de entender.

---

# Experimento 5 — Diseño responsive

## Sin IA

Se realizaron pruebas manuales con media queries.

Tiempo aproximado: 30 minutos.

## Con IA

La IA ayudó a reorganizar el layout y mejorar la adaptación móvil.

Tiempo aproximado: 8 minutos.

## Resultado

La interfaz mejoró visualmente y se adaptó mejor a pantallas pequeñas.

---

# Comparación general

## Ventajas de usar IA

- Reduce tiempo de desarrollo
- Ayuda a detectar errores
- Sugiere mejores prácticas
- Facilita refactorización
- Mejora productividad

---

## Desventajas observadas

- Algunas respuestas eran demasiado complejas
- A veces generaba código innecesario
- Fue necesario revisar manualmente todas las sugerencias

---

# Conclusión

La inteligencia artificial ayudó significativamente durante el desarrollo de TaskFlow.

Las mayores ventajas se observaron en:
- refactorización
- generación de funciones
- validaciones
- mejoras visuales
- documentación

Sin embargo, fue importante comprender el código generado y no depender completamente de las respuestas automáticas.
``` id="83dvk0"

---

# 🔹 Después haz commit

```bash id="rvg9t3"
git add .
git commit -m "docs: add AI experiments documentation"
git push origin main