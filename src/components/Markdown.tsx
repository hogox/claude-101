import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

interface MarkdownProps {
  children: string;
  className?: string;
}

/**
 * Renders the chapter markdown faithfully (tables, code blocks, callouts with
 * emoji), styled with the Tailwind typography plugin. External links open in a
 * new tab.
 */
export function Markdown({ children, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none dark:prose-invert",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold",
        "prose-a:font-medium prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:underline",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-pre:rounded-lg prose-pre:border prose-pre:bg-muted prose-pre:text-foreground",
        "prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:font-medium",
        "prose-table:overflow-hidden prose-th:bg-muted prose-td:align-top",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...props }) => {
            const external = href?.startsWith("http");
            return (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
