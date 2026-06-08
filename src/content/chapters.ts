// Each chapter's body lives as raw markdown in ./chapters/*.md and is rendered
// with react-markdown. Some chapters come from the source guide; Cowork and
// Claude Code were authored from validated research (June 2026).
import mentalidad from "./chapters/mentalidad.md?raw";
import nivel1 from "./chapters/nivel-1-prompts.md?raw";
import nivel2 from "./chapters/nivel-2-personalizar.md?raw";
import nivel3 from "./chapters/nivel-3-proyectos.md?raw";
import nivel4 from "./chapters/nivel-4-capacidades.md?raw";
import skills from "./chapters/nivel-5-skills.md?raw";
import conectores from "./chapters/nivel-6-conectores.md?raw";
import coworkQueEs from "./chapters/cowork-que-es.md?raw";
import coworkCasos from "./chapters/cowork-casos.md?raw";
import coworkSeguridad from "./chapters/cowork-seguridad.md?raw";
import claudeCode from "./chapters/claude-code.md?raw";
import plan from "./chapters/plan-4-semanas.md?raw";
import recursos from "./chapters/recursos.md?raw";
import errores from "./chapters/errores.md?raw";
import paraLlevar from "./chapters/para-llevar.md?raw";

export type Group =
  | "Comienza aquí"
  | "Semana 1 · Fundamentos"
  | "Semana 2 · Proyectos y entregables"
  | "Semana 3 · Cowork"
  | "Semana 4 · Llevarlo más lejos"
  | "Ayudas y recursos";

export interface Chapter {
  /** stable id / route slug */
  slug: string;
  /** sidebar group: opening, then one group per week, then helps */
  group: Group;
  /** short label for the sidebar */
  label: string;
  /** full chapter title shown at the top of the page */
  title: string;
  /** one-line subtitle / hook shown under the title */
  subtitle: string;
  /** chapter body as markdown */
  body: string;
  /** YouTube video ids embedded at the bottom of the chapter */
  videoIds: string[];
}

export const chapters: Chapter[] = [
  {
    slug: "mentalidad",
    group: "Comienza aquí",
    label: "El cambio de mentalidad",
    title: "El cambio de mentalidad",
    subtitle: "Lo más importante: deja de preguntar, empieza a delegar.",
    body: mentalidad,
    videoIds: ["eNcWAoj_sRI"],
  },
  {
    slug: "plan-4-semanas",
    group: "Comienza aquí",
    label: "Plan de 4 semanas",
    title: "Plan de 4 semanas (sin apuro)",
    subtitle: "La hoja de ruta: ~30–45 min, 3 veces por semana.",
    body: plan,
    videoIds: [],
  },
  {
    slug: "nivel-1-prompts",
    group: "Semana 1 · Fundamentos",
    label: "Prompts que rinden",
    title: "Prompts que rinden",
    subtitle: "Los 5 ingredientes de un prompt profesional.",
    body: nivel1,
    videoIds: [],
  },
  {
    slug: "nivel-2-personalizar",
    group: "Semana 1 · Fundamentos",
    label: "Personalizar Claude",
    title: "Personalizar Claude",
    subtitle: "Preferencias y estilos: configúralo una vez.",
    body: nivel2,
    videoIds: [],
  },
  {
    slug: "nivel-3-proyectos",
    group: "Semana 2 · Proyectos y entregables",
    label: "Proyectos",
    title: "Proyectos (Projects)",
    subtitle: "Contexto persistente: cárgalo una vez, úsalo semanas.",
    body: nivel3,
    videoIds: ["SzKP4tM2_XA"],
  },
  {
    slug: "nivel-4-capacidades",
    group: "Semana 2 · Proyectos y entregables",
    label: "Capacidades de trabajo",
    title: "Las capacidades de trabajo (dentro del chat)",
    subtitle: "Archivos reales, análisis de datos, artefactos.",
    body: nivel4,
    videoIds: ["tdjMFxaZo-E"],
  },
  {
    slug: "cowork-que-es",
    group: "Semana 3 · Cowork",
    label: "Cowork: qué es y cómo empezar",
    title: "Cowork: qué es y cómo empezar",
    subtitle: "En el chat Claude responde; en Cowork, Claude hace.",
    body: coworkQueEs,
    videoIds: ["8vwM96f4b5Q"],
  },
  {
    slug: "cowork-casos",
    group: "Semana 3 · Cowork",
    label: "Cowork: casos de uso en la oficina",
    title: "Cowork: casos de uso en la oficina",
    subtitle: "Tareas reales que puedes delegar hoy.",
    body: coworkCasos,
    videoIds: ["aR66YkFI94o"],
  },
  {
    slug: "cowork-seguridad",
    group: "Semana 3 · Cowork",
    label: "Cowork: permisos y seguridad",
    title: "Cowork: permisos, seguridad y buenas prácticas",
    subtitle: "Hace cambios reales: el criterio importa tanto como la tarea.",
    body: coworkSeguridad,
    videoIds: ["OlbJmceOf44"],
  },
  {
    slug: "nivel-5-skills",
    group: "Semana 4 · Llevarlo más lejos",
    label: "Skills",
    title: "Skills",
    subtitle: "Lo útil es automático; crear las tuyas, opcional.",
    body: skills,
    videoIds: [],
  },
  {
    slug: "nivel-6-conectores",
    group: "Semana 4 · Llevarlo más lejos",
    label: "Conectores (MCP)",
    title: "Conectores (MCP)",
    subtitle: "Los comunes son de un clic; sin API keys.",
    body: conectores,
    videoIds: [],
  },
  {
    slug: "claude-code",
    group: "Semana 4 · Llevarlo más lejos",
    label: "Claude Code: el siguiente nivel",
    title: "Claude Code: el siguiente nivel",
    subtitle: "La misma potencia que Cowork, pero en la terminal.",
    body: claudeCode,
    videoIds: ["1oseAPOrB3g"],
  },
  {
    slug: "recursos",
    group: "Ayudas y recursos",
    label: "Recursos rápidos",
    title: "Recursos rápidos (resumen)",
    subtitle: "Lo oficial y gratis, y lo bueno en español.",
    body: recursos,
    videoIds: [],
  },
  {
    slug: "errores",
    group: "Ayudas y recursos",
    label: "Errores comunes",
    title: "Errores comunes (y cómo evitarlos)",
    subtitle: "Los tropiezos típicos al empezar.",
    body: errores,
    videoIds: [],
  },
  {
    slug: "para-llevar",
    group: "Ayudas y recursos",
    label: "La idea para llevarse",
    title: "La idea para llevarse",
    subtitle: "Domina un flujo de punta a punta.",
    body: paraLlevar,
    videoIds: [],
  },
];

export const chapterSlugs = chapters.map((c) => c.slug);

export function getChapter(slug: string | undefined): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getChapterIndex(slug: string | undefined): number {
  return chapters.findIndex((c) => c.slug === slug);
}

export const groupOrder: Group[] = [
  "Comienza aquí",
  "Semana 1 · Fundamentos",
  "Semana 2 · Proyectos y entregables",
  "Semana 3 · Cowork",
  "Semana 4 · Llevarlo más lejos",
  "Ayudas y recursos",
];
