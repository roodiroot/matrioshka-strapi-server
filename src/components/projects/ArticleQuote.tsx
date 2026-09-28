import { Quote } from "lucide-react";

export function ArticleQuote({ body, title }: { body: string; title?: string | null }) {
  return (
    <figure className="mx-auto max-w-4xl rounded-3xl border-3 border-big-border bg-primary-button p-6 shadow-big sm:p-10">
      <Quote aria-hidden="true" className="mb-5 size-10" />
      <blockquote className="text-xl leading-relaxed font-semibold tracking-tight sm:text-3xl">
        {body}
      </blockquote>
      {title && <figcaption className="mt-6 text-sm font-medium">— {title}</figcaption>}
    </figure>
  );
}
