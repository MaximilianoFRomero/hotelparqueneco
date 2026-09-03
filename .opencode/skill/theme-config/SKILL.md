---
name: theme-config
description: Referencia de convenciones de tematización, tokens de diseño y configuración por negocio para Hotel Parque (Tailwind + Next.js). Usar cuando se trabaje con colores, temas, dark mode, tokens, o config/site, navigation, business, theme.
---

# Tokens de diseño y configuración por negocio — Hotel Parque

Esta skill centraliza las convenciones que AGENTS.md exige para que el proyecto
mantenga consistencia visual y sea reutilizable entre negocios. **Siempre consultá
estas convenciones antes de tocar estilos o configuraciones.**

## 1. Tokens semánticos (tailwind theme)

Usá tokens semánticos, no colores hardcodeados, para desacoplar componentes del branding:

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

Los componentes UI **nunca** declaran colores específicos de marca; referencian
estos tokens. El branding vive solo en `config/theme`.

## 2. Categorías de tokens

Definir como variables/tokens:

```text
colors
typography
font sizes
spacing
border radius
shadows
breakpoints
transitions
z-index
```

No repetir valores arbitrarios en múltiples componentes. Si un valor se usa
frecuentemente, debe existir como token.

## 3. Dark mode

Preparar tema para `light` / `dark` / `system`. Debe ser una **feature
configurable**, no asumir que siempre se necesita. Implementación sugerida:
selección de tema por variante `class` de Tailwind + provider ligero + token
`darkMode: true|false` en config.

## 4. Configuración por negocio

Separar contenido y configuración de la lógica de presentación:

```text
config/
    site.config        # nombre, descripción, URLs, SEO global, OG, i18n locales
    navigation.config  # items de navegación (desktop/mobile), orden, labels i18n
    business.config    # datos de la cervecería: contacto, dirección, redes, horarios, features flags
    theme.config       # branding: colores/tokens, tipografías, dark mode
```

### Feature flags en business.config

Las features deben poder activarse/desactivarse:

```text
events:      true
gallery:     true
menu:        true   # nuestra carta
about:       true   # nosotros
contact:     true   # contacto
reservations:false
reviews:     false
```

Las páginas/secciones deben respetar esos flags y ocultarse/desactivarse
dinámicamente o en build.

## 5. i18n (es/en)

- Español es el idioma por defecto.
- No hardcodear textos en componentes; usar claves de traducción es/en.
- Separar claves por dominio (navigation, business, home, events, about, gallery, menu, contact).
- `APP_NAME`, `APP_ENV`, `PUBLIC_URL`, `ANALYTICS_ID` van por variables de entorno y/o site.config, nunca hardcodeadas.

## 6. Moneda / formatos

No hardcodear formatos monetarios/fechas. Usar APIs de internacionalización
(`Intl.NumberFormat`, `Intl.DateTimeFormat`, `toLocaleDateString`) con el locale actual.

## Checklist rápido

- [ ] ¿Usé tokens semánticos en lugar de colores hardcodeados?
- [ ] ¿Los componentes no dependen del branding específico?
- [ ] ¿La feature respeta su flag en business.config?
- [ ] ¿Los textos están en las claves i18n es/en?
- [ ] ¿No hay formatos/modena hardcodeados?
- [ ] ¿Dark mode (si está activo) contempla los tokens usados?
