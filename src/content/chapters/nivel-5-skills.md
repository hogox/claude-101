Una **Skill** es "experiencia empaquetada" que Claude aplica **solo cuando hace falta**, sin que se la pidas explícitamente. Buena noticia: lo más útil es automático, no avanzado.

## Nivel base (para todos)

- **Prediseñadas, ya incluidas:** PowerPoint, Excel, Word y PDF. Disponibles para todos en claude.ai y **automáticas**: Claude las usa cuando tu pedido lo amerita (por eso un PPTX le sale bien sin que le expliques cómo armarlo). Solo necesitas tener activado **"Code execution and file creation"** en *Settings → Capabilities*.
- **Crear la tuya sin código:** existe un **skill-creator** que arma la Skill por ti conversando —tú describes tu flujo y Claude genera la estructura, sin editar archivos a mano—. Ideal para empaquetar el formato de tus informes, tu manual de marca o tu checklist de QA.

📝 **Ejemplo — idea de Skill "Informe mensual":** *"Todos mis informes llevan portada con logo, resumen ejecutivo de máximo 5 líneas, secciones numeradas y una tabla de KPIs al final."* Una vez creada, cada vez que pidas "el informe mensual", Claude aplica ese formato sin que lo repitas.

🎯 **Ejercicio (15 min):** identifica **una instrucción de formato que repites siempre** (cómo ordenas tus documentos, tu tono de correos, tu estructura de actas). Ese es el mejor candidato para tu primera Skill. Anótalo y, si te animas, créalo con el skill-creator.

> 🧭 **Avanzado / opcional:** también puedes crear una Skill **a mano** escribiendo un archivo `SKILL.md` (con formato YAML) y empaquetando una carpeta en ZIP. Eso ya es más técnico; para empezar, el skill-creator no-código es más que suficiente. *En claude.ai cada persona sube las suyas; no se comparten solas entre cuentas.*

🔗 **Aprende más:**
- Qué son y cómo usarlas: [Skills en Claude](https://support.claude.com/en/articles/12512176-what-are-skills).
- Cómo crear una Skill personalizada: [Crear custom skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills).
- Documentación: [Agent Skills — overview](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) y el [repositorio de ejemplos](https://github.com/anthropics/skills).
