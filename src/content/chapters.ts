// Each chapter's body is the exact text from the source guide (claude-101-guia.md),
// imported as raw markdown and rendered with react-markdown.
import mentalidad from "./chapters/mentalidad.md?raw";
import nivel1 from "./chapters/nivel-1-prompts.md?raw";
import nivel2 from "./chapters/nivel-2-personalizar.md?raw";
import nivel3 from "./chapters/nivel-3-proyectos.md?raw";
import nivel4 from "./chapters/nivel-4-capacidades.md?raw";
import nivel5 from "./chapters/nivel-5-skills.md?raw";
import nivel6 from "./chapters/nivel-6-conectores.md?raw";
import nivel7 from "./chapters/nivel-7-cowork.md?raw";
import nivel8 from "./chapters/nivel-8-siguiente.md?raw";
import plan from "./chapters/plan-4-semanas.md?raw";
import recursos from "./chapters/recursos.md?raw";
import errores from "./chapters/errores.md?raw";
import paraLlevar from "./chapters/para-llevar.md?raw";

export type Group =
  | "Comienza aquí"
  | "Semana 1 · Fundamentos"
  | "Semana 2 · Proyectos y capacidades"
  | "Semana 3 · Skills y conectores"
  | "Semana 4 · Cowork"
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
  /** exact markdown body from the guide */
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
    label: "Nivel 1 — Prompts que rinden",
    title: "Nivel 1 — Prompts que rinden",
    subtitle: "Los 5 ingredientes de un prompt profesional.",
    body: nivel1,
    videoIds: [],
  },
  {
    slug: "nivel-2-personalizar",
    group: "Semana 1 · Fundamentos",
    label: "Nivel 2 — Personalizar Claude",
    title: "Nivel 2 — Personalizar Claude",
    subtitle: "Preferencias y estilos: configúralo una vez.",
    body: nivel2,
    videoIds: [],
  },
  {
    slug: "nivel-3-proyectos",
    group: "Semana 2 · Proyectos y capacidades",
    label: "Nivel 3 — Proyectos",
    title: "Nivel 3 — Proyectos (Projects)",
    subtitle: "Contexto persistente: cárgalo una vez, úsalo semanas.",
    body: nivel3,
    videoIds: ["SzKP4tM2_XA"],
  },
  {
    slug: "nivel-4-capacidades",
    group: "Semana 2 · Proyectos y capacidades",
    label: "Nivel 4 — Capacidades de trabajo",
    title: "Nivel 4 — Las capacidades de trabajo (dentro del chat)",
    subtitle: "Archivos reales, análisis de datos, artefactos.",
    body: nivel4,
    videoIds: ["tdjMFxaZo-E"],
  },
  {
    slug: "nivel-5-skills",
    group: "Semana 3 · Skills y conectores",
    label: "Nivel 5 — Skills",
    title: "Nivel 5 — Skills",
    subtitle: "Experiencia empaquetada que Claude aplica solo cuando hace falta.",
    body: nivel5,
    videoIds: [],
  },
  {
    slug: "nivel-6-conectores",
    group: "Semana 3 · Skills y conectores",
    label: "Nivel 6 — Conectores (MCP)",
    title: "Nivel 6 — Conectores (MCP)",
    subtitle: "Conecta Claude con tus herramientas reales.",
    body: nivel6,
    videoIds: [],
  },
  {
    slug: "nivel-7-cowork",
    group: "Semana 4 · Cowork",
    label: "Nivel 7 — Cowork",
    title: "Nivel 7 — Cowork (el salto agéntico)",
    subtitle: "En el chat Claude responde; en Cowork, Claude hace.",
    body: nivel7,
    videoIds: ["8vwM96f4b5Q"],
  },
  {
    slug: "nivel-8-siguiente",
    group: "Semana 4 · Cowork",
    label: "Nivel 8 — El siguiente nivel",
    title: "Nivel 8 (opcional) — El siguiente nivel",
    subtitle: "Claude Code y crear tus propias Skills y conectores.",
    body: nivel8,
    videoIds: ["73eFWU-edO4"],
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
  "Semana 2 · Proyectos y capacidades",
  "Semana 3 · Skills y conectores",
  "Semana 4 · Cowork",
  "Ayudas y recursos",
];
