interface YouTubeEmbedProps {
  id: string;
  title?: string;
}

/** Responsive, privacy-friendly YouTube embed. */
export function YouTubeEmbed({ id, title }: YouTubeEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border bg-black shadow-sm">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title ?? "Video de YouTube"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
