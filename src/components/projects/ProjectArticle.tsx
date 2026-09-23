import { useRef, useState } from "react";
import Markdown from "react-markdown";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { ProjectBlock, ProjectCover } from "../../types/project";

function mediaUrl(url: string) {
  if (/^(https?:)?\/\//.test(url)) return url;
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ?? "";
  return `${base}/${url.replace(/^\/+/, "")}`;
}

function ArticleImage({ file, slide = false }: { file: ProjectCover; slide?: boolean }) {
  const sources = [...Object.values(file.formats ?? {}), file]
    .filter((format) => format?.url && format.width)
    .map((format) => `${mediaUrl(format.url)} ${format.width}w`)
    .join(", ");

  return (
    <figure className="min-w-0">
      <img
        src={mediaUrl(file.url)}
        srcSet={sources || undefined}
        sizes="(max-width: 1280px) calc(100vw - 40px), 1200px"
        alt={file.alternativeText ?? file.caption ?? "Изображение проекта"}
        width={file.width}
        height={file.height}
        loading="lazy"
        decoding="async"
        className={
          slide
            ? "h-[clamp(260px,60vw,640px)] w-full bg-white object-contain"
            : "mx-auto max-h-[85svh] w-full rounded-3xl border-3 border-big-border bg-white object-contain shadow-big"
        }
      />
      {file.caption && (
        <figcaption className="px-4 pt-4 text-center text-sm opacity-70">{file.caption}</figcaption>
      )}
    </figure>
  );
}

function ArticleSlider({ files }: { files: ProjectCover[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  if (!files.length) return null;

  function goTo(index: number) {
    const element = track.current;
    if (!element) return;
    const next = Math.max(0, Math.min(files.length - 1, index));
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  const controlClass =
    "flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-big-border bg-primary-button transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-default disabled:opacity-30";

  return (
    <section
      aria-label="Галерея проекта"
      aria-roledescription="карусель"
      className="min-w-0 rounded-3xl border-3 border-big-border bg-[#F6ECDC] shadow-big overflow-hidden"
    >
      <div
        ref={track}
        tabIndex={0}
        aria-label="Изображения. Используйте стрелки влево и вправо для переключения"
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scrollbar-none [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:-outline-offset-4"
        onScroll={(event) => {
          const element = event.currentTarget;
          setActive(Math.round(element.scrollLeft / element.clientWidth));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            goTo(active + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
      >
        {files.map((file, index) => (
          <div
            key={`${file.id}-${index}`}
            role="group"
            aria-roledescription="слайд"
            aria-label={`${index + 1} из ${files.length}`}
            className="w-full shrink-0 snap-center snap-always"
          >
            <ArticleImage file={file} slide />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 p-4 sm:p-6">
        <p aria-live="polite" aria-atomic="true" className="font-semibold tabular-nums">
          {String(active + 1).padStart(2, "0")} / {String(files.length).padStart(2, "0")}
        </p>
        {files.length > 1 && (
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Предыдущее изображение"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
              className={controlClass}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Следующее изображение"
              disabled={active >= files.length - 1}
              onClick={() => goTo(active + 1)}
              className={controlClass}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProjectArticle({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <div className="my-12 space-y-12 sm:my-20 sm:space-y-20">
      {blocks.map((block) => {
        const key = `${block.__component}-${block.id}`;
        switch (block.__component) {
          case "shared.rich-text":
            return (
              <div key={key} className="project-prose mx-auto max-w-3xl">
                <Markdown
                  components={{
                    h1: ({ children }) => <h2>{children}</h2>,
                    img: ({ src, alt }) => (
                      <img src={src ? mediaUrl(src) : undefined} alt={alt ?? ""} loading="lazy" />
                    ),
                  }}
                >
                  {block.body}
                </Markdown>
              </div>
            );
          case "shared.media":
            return block.file ? <ArticleImage key={key} file={block.file} /> : null;
          case "shared.slider":
            return <ArticleSlider key={key} files={block.files ?? []} />;
          case "shared.quote":
            return (
              <figure
                key={key}
                className="mx-auto max-w-4xl rounded-3xl border-3 border-big-border bg-primary-button p-6 shadow-big sm:p-10"
              >
                <Quote aria-hidden="true" className="mb-5 size-10" />
                <blockquote className="text-xl leading-relaxed font-semibold tracking-tight sm:text-3xl">
                  {block.body}
                </blockquote>
                {block.title && (
                  <figcaption className="mt-6 text-sm font-medium">— {block.title}</figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
