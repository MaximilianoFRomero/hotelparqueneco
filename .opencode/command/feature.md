---
description: Crea un feature nuevo (ej. eventos, galeria, reservas) siguiendo la arquitectura modular de AGENTS.md.
agent: engineer
---

Creá una feature para Vieja Estación (Next.js + TypeScript + Tailwind). Feature a implementar:

$ARGUMENTS

Seguí la arquitectura modular de AGENTS.md: la feature debe vivir idealmente en `features/<nombre>/` con sus componentes, hooks y utils, exponiendo una API clara. La feature debe poder activarse/desactivarse desde `config/` (`business.config`). Separar componentes genéricos (components/ui) de los específicos (components/business). Contempla i18n es/en y estados loading/error/empty cuando corresponda. Reutilizá lo existente antes de crear.
