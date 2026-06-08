# Claude 101 — De conversar a trabajar con IA

*Guía práctica para pasar del uso de chat (preguntas sueltas) al uso profesional: proyectos, entregables reales, Skills y modo agéntico (Cowork).*

> **Para quién es esto:** alguien que ya usa Claude, ChatGPT o Gemini para conversar y preguntar, pero que nunca ha sacado partido de las funciones "de trabajo". No necesitas saber programar. Solo un navegador y ganas de probar.
>
> **Cómo usar esta guía:** recorre los capítulos en orden. Cada uno trae lo mismo:
> - 📝 **Ejemplo** — para verlo aplicado.
> - 🎯 **Ejercicio** — para que lo hagas tú (la única forma de aprender de verdad).
> - 🔗 **Aprende más** — curso, video o documentación de ese tema.
>
> Está centrada en **Claude**, pero el 80% se traslada igual a ChatGPT y Gemini.

---

## 1. El cambio de mentalidad (lo más importante)

La mayoría usa la IA como un buscador con conversación. Funciona, pero es el 10% de lo que puede hacer. El salto profesional es uno solo:

> **Deja de hacer preguntas. Empieza a delegar trabajo.**

| Uso conversacional | Uso profesional |
|---|---|
| "¿Cómo escribo un correo de seguimiento?" | "Redacta este correo con este contexto, este tono y en 120 palabras." |
| "Dame ideas para una presentación." | "Crea la presentación en PowerPoint con estas 8 secciones y este dato base." |
| Pregunto, copio, pego, repito de cero cada vez. | Configuro un espacio reutilizable con el contexto cargado una sola vez. |
| Yo hago el trabajo, la IA me asiste. | La IA hace el trabajo, yo reviso y dirijo. |

📝 **Ejemplo — el mismo encargo, dos mundos**
- *Conversacional:* "Ayúdame con un correo para un cliente que no ha respondido."
- *Profesional:* "Actúa como ejecutivo de cuentas. Escribe un correo de seguimiento a un cliente que no responde hace 10 días tras enviarle una propuesta. Tono cordial pero con un llamado a la acción claro (agendar una reunión esta semana). Máximo 120 palabras, en español, sin sonar insistente."

El segundo te entrega algo casi listo para enviar; el primero, un borrador genérico que igual tendrás que rehacer.

🎯 **Ejercicio (15 min):** toma los **3 prompts** que más usas en tu trabajo y reescríbelos agregándoles rol, contexto y formato. Guárdalos: serán la base de tu biblioteca de prompts.

🔗 **Aprende más:**
- Curso oficial gratis, sin código: [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) (en inglés).
- Video en español, visión general: [Como usar Claude Anthropic — Tutorial Español 2026](https://www.youtube.com/watch?v=eNcWAoj_sRI).

---

## 2. La ruta por niveles

### Nivel 1 — Prompts que rinden

Un buen prompt profesional tiene **5 ingredientes** (no siempre los cinco, pero a más exigencia, más conviene incluirlos):

1. **Contexto** — quién eres, para qué es, quién lo leerá.
2. **Rol** — "Actúa como editor financiero / diseñador UX / abogado…".
3. **Tarea concreta** — el verbo exacto: redacta, resume, clasifica, compara.
4. **Formato** — tabla, lista, máximo de palabras, tono, idioma.
5. **Ejemplo** — uno o dos ejemplos de la salida que quieres (lo que más sube la calidad).

**Plantilla para copiar:**
```
Actúa como [rol].
Contexto: [quién soy, para qué necesito esto, quién lo leerá].
Tarea: [qué quiero exactamente].
Formato: [estructura, extensión, tono, idioma].
Ejemplo de lo que busco: [pega un ejemplo o describe el estilo].
Si te falta información para hacerlo bien, pregúntame antes de empezar.
```
Esa última línea ("pregúntame antes") mejora muchísimo los resultados. Y recuerda: **itera, no reescribas** ("más corto", "más formal", "cambia solo el segundo párrafo").

📝 **Ejemplo aplicado:**
```
Actúa como analista de negocio.
Contexto: tengo notas desordenadas de una reunión con un cliente y necesito un resumen para mi jefe, que no estuvo presente.
Tarea: ordena las notas en un resumen ejecutivo.
Formato: 1) Decisiones tomadas, 2) Pendientes con responsable, 3) Riesgos. Máximo media página, tono neutro.
[pego mis notas]
```

🎯 **Ejercicio (20 min):** elige una tarea real de hoy y resuélvela primero con un prompt de una línea, luego con la plantilla completa. Compara los dos resultados.

🔗 **Aprende más:**
- Tutorial interactivo oficial y gratuito de Anthropic, **9 capítulos con ejercicios**: [Prompt Engineering Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) (en inglés, muy práctico).
- Guía de prompting de la documentación: [docs.claude.com — Prompt engineering](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview).

### Nivel 2 — Personalizar Claude

Para no repetir tus preferencias en cada chat:
- **Preferencias / instrucciones personales** (en *Settings*): se aplican a todas tus conversaciones.
- **Estilos (Styles)**: guarda un estilo de escritura y actívalo cuando lo necesites.

📝 **Ejemplo — texto para pegar en tus preferencias:**
```
Respóndeme siempre en español (Chile), con tono directo y sin relleno.
Cuando te pida un documento o análisis, usa prosa clara; usa listas o tablas solo si lo pido.
Si una instrucción es ambigua, pregúntame antes de asumir.
```

🎯 **Ejercicio (10 min):** define tus preferencias personales y crea **un** estilo (ej. "Correos de trabajo"). Luego abre un chat nuevo y comprueba que Claude ya responde como tú quieres, sin recordárselo.

🔗 **Aprende más:** centro de ayuda oficial: [support.claude.com](https://support.claude.com) (busca "estilos" / "preferencias").

### Nivel 3 — Proyectos (Projects)

Aquí empieza el uso "de verdad". Un **Proyecto** es un espacio de trabajo con **contexto persistente**: subes documentos, defines instrucciones permanentes y todo lo que converses dentro hereda ese contexto. Así cargas el contexto **una vez** y trabajas sobre él durante semanas.

Casos típicos: un proyecto por **cliente** (su material de marca, su tono, antecedentes) o por **tema recurrente** (ej. "Reportes mensuales", con la plantilla y los criterios cargados).

📝 **Ejemplo — montar un proyecto "Cliente Acme":**
1. Crear proyecto → nombre "Cliente Acme".
2. Subir a la base de conocimiento: el brief, el manual de marca, propuestas anteriores.
3. Instrucciones del proyecto: *"Eres parte del equipo de cuenta de Acme. Tono profesional cercano. Toda propuesta debe terminar con próximos pasos y fecha sugerida."*
4. A partir de ahí, cada chat dentro del proyecto ya "conoce" a Acme.

🎯 **Ejercicio (30 min):** crea tu primer proyecto sobre algo real de tu trabajo, súbele 2–3 documentos de referencia y pídele una tarea que normalmente requeriría explicar todo el contexto. Nota cuánto contexto te ahorraste.

🔗 **Aprende más:**
- Guía oficial en español: [¿Cómo crear y gestionar proyectos?](https://support.claude.com/es/articles/9519177-como-puedo-crear-y-gestionar-proyectos). *La disponibilidad y los límites dependen de tu plan; hoy está orientado a planes de pago — verifica el tuyo.*
- Video en español con caso práctico: [Cómo usar PROYECTOS en Claude AI — Caso ISO 9001](https://www.youtube.com/watch?v=SzKP4tM2_XA).

### Nivel 4 — Las capacidades de trabajo (dentro del chat)

El "no sabía que se podía". Se activan según tu plan, normalmente desde el menú de la conversación:
- **Búsqueda web** — información actual, con fuentes.
- **Crear archivos reales** — no describe el documento, lo **genera** descargable: Word, Excel (con fórmulas), PowerPoint, PDF.
- **Análisis de datos** — súbele un CSV/Excel y pídele tablas, gráficos y hallazgos.
- **Artefactos** — documentos, código o mini-apps que se ven y editan al lado del chat.
- **Imágenes y diagramas**.

📝 **Ejemplo:**
```
Te adjunto un CSV con ventas mensuales por región.
Crea un Excel con: 1) una tabla resumen con totales por región,
2) un gráfico de barras de ventas por región,
3) una pestaña con los 3 hallazgos principales en texto.
```
En vez de copiar datos a mano, recibes el archivo listo.

🎯 **Ejercicio (20 min):** toma un archivo real (una planilla, un PDF, unas notas) y pídele un **entregable terminado** en otro formato (ej. PDF → resumen en Word; planilla → gráfico). Descárgalo y revísalo.

🔗 **Aprende más:** busca "crear archivos" / "create files" en [support.claude.com](https://support.claude.com); y el video general en español [Claude de 0 a Experto: Guía Completa 2026](https://www.youtube.com/watch?v=tdjMFxaZo-E).

### Nivel 5 — Skills

Una **Skill** es "experiencia empaquetada" que Claude aplica **solo cuando hace falta**, sin que se la pidas explícitamente.
- **Prebuilt (ya incluidas):** PowerPoint, Excel, Word y PDF. Disponibles para todos en claude.ai; Claude las usa automáticamente cuando tu pedido lo amerita (por eso un PPTX le sale bien sin que le expliques cómo armarlo).
- **Personalizadas:** tú (o tu equipo) defines una Skill con tus reglas —el formato de tus informes, tu manual de marca, tu checklist de QA—. Se agregan en los *Settings* de claude.ai. *En claude.ai cada persona sube las suyas; no se comparten solas entre cuentas.*

📝 **Ejemplo — idea de Skill personalizada "Informe mensual":** una instrucción que diga *"Todos mis informes llevan portada con logo, resumen ejecutivo de máximo 5 líneas, secciones numeradas y una tabla de KPIs al final"*. Una vez creada, cada vez que pidas "el informe mensual", Claude aplica ese formato sin que lo repitas.

🎯 **Ejercicio (15 min):** identifica **una instrucción de formato que repites siempre** (cómo ordenas tus documentos, tu tono de correos, tu estructura de actas). Ese es el mejor candidato para tu primera Skill. Anótalo.

🔗 **Aprende más:**
- Documentación oficial: [Agent Skills — overview](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview).
- Repositorio de Skills de ejemplo de Anthropic: [github.com/anthropics/skills](https://github.com/anthropics/skills).
- Curso de Skills en [Anthropic Academy](https://anthropic.skilljar.com/) (en inglés). *Nota: muchos videos de Skills en YouTube están enfocados en Claude Code, que es más técnico; para empezar, basta con las Skills de claude.ai.*

### Nivel 6 — Conectores (MCP)

Conecta Claude con tus herramientas (Gmail, Google Calendar, Google Drive, etc.) para que lea y actúe sobre tu información real.

📝 **Ejemplo:**
```
Revisa mi calendario de mañana y, por cada reunión,
prepárame una nota de una línea con el objetivo y a quién veo.
```
o *"Resume los correos sin responder de esta semana y dime cuáles son urgentes."*

🎯 **Ejercicio (15 min):** conecta **solo un** servicio de lectura (calendario o correo) y pídele un resumen. Empieza por conectores de lectura antes de darle permisos para *enviar* o *modificar*, y revisa siempre lo que propone hacer.

🔗 **Aprende más:** busca "conectores" / "connectors" en [support.claude.com](https://support.claude.com); y el curso de **MCP** en [Anthropic Academy](https://anthropic.skilljar.com/).

### Nivel 7 — Cowork (el salto agéntico)

El nivel más alto para trabajo no técnico. **Cowork** vive dentro de la **app de escritorio de Claude** y trae la potencia agéntica de Claude Code a tareas de oficina.

> En el chat, Claude **responde**. En Cowork, Claude **hace**: planifica una tarea de varios pasos, lee y crea archivos en las carpetas que le autorizas, y te entrega el trabajo terminado.

Lo que conviene saber: está en **planes de pago** (Pro, Max, Team, Enterprise), requiere la **app de escritorio** (macOS y Windows), corre en una **máquina virtual aislada** (solo toca las carpetas que le permites) y tú defines el **objetivo**; él descubre el cómo y puedes redirigirlo en cualquier paso.

📝 **Ejemplos reales:**
- *"Limpia mi carpeta de capturas: agrúpalas por fecha, renómbralas de forma descriptiva, elimina duplicados y mueve las antiguas a una carpeta de archivo."*
- *"Toma estas fotos de recibos, extrae la información, crea un informe de gastos en Excel con categorías y totales, y genera un PDF resumen."*

🎯 **Ejercicio (45 min):** instala la app de escritorio, crea una **carpeta de prueba** con archivos que no te importen, y dale una tarea acotada de organización. Revisa el plan **antes** de dejarlo correr. Regla de oro: empieza pequeño y no le des carpetas con información sensible hasta tenerle confianza.

🔗 **Aprende más:**
- Guía oficial para empezar: [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).
- Tutorial en español paso a paso: [DataCamp — Tutorial de Claude Cowork](https://www.datacamp.com/es/tutorial/claude-cowork-tutorial).
- Curso oficial [Introduction to Claude Cowork — Anthropic Academy](https://anthropic.skilljar.com/) (en inglés).
- Video en español: [Claude Cowork — Tutorial Completo en Español 2026](https://www.youtube.com/watch?v=8vwM96f4b5Q).

### Nivel 8 (opcional) — El siguiente nivel

Si tu conocido se engancha: **Claude Code** (versión para terminal, automatización/desarrollo, más técnica) o **crear sus propias Skills y conectores** para su rol. No es necesario para un uso profesional sólido; es para especializarse.

🔗 **Aprende más:** curso [Claude Code 101 — Anthropic Academy](https://anthropic.skilljar.com/) (en inglés) y, en español, [CLAUDE CODE 2026: Curso Completo en Español](https://www.youtube.com/watch?v=73eFWU-edO4).

---

## 3. Plan de 4 semanas (sin apuro)

Una rutina realista de ~30–45 min, 3 veces por semana.

**Semana 1 — Fundamentos.** Mover el trabajo "conversacional" a prompts con los 5 ingredientes. Configurar preferencias y un estilo. Hacer el curso *AI Fluency*.

**Semana 2 — Proyectos + capacidades.** Crear el primer Proyecto con contexto real. Generar el primer entregable real (Word/Excel) en vez de copiar texto. Probar análisis de datos con un archivo propio.

**Semana 3 — Skills + conectores.** Entender cómo Claude usa las Skills prebuilt. Conectar calendario o correo (solo lectura) y pedir resúmenes. Esbozar una Skill personalizada.

**Semana 4 — Cowork.** Instalar la app de escritorio. Primera tarea agéntica acotada sobre una carpeta de prueba. Comparar con cuánto le habría tomado a mano.

---

## 4. Recursos rápidos (resumen)

**Oficiales y gratis (recomendados):**
- [Anthropic Academy](https://anthropic.skilljar.com/) — cursos gratuitos con certificado (en inglés). Empezar por *AI Fluency*, luego *Cowork* y *Skills*.
- [Tutorial de Prompt Engineering](https://github.com/anthropics/prompt-eng-interactive-tutorial) — 9 capítulos con ejercicios.
- [support.claude.com](https://support.claude.com) y [docs.claude.com](https://docs.claude.com) — ayuda y documentación.

**En español (terceros, calidad variable):**
- [Claude de 0 a Experto — Guía Completa 2026](https://www.youtube.com/watch?v=tdjMFxaZo-E) (prompts y Proyectos).
- [DataCamp — Tutorial de Cowork en español](https://www.datacamp.com/es/tutorial/claude-cowork-tutorial).
- [Claude AI desde Cero](https://www.udemy.com/course/claude-ai-desde-cero/) (Udemy, de pago).

> Tip: en YouTube prioriza videos de 2026 — la herramienta cambia rápido y los tutoriales de hace un año ya están desactualizados en funciones y precios.

---

## 5. Errores comunes (y cómo evitarlos)

- **Prompts de una línea para tareas serias.** Si el resultado importa, dale contexto y formato.
- **Empezar de cero cada vez.** Usa Proyectos y reutiliza contexto. Itera en vez de reescribir.
- **Pedir que "describa" en vez de que "haga".** Si quieres un Excel, pide el Excel.
- **Confiar sin revisar.** La IA se equivoca con seguridad. En datos, cifras y temas legales/financieros: verifica siempre.
- **Saltar directo a Cowork.** Sin base de prompts y proyectos, el modo agéntico solo amplifica el desorden.
- **Pegar información sensible sin pensar.** Trata cada chat como un correo: no metas datos que no pondrías por escrito sin cuidado.

---

## 6. La idea para llevarse

Empieza pequeño con **un** flujo real de tu trabajo (un correo, un informe, un análisis) y súbelo de nivel: primero un buen prompt, luego un proyecto, luego un entregable generado, y al final una tarea delegada en Cowork. Dominar un flujo de punta a punta enseña más que ver diez tutoriales.

*Guía orientativa. Las funciones, planes y precios de Claude cambian con frecuencia; verifica los detalles vigentes en claude.ai, support.claude.com y docs.claude.com.*
