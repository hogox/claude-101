import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, PartyPopper } from "lucide-react";

import { chapters } from "@/content/chapters";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ChapterFooterProps {
  index: number;
  isComplete: boolean;
  onComplete: () => void;
}

export function ChapterFooter({
  index,
  isComplete,
  onComplete,
}: ChapterFooterProps) {
  const navigate = useNavigate();
  const prev = index > 0 ? chapters[index - 1] : null;
  const next = index < chapters.length - 1 ? chapters[index + 1] : null;
  const isLast = !next;

  const handleComplete = () => {
    onComplete();
    if (next) {
      navigate(`/capitulo/${next.slug}`);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div className="mt-12">
      <Separator className="mb-8" />

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        {!isComplete ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              ¿Ya hiciste el ejercicio de este capítulo?
            </p>
            <Button size="lg" onClick={handleComplete} className="gap-2">
              <CheckCircle2 className="size-5" />
              {isLast ? "Completar capítulo" : "Completar capítulo y continuar"}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
              <CheckCircle2 className="size-5" />
              Capítulo completado
            </p>
            {isLast ? (
              <div className="flex flex-col items-center gap-3">
                <p className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <PartyPopper className="size-5 text-primary" />
                  ¡Terminaste la guía!
                </p>
                <Button asChild variant="outline">
                  <Link to="/">Volver al inicio</Link>
                </Button>
              </div>
            ) : (
              <Button size="lg" onClick={handleComplete} className="gap-2">
                Ir al siguiente capítulo
                <ArrowRight className="size-5" />
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-stretch justify-between gap-4">
        {prev ? (
          <Button
            asChild
            variant="ghost"
            className="h-auto justify-start whitespace-normal py-3 text-left"
          >
            <Link to={`/capitulo/${prev.slug}`}>
              <ArrowLeft className="size-4 shrink-0" />
              <span className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground">Anterior</span>
                <span className="text-sm font-medium">{prev.label}</span>
              </span>
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button
            asChild
            variant="ghost"
            className="h-auto justify-end whitespace-normal py-3 text-right"
          >
            <Link to={`/capitulo/${next.slug}`}>
              <span className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground">Siguiente</span>
                <span className="text-sm font-medium">{next.label}</span>
              </span>
              <ArrowRight className="size-4 shrink-0" />
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
