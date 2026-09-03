# Frontend Development Guidelines

## 1. Objetivo del proyecto

Este proyecto consiste en desarrollar el **frontend de una aplicación web moderna, responsive, accesible, mantenible y escalable**, utilizando Node.js como entorno de desarrollo y pnpm como gestor de paquetes.

El proyecto es para un hotel llamado "Hotel Parque", ubicado en Necochea.

EL proyecto contará solamente con frontend por el momento, pero debe construirse pensando en una posible implementación de backend.

# 2. Principios generales

Todo el desarrollo debe seguir estos principios:

### SOLID

Aplicar los principios SOLID siempre que sean relevantes para el frontend.

Especialmente:

* Single Responsibility Principle
* Open/Closed Principle
* Liskov Substitution Principle
* Interface Segregation Principle
* Dependency Inversion Principle

### DRY

No duplicar:

* Lógica
* Componentes
* Estilos
* Configuración
* Validaciones
* Transformaciones de datos

Si una funcionalidad aparece en más de un lugar, evaluar si debe convertirse en una abstracción reutilizable.

### KISS

Preferir soluciones simples y claras frente a arquitecturas innecesariamente complejas.

No crear abstracciones únicamente por anticipación.

### YAGNI

No implementar funcionalidades que no sean necesarias para el requerimiento actual.

La arquitectura debe permitir crecer, pero no debe sobreingenierizarse.

### Separation of Concerns

Separar correctamente:

* UI
* Estado
* lógica de negocio
* acceso a datos
* configuración
* validaciones
* utilidades
* presentación

---

# 3. Arquitectura

Utilizar una arquitectura modular y escalable.

La estructura debe favorecer la separación entre:

```text
components/
pages/
layouts/
features/
hooks/
services/
lib/
utils/
types/
config/
styles/
assets/
```

La estructura exacta puede adaptarse al framework utilizado.

Evitar colocar toda la lógica dentro de páginas o componentes.

Las páginas deben principalmente:

1. Componer componentes.
2. Obtener o recibir datos.
3. Controlar el flujo de la vista.

La lógica reutilizable debe ubicarse fuera de las páginas.

---

# 4. Componentes

Los componentes deben ser:

* Reutilizables.
* Pequeños cuando sea posible.
* Predecibles.
* Desacoplados.
* Fáciles de testear.
* Responsables de una única tarea principal.

Evitar componentes gigantes que contengan:

* UI
* llamadas HTTP
* lógica de negocio
* validaciones
* transformación de datos
* múltiples responsabilidades

en un mismo archivo.

### Componentes reutilizables

Priorizar la creación de componentes como:

```text
Button
Input
Select
Modal
Card
Badge
Alert
Spinner
Skeleton
Navbar
Footer
Hero
Section
Container
Grid
Carousel
Tabs
Accordion
Dropdown
Pagination
Breadcrumb
```

Estos componentes deben ser suficientemente genéricos para reutilizarse en diferentes proyectos.

---

# 5. Diseño visual

El diseño debe utilizar un sistema visual consistente.

Definir variables o tokens para:

* Colores
* Tipografías
* Tamaños de fuente
* Espaciado
* Border radius
* Sombras
* Breakpoints
* Transiciones
* Z-index

Ejemplo conceptual:

```text
colors
typography
spacing
radius
shadows
breakpoints
transitions
```

No repetir valores arbitrarios en múltiples componentes.

Si un color se utiliza frecuentemente, debe existir como token.

---

# 6. Responsive Design

El diseño debe ser **mobile-first**.

Debe funcionar correctamente en:

* Smartphones
* Tablets
* Notebooks
* Desktop
* Pantallas grandes

No diseñar únicamente para una resolución específica.

Evitar:

* Anchuras fijas innecesarias.
* Alturas rígidas.
* Overflow horizontal.
* Texto que se corte.
* Botones imposibles de utilizar en móvil.
* Elementos que dependan exclusivamente de hover.

Las interfaces deben adaptarse fluidamente al tamaño disponible.

---

# 7. UX / UI

La interfaz debe priorizar:

1. Claridad.
2. Facilidad de uso.
3. Velocidad.
4. Accesibilidad.
5. Conversión.

Cada pantalla debe tener una jerarquía visual clara.

Los usuarios deben poder identificar rápidamente:

* Qué ofrece el negocio.
* Qué acción pueden realizar.
* Cómo contactar.
* Cómo comprar/reservar/consultar.
* Información importante.
* Beneficios principales.

Los CTA deben ser visibles y tener textos claros.

Evitar interfaces excesivamente cargadas.

---

# 8. Estados de interfaz

Todo componente que dependa de datos debe contemplar, cuando corresponda:

### Loading

Mostrar:

* Skeletons
* Spinners
* Placeholders

Evitar pantallas completamente vacías durante cargas prolongadas.

### Error

Mostrar mensajes comprensibles para usuarios.

No mostrar directamente:

* Stack traces
* Errores internos
* Información sensible
* Detalles del backend

### Empty State

Cuando no existen datos, mostrar una explicación clara y, si corresponde, una acción.

### Success

Las acciones importantes deben proporcionar feedback visual.

---

# 9. Accesibilidad

La aplicación debe seguir buenas prácticas de accesibilidad y apuntar a **WCAG 2.1 AA** cuando sea razonablemente posible.

Utilizar HTML semántico:

```html
header
nav
main
section
article
aside
footer
button
form
label
```

Todo elemento interactivo debe poder utilizarse mediante teclado.

Los botones e inputs deben tener nombres accesibles.

Las imágenes relevantes deben utilizar `alt`.

No utilizar únicamente color para comunicar información.

Mantener contraste suficiente entre texto y fondo.

Los modales, menús y componentes interactivos deben gestionar correctamente el foco.

---

# 10. SEO

Cuando corresponda, implementar:

* Títulos únicos.
* Meta descriptions.
* URLs amigables.
* HTML semántico.
* Open Graph.
* Twitter/X Cards.
* Canonical URLs.
* Sitemap.
* Robots.
* Structured Data / JSON-LD cuando sea relevante.

Las páginas públicas deben estar preparadas para indexación.

---

# 11. Performance

La aplicación debe priorizar tiempos de carga rápidos.

Aplicar cuando corresponda:

* Lazy loading.
* Code splitting.
* Optimización de imágenes.
* Formatos modernos como WebP/AVIF.
* Optimización de fuentes.
* Reducción de JavaScript innecesario.
* Evitar dependencias pesadas sin justificación.
* Memoización únicamente cuando aporte beneficios reales.
* Evitar renders innecesarios.
* Caching apropiado.
* Prefetching cuando tenga sentido.

No optimizar prematuramente.

Primero priorizar código correcto y mantenible.

---

# 12. Imágenes y multimedia

Las imágenes deben estar optimizadas.

Siempre que sea posible:

* Utilizar formatos modernos.
* Definir dimensiones.
* Utilizar lazy loading para imágenes fuera del viewport.
* Evitar imágenes gigantes innecesariamente.
* Utilizar imágenes responsive.
* Proporcionar `alt`.

Nunca utilizar una imagen de 4000px cuando visualmente solamente se necesitan 600px.

---

# 13. Estado de la aplicación

No utilizar estado global para todo.

Elegir el nivel de estado apropiado:

```text
Local state
↓
Component state
↓
Feature state
↓
Global state
```

Utilizar estado global únicamente cuando exista una necesidad real.

Evitar almacenar en estado información que pueda derivarse fácilmente de otros datos.

---

# 14. API y backend

Aunque inicialmente el proyecto se concentre exclusivamente en frontend, debe quedar preparado para integrar posteriormente APIs.

La comunicación con backend debe estar abstraída.

Evitar realizar llamadas HTTP directamente desde múltiples componentes.

Preferir una estructura como:

```text
services/
    auth.service
    products.service
    reservations.service
    contact.service
```

Los componentes no deberían conocer detalles innecesarios de:

* URLs.
* Headers.
* Tokens.
* HTTP clients.
* Transformaciones internas.

---

# 15. Configuración

No hardcodear información dependiente del entorno.

Ejemplos:

```text
API_URL
APP_NAME
APP_ENV
PUBLIC_URL
ANALYTICS_ID
```

Utilizar variables de entorno cuando corresponda.

Separar:

```text
development
staging
production
```

Nunca incluir secretos reales en el frontend.

Recordar que cualquier variable expuesta al navegador debe considerarse pública.

---

# 16. Seguridad

El frontend debe seguir buenas prácticas de seguridad.

Evitar:

* `eval`.
* HTML dinámico innecesario.
* Inyección de contenido no sanitizado.
* Exposición de secretos.
* Tokens almacenados de forma insegura sin justificación.
* Dependencias vulnerables.

Validar datos provenientes de usuarios.

Nunca confiar exclusivamente en validaciones frontend.

La validación definitiva debe realizarse también en backend.

---

# 17. Formularios

Los formularios deben:

* Validar datos.
* Mostrar errores claramente.
* Utilizar labels.
* Mantener valores ingresados cuando sea apropiado.
* Mostrar estados de envío.
* Evitar múltiples envíos accidentales.
* Mostrar confirmación cuando corresponda.

Los mensajes de error deben ser comprensibles.

Evitar mensajes técnicos como:

```text
ERR_VALIDATION_422
```

Preferir:

```text
Ingresá un correo electrónico válido.
```

---

# 18. Navegación

La navegación debe ser consistente.

Debe contemplar:

* Desktop.
* Mobile.
* Menús desplegables.
* Breadcrumbs cuando sean útiles.
* Estado activo.
* Navegación mediante teclado.

En móvil, los elementos principales deben ser fácilmente accesibles.

---

# 19. Diseño orientado a diferentes negocios

No asumir que el sitio pertenece a un tipo específico de negocio.

La arquitectura debe soportar diferentes modelos.

Ejemplo:

```text
Business
├── Branding
├── Contact
├── Location
├── Social Media
├── Services
├── Products
├── Reservations
├── Reviews
├── Gallery
├── Promotions
└── Content
```

No todos los negocios necesitan todas las funcionalidades.

Las features deben poder activarse o desactivarse.

Por ejemplo:

```text
gallery: true
reservations: true
products: false
reviews: true
```

Esto permite reutilizar la misma arquitectura para distintos proyectos.

---

# 20. Configuración por negocio

Siempre que sea posible, separar contenido y configuración de la lógica de presentación.

Ejemplo conceptual:

```text
config/
    site.config
    navigation.config
    business.config
    theme.config
```

De esta manera, cambiar un negocio no debería requerir modificar múltiples componentes.

---

# 21. Tematización

Preparar el frontend para soportar diferentes identidades visuales.

Como mínimo:

```text
primary
secondary
accent
background
surface
text
muted
success
warning
error
```

Evitar acoplar componentes a colores específicos.

Los componentes deben consumir tokens de diseño.

---

# 22. Dark Mode

Si el proyecto lo requiere, preparar la arquitectura para soportar:

```text
light
dark
system
```

No asumir que todos los proyectos necesitarán dark mode.

Debe ser una feature configurable.

---

# 23. Animaciones

Las animaciones deben mejorar la experiencia, no distraer.

Utilizar animaciones para:

* Transiciones.
* Feedback.
* Aparición de elementos.
* Navegación.
* Estados interactivos.

Evitar animaciones excesivas.

Respetar:

```css
prefers-reduced-motion
```

Las animaciones no deben ser necesarias para comprender el contenido.

---

# 24. Tipado

Si el proyecto utiliza TypeScript:

* Evitar `any`.
* Definir interfaces/types.
* Tipar props.
* Tipar respuestas de API.
* Tipar configuraciones.
* Evitar duplicación de tipos.

Preferir tipos explícitos cuando mejoren la comprensión.

---

# 25. Código

El código debe ser:

* Legible.
* Predecible.
* Simple.
* Consistente.
* Autodocumentado cuando sea posible.

Evitar comentarios que expliquen código obvio.

Los comentarios deben explicar principalmente:

* Por qué existe una decisión.
* Limitaciones.
* Decisiones arquitectónicas.
* Workarounds.

No utilizar comentarios para justificar código innecesariamente complejo.

---

# 26. Nombres

Utilizar nombres descriptivos.

Preferir:

```text
ReservationForm
ProductCard
BusinessHeader
ContactSection
```

en lugar de:

```text
Box
Thing
Component1
DataContainer
```

Las funciones deben expresar claramente su intención.

Preferir:

```text
calculateTotal()
validateReservation()
formatCurrency()
```

en lugar de:

```text
process()
handleData()
doStuff()
```

---

# 27. Testing

Las funcionalidades importantes deben poder ser testeadas.

Priorizar:

* Unit tests.
* Component tests.
* Integration tests.
* E2E tests cuando corresponda.

Especialmente testear:

* Formularios.
* Validaciones.
* Flujos críticos.
* Autenticación.
* Reservas.
* Compras.
* Navegación.
* Transformación de datos.

---

# 28. Dependencias

Antes de agregar una dependencia:

1. Evaluar si realmente es necesaria.
2. Revisar tamaño.
3. Revisar mantenimiento.
4. Revisar compatibilidad.
5. Revisar vulnerabilidades.
6. Evaluar si puede resolverse con APIs nativas.

No instalar una librería para resolver un problema trivial.

---

# 29. Consistencia

No introducir múltiples soluciones para el mismo problema.

Por ejemplo, evitar tener simultáneamente:

```text
axios
fetch
otra librería HTTP
```

sin una razón arquitectónica clara.

Lo mismo aplica para:

* UI libraries.
* State management.
* Form libraries.
* Validation.
* Date handling.
* Icons.

Elegir una solución principal y mantener consistencia.

---

# 30. Mobile First

Todo componente nuevo debe probarse primero en móvil.

Checklist mínimo:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Verificar:

* Layout.
* Tipografía.
* Espaciado.
* Navegación.
* Botones.
* Formularios.
* Imágenes.
* Overflow.
* Performance.

---

# 31. Progressive Enhancement

Cuando sea posible, la interfaz debe seguir funcionando de manera razonable incluso cuando determinadas capacidades avanzadas no estén disponibles.

No depender innecesariamente de:

* JavaScript complejo.
* Animaciones.
* APIs específicas del navegador.

---

# 32. Internacionalización

La arquitectura debe poder prepararse para múltiples idiomas.

Evitar hardcodear textos directamente en componentes cuando exista una posibilidad razonable de internacionalización.

Ejemplo:

```text
es
en
pt
```

El idioma por defecto dependerá del proyecto.

---

# 33. Moneda y formatos

No hardcodear formatos monetarios.

Preparar la aplicación para diferentes:

* Monedas.
* Fechas.
* Horarios.
* Números.
* Idiomas.

Utilizar APIs de internacionalización cuando corresponda.

---

# 34. Componentes de negocio

Separar componentes genéricos de componentes específicos del negocio.

Ejemplo:

```text
components/ui/
```

para componentes genéricos:

```text
Button
Modal
Input
Card
```

y:

```text
components/business/
```

para componentes específicos:

```text
HotelCard
RoomCard
ProductCard
ReservationForm
ServiceCard
```

Esto permite reutilizar la base tecnológica entre diferentes proyectos.

---

# 35. Evitar sobreingeniería

No crear:

* Abstracciones innecesarias.
* Capas sin propósito.
* Patrones por obligación.
* Configuraciones excesivamente complejas.
* Sistemas genéricos imposibles de mantener.

Los patrones de diseño deben utilizarse cuando solucionen un problema real.

---

# 36. Patrones de diseño

Utilizar patrones cuando sean apropiados.

Posibles patrones:

* Composition
* Factory
* Adapter
* Strategy
* Observer
* Repository
* Dependency Injection
* Facade

En frontend, priorizar composición sobre jerarquías de herencia complejas.

---

# 37. Errores

Los errores deben gestionarse de manera centralizada cuando sea posible.

Debe existir una estrategia consistente para:

```text
Network errors
Validation errors
Authentication errors
Authorization errors
Not found
Server errors
Unexpected errors
```

No duplicar lógica de manejo de errores en cada componente.

---

# 38. Logging

No utilizar `console.log()` indiscriminadamente en producción.

Los logs de desarrollo deben poder eliminarse o controlarse mediante configuración.

Nunca imprimir:

* Tokens.
* Contraseñas.
* Información sensible.
* Credenciales.
* Datos privados.

---

# 39. Git

Utilizar commits claros y descriptivos.

Preferir convenciones como:

```text
feat:
fix:
refactor:
style:
docs:
test:
chore:
perf:
```

Cada commit debe representar un cambio lógico.

Evitar commits gigantes que mezclen múltiples funcionalidades no relacionadas.

---

# 40. Reglas para OpenCode

Antes de implementar una funcionalidad:

1. Analizar la arquitectura existente.
2. Revisar componentes reutilizables.
3. Revisar estilos y tokens existentes.
4. Revisar convenciones del proyecto.
5. Reutilizar antes de crear.
6. Evitar duplicación.
7. Mantener compatibilidad con el resto del sistema.

No modificar archivos que no sean necesarios.

No reescribir componentes existentes sin una razón clara.

No introducir nuevas dependencias sin justificación.

No eliminar funcionalidades existentes para implementar una nueva feature.

Si existe una solución ya implementada que puede reutilizarse, utilizarla.

---

# 41. Antes de finalizar una implementación

Verificar:

* [ ] La funcionalidad funciona.
* [ ] Responsive en móvil.
* [ ] Responsive en tablet.
* [ ] Responsive en desktop.
* [ ] No existe overflow horizontal.
* [ ] Los componentes son reutilizables.
* [ ] No existe código duplicado innecesario.
* [ ] No existen errores de TypeScript.
* [ ] No existen errores de lint.
* [ ] Los estados loading/error/empty fueron contemplados cuando corresponde.
* [ ] La accesibilidad básica fue contemplada.
* [ ] Las imágenes están optimizadas.
* [ ] No se expusieron secretos.
* [ ] No se agregaron dependencias innecesarias.
* [ ] La solución mantiene la arquitectura existente.
* [ ] La UI mantiene consistencia visual.

---

# 42. Regla principal

> **Construir una interfaz moderna, profesional y escalable sin sacrificar simplicidad, mantenibilidad, accesibilidad, performance ni experiencia de usuario.**

La prioridad debe ser:

```text
Correctness
    ↓
UX
    ↓
Accessibility
    ↓
Maintainability
    ↓
Performance
    ↓
Scalability
```

Cuando exista un conflicto entre complejidad y elegancia arquitectónica, preferir la solución **más simple que resuelva correctamente el problema actual y permita evolucionar el proyecto posteriormente**.
