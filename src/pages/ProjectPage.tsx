import ProjectArticle from "../components/projects/ProjectArticle";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { useProject } from "../hooks/useProjects";
import Button from "../components/ui/Button";
import { useModal } from "../hooks/useModal";
import NotFoundPage from "./NotFoundPage";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { open } = useModal();
  const { data: project, isPending, isError, refetch, isFetching } = useProject(slug);

  if (!slug) return <NotFoundPage />;

  if (isPending) {
    return (
      <main className="mx-auto w-full max-w-7xl px-5 py-16">
        <p role="status">Загружаем проект…</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto w-full max-w-7xl px-5 py-16">
        <div role="alert">
          <p>Не удалось загрузить проект.</p>
          <Button onClick={() => void refetch()} disabled={isFetching} className="mt-4">
            Попробовать снова
          </Button>
        </div>
        <Link to="/projects" className="mt-6 inline-block underline underline-offset-4">
          Все проекты
        </Link>
      </main>
    );
  }

  if (!project) return <NotFoundPage />;

  const coverUrl = project.cover?.url;
  const strapiUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ?? "";
  const image = coverUrl
    ? /^(https?:)?\/\//.test(coverUrl)
      ? coverUrl
      : `${strapiUrl}/${coverUrl.replace(/^\/+/, "")}`
    : undefined;


  return (
    <main className="border-b-3 border-big-border">
      <title>{`${project.title} — Матрёшка`}</title>
      <article className="mx-auto w-full max-w-7xl px-5 py-10 sm:py-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Все проекты
        </Link>
        <header className="my-10 sm:my-14">
          <h1 className="wrap-break-word text-[clamp(3rem,9vw,7rem)] leading-none font-extrabold uppercase tracking-tight-custom">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line text-xl tracking-tight sm:text-2xl">
            {project.description}
          </p>
        </header>
        {image && (
          <img
            src={image}
            alt={project.cover?.alternativeText || project.title}
            width={project.cover?.width}
            height={project.cover?.height}
            className="max-h-[85svh] w-full rounded-3xl border-3 border-big-border bg-white object-contain shadow-big"
          />
        )}
        <ProjectArticle key={project.documentId} blocks={project.blocks ?? []} />
        <section className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border-3 border-big-border bg-primary-button p-6 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight-custom">
              Создадим ваш следующий проект?
            </h2>
            <p className="mt-3 text-lg">Расскажите о задаче — обсудим, как воплотить её в жизнь.</p>
          </div>
          <Button onClick={open} variant="secondary" className="shrink-0">
            Обсудить проект
          </Button>
        </section>
      </article>
    </main>
  );
}
