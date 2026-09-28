import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectCover } from "../../types/project";
import ArticleImage from "./ArticleImage";

export default function ArticleSlider({ files }: { files: ProjectCover[] }) {
  const slideId = useId();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [height, setHeight] = useState<number>();
  const current = Math.max(0, Math.min(active, files.length - 1));

  useEffect(() => {
    const element = track.current;
    const slide = element?.children[current] as HTMLElement | undefined;
    if (!element || !slide) return;

    let width = element.clientWidth;
    const observer = new ResizeObserver(() => {
      setHeight(slide.offsetHeight);
      if (element.clientWidth !== width) {
        width = element.clientWidth;
        element.scrollTo({ left: current * width, behavior: "instant" });
      }
    });
    observer.observe(slide);
    observer.observe(element);
    return () => observer.disconnect();
  }, [current, files]);

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
    <section aria-label="Галерея проекта" aria-roledescription="карусель" className="min-w-0">
      <div
        ref={track}
        id={slideId}
        role="group"
        aria-label="Изображения. Используйте стрелки влево и вправо для переключения"
        tabIndex={files.length > 1 ? 0 : undefined}
        style={{ height }}
        className="flex w-full snap-x snap-mandatory items-start overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-3xl transition-[height] duration-300 ease-out motion-reduce:transition-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4"
        onScroll={(event) => {
          const element = event.currentTarget;
          if (element.clientWidth > 0) {
            setActive(Math.max(0, Math.min(files.length - 1, Math.round(element.scrollLeft / element.clientWidth))));
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            goTo(current + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
      >
        {files.map((file, index) => (
          <div
            key={`${file.id}-${index}`}
            role="group"
            aria-roledescription="слайд"
            aria-label={`${index + 1} из ${files.length}`}
            aria-hidden={index !== current}
            className="w-full min-w-0 shrink-0 snap-center snap-always p-2"
          >
            <ArticleImage file={file} slide />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 flex w-fit max-w-full items-center justify-between gap-6 rounded-2xl border-2 border-big-border bg-[#F6ECDC] px-4 py-3 shadow-big sm:gap-10 sm:px-5">
        <p aria-live="polite" aria-atomic="true" className="text-sm font-semibold tabular-nums">
          <span className="sr-only">Изображение </span>
          {String(current + 1).padStart(2, "0")} / {String(files.length).padStart(2, "0")}
        </p>
        {files.length > 1 && (
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Предыдущее изображение"
              aria-controls={slideId}
              disabled={current === 0}
              onClick={() => goTo(current - 1)}
              className={controlClass}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Следующее изображение"
              aria-controls={slideId}
              disabled={current === files.length - 1}
              onClick={() => goTo(current + 1)}
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
