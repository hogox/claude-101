Conecta Claude con tus herramientas (Gmail, Google Calendar, Google Drive, etc.) para que lea y actúe sobre tu información real. Y no, no necesitas ser técnico para los conectores comunes.

## Nivel base (para todos)

- Los conectores comunes usan **un flujo de "conectar y autorizar" (OAuth) de un clic**: entras al directorio de conectores, eliges el servicio, pulsas **Conectar** y autorizas el acceso a tu cuenta. **No tienes que sacar tokens ni API keys** de ningún lado.
- Cada acción que Claude propone ejecutar requiere **tu aprobación**.
- **Empieza por lectura:** conecta primero un servicio en modo lectura (calendario o correo) antes de darle permisos para *enviar* o *modificar*.

📝 **Ejemplo:**
```
Revisa mi calendario de mañana y, por cada reunión,
prepárame una nota de una línea con el objetivo y a quién veo.
```
o *"Resume los correos sin responder de esta semana y dime cuáles son urgentes."*

🎯 **Ejercicio (15 min):** conecta **solo un** servicio de lectura (calendario o correo) desde el directorio de conectores y pídele un resumen. Revisa siempre lo que propone hacer antes de aprobarlo.

> 🧭 **Avanzado / opcional:** además de los conectores del directorio, puedes crear un **conector MCP personalizado/remoto** (por ejemplo, para una herramienta interna de tu empresa). Eso **sí** es técnico: requiere la URL de un servidor MCP, a veces credenciales OAuth, y que el servidor sea accesible públicamente. Es territorio de IT/desarrollo; no lo necesitas para el uso diario.

🔗 **Aprende más:**
- Qué son y cómo usar conectores: [Use connectors to extend Claude](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).
- Conectores de Google Workspace: [Use Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors).
- Directorio: [claude.com/connectors](https://claude.com/connectors); y el curso de **MCP** en [Anthropic Academy](https://anthropic.skilljar.com/).
