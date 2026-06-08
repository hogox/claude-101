# Claude 101 — De conversar a trabajar con IA

Micrositio de aprendizaje navegable por capítulos para enseñar a un equipo a usar Claude más allá del
chat (Proyectos, Skills, conectores MCP y Cowork). Cada capítulo trae el contenido de la guía, videos
de YouTube embebidos y un botón **"Completar capítulo"** para avanzar; el progreso se guarda en el
navegador (`localStorage`).

El contenido vive en `src/content/chapters/*.md` (fuente original: `claude-101-guia.md`).

## Stack

Vite · React · TypeScript · Tailwind CSS · shadcn/ui · react-router (HashRouter) · react-markdown.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173
```

Build de producción:

```bash
npm run build
npm run preview    # sirve dist/ con la base /claude-101/
```

## Editar el contenido

- **Texto de un capítulo:** edita el `.md` correspondiente en `src/content/chapters/`.
- **Orden, títulos, videos:** edita `src/content/chapters.ts` (cada capítulo tiene `title`, `subtitle`
  y `videoIds`, una lista de IDs de YouTube — el ID es lo que va después de `watch?v=`).
- **Portada:** `src/pages/HomePage.tsx`.

## Despliegue en GitHub Pages

El repo incluye un workflow en `.github/workflows/deploy.yml` que construye y publica `dist/` en cada
push a `main`.

1. Sube el proyecto a un repositorio de GitHub llamado **`claude-101`** (el `base` en
   `vite.config.ts` debe coincidir con el nombre del repo).
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz push a `main`. Al terminar el workflow, el sitio queda en
   `https://<tu-usuario>.github.io/claude-101/`.

> Si usas otro nombre de repo, cambia `base` en `vite.config.ts` a `/<nombre-del-repo>/`.
> Si lo publicas como sitio raíz (`<usuario>.github.io`), usa `base: "/"`.
