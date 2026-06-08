import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  GraduationCap,
  Link2,
  RotateCcw,
  Target,
} from "lucide-react";

import { chapters } from "@/content/chapters";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface HomePageProps {
  isComplete: (slug: string) => boolean;
  reset: () => void;
}

export function HomePage({ isComplete, reset }: HomePageProps) {
  const total = chapters.length;
  const done = chapters.filter((c) => isComplete(c.slug)).length;
  const pct = Math.round((done / total) * 100);
  const firstUnfinished = chapters.find((c) => !isComplete(c.slug));
  const startSlug = firstUnfinished?.slug ?? chapters[0].slug;
  const started = done > 0;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium shadow-sm">
          <GraduationCap className="size-4 text-primary" />
          Guía práctica de equipo
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Claude 101 — De conversar a trabajar con IA
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
          Pasa del uso de chat (preguntas sueltas) al uso profesional: proyectos,
          entregables reales, Skills y modo agéntico (Cowork).
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link to={`/capitulo/${startSlug}`}>
              {started ? "Continuar guía" : "Comenzar guía"}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
          {started && (
            <Button variant="ghost" size="lg" onClick={reset} className="gap-2">
              <RotateCcw className="size-4" />
              Reiniciar progreso
            </Button>
          )}
        </div>

        {started && (
          <div className="mx-auto mt-8 max-w-md">
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progreso</span>
              <span className="font-semibold">
                {done} / {total} capítulos
              </span>
            </div>
            <Progress value={pct} />
          </div>
        )}
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <ClipboardList className="size-6 text-primary" />
            <CardTitle className="text-base">📝 Ejemplo</CardTitle>
            <CardDescription>Para verlo aplicado en un caso real.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Target className="size-6 text-primary" />
            <CardTitle className="text-base">🎯 Ejercicio</CardTitle>
            <CardDescription>
              Para que lo hagas tú: la única forma de aprender de verdad.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Link2 className="size-6 text-primary" />
            <CardTitle className="text-base">🔗 Aprende más</CardTitle>
            <CardDescription>
              Curso, video o documentación de cada tema.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-12 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>¿Para quién es esto?</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Alguien que ya usa Claude, ChatGPT o Gemini para conversar y
            preguntar, pero que nunca ha sacado partido de las funciones "de
            trabajo". No necesitas saber programar. Solo un navegador y ganas de
            probar. Está centrada en <strong>Claude</strong>, pero el 80% se
            traslada igual a ChatGPT y Gemini.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cómo usar esta guía</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Recorre los capítulos en orden. Cada uno trae un{" "}
            <strong>📝 Ejemplo</strong>, un <strong>🎯 Ejercicio</strong> y{" "}
            <strong>🔗 Aprende más</strong>. Al terminar cada capítulo márcalo
            como completado para avanzar al siguiente; tu progreso se guarda en
            este navegador.
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold">Contenido</h2>
        <ol className="divide-y rounded-xl border bg-card shadow-sm">
          {chapters.map((c, i) => (
            <li key={c.slug}>
              <Link
                to={`/capitulo/${c.slug}`}
                className="flex items-center gap-3 px-5 py-3 text-sm transition-colors hover:bg-accent"
              >
                <span className="w-6 text-right font-semibold text-muted-foreground">
                  {i + 1}
                </span>
                <span className="flex-1 font-medium">{c.label}</span>
                {isComplete(c.slug) && (
                  <span className="text-xs font-medium text-emerald-600">
                    ✓ Completado
                  </span>
                )}
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-12 text-center text-xs text-muted-foreground">
        Guía orientativa. Las funciones, planes y precios de Claude cambian con
        frecuencia; verifica los detalles vigentes en claude.ai,
        support.claude.com y docs.claude.com.
      </footer>
    </div>
  );
}
