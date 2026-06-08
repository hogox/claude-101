import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Youtube } from "lucide-react";

import { chapters, getChapter, getChapterIndex } from "@/content/chapters";
import { Markdown } from "@/components/Markdown";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Badge } from "@/components/ui/badge";

interface ChapterPageProps {
  isComplete: (slug: string) => boolean;
  markComplete: (slug: string) => void;
}

export function ChapterPage({ isComplete, markComplete }: ChapterPageProps) {
  const { slug } = useParams();
  const chapter = getChapter(slug);
  const index = getChapterIndex(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const complete = isComplete(chapter.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="secondary">
            Capítulo {index + 1} de {chapters.length}
          </Badge>
          {complete && <Badge variant="success">Completado</Badge>}
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {chapter.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{chapter.subtitle}</p>
      </header>

      <Markdown>{chapter.body}</Markdown>

      {chapter.videoIds.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Youtube className="size-5 text-red-600" />
            Video recomendado
          </h2>
          <div className="space-y-6">
            {chapter.videoIds.map((id) => (
              <YouTubeEmbed key={id} id={id} title={chapter.title} />
            ))}
          </div>
        </section>
      )}

      <ChapterFooter
        index={index}
        isComplete={complete}
        onComplete={() => markComplete(chapter.slug)}
      />
    </article>
  );
}
