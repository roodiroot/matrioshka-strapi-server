import { mediaUrl } from "../../lib/utils";
import type { ProjectCover } from "../../types/project";

export default function ArticleImage({
  file,
  slide = false,
}: {
  file: ProjectCover;
  slide?: boolean;
}) {
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
        loading={slide ? "eager" : "lazy"}
        decoding="async"
        className={
          slide
            ? "mx-auto block h-auto w-auto max-h-[85svh] max-w-full rounded-3xl border-3 border-big-border bg-white shadow-big"
            : "mx-auto block h-auto w-auto max-w-250 rounded-3xl border-3 border-big-border bg-white shadow-big"
        }
      />
      {file.caption && (
        <figcaption className="px-4 pt-4 text-center text-sm opacity-70">{file.caption}</figcaption>
      )}
    </figure>
  );
}
