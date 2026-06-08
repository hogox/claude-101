import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Circle, GraduationCap, Home } from "lucide-react";

import { chapters, groupOrder } from "@/content/chapters";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface AppSidebarProps {
  isComplete: (slug: string) => boolean;
  onNavigate?: () => void;
}

export function AppSidebar({ isComplete, onNavigate }: AppSidebarProps) {
  const { slug } = useParams();
  const total = chapters.length;
  const done = chapters.filter((c) => isComplete(c.slug)).length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-5 py-5">
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <GraduationCap className="size-5 text-primary" />
          <span>Claude 101</span>
        </Link>
        <p className="mt-1 text-xs text-muted-foreground">
          De conversar a trabajar con IA
        </p>
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="font-medium text-muted-foreground">Tu progreso</span>
            <span className="font-semibold">
              {done} / {total}
            </span>
          </div>
          <Progress value={pct} />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <Link
          to="/"
          onClick={onNavigate}
          className={cn(
            "mb-3 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
            !slug && "bg-accent"
          )}
        >
          <Home className="size-4 shrink-0 text-muted-foreground" />
          Inicio
        </Link>

        {groupOrder.map((group) => {
          const items = chapters.filter((c) => c.group === group);
          if (items.length === 0) return null;
          return (
            <div key={group} className="mb-4">
              <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {group}
              </p>
              <ul className="space-y-0.5">
                {items.map((chapter) => {
                  const active = chapter.slug === slug;
                  const complete = isComplete(chapter.slug);
                  const num = chapters.indexOf(chapter) + 1;
                  return (
                    <li key={chapter.slug}>
                      <Link
                        to={`/capitulo/${chapter.slug}`}
                        onClick={onNavigate}
                        className={cn(
                          "group flex items-start gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                          active && "bg-accent font-medium"
                        )}
                      >
                        {complete ? (
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                        ) : (
                          <Circle className="mt-0.5 size-4 shrink-0 text-muted-foreground/40" />
                        )}
                        <span className="flex-1 leading-snug">
                          <span className="text-muted-foreground">{num}.</span>{" "}
                          {chapter.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
