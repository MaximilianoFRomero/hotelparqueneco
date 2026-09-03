---
description: Ejecuta lint y typecheck del proyecto (pnpm) y reporta errores.
agent: engineer
subtask: true
---

Ejecutá los chequeos de calidad del proyecto Vieja Estación con pnpm:

1. `pnpm lint` (si existe el script)
2. `pnpm typecheck` o `pnpm tsc --noEmit` (según scripts disponibles)

Reportá cualquier error encontrado. Si aparece un error de lint o TypeScript, corregilo y vuelve a ejecutar hasta que pase. Si el script no existe, revisá `package.json` y comunicá qué scripts de validación están disponibles.
