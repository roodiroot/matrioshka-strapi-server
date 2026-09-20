import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router";
import { portfolioItems } from "../data/projects";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";
import { useModal } from "../hooks/useModal";
import NotFoundPage from "./NotFoundPage";

export default function ProjectPage() {
  const { id } = useParams();
  const { open } = useModal();
  const project = portfolioItems.find((item) => item.id === id);

  if (!project) return <NotFoundPage />;

  const sections = [
    { title: "Задача", text: project.task },
    { title: "Решение", text: project.solution },
    { title: "Результат", text: project.result },
  ].filter((section) => section.text);

  return (
    <main className="border-b-3 border-big-border">
      <title>{`${project.title} — Матрёшка`}</title>
      <article className="mx-auto w-full max-w-7xl px-5 py-10 sm:py-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Все проекты
        </Link>
        <header className="my-10 sm:my-14">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} text={tag} />
            ))}
          </div>
          <h1 className="break-words text-[clamp(3rem,9vw,7rem)] leading-none font-extrabold uppercase tracking-tight-custom">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl whitespace-pre-line text-xl tracking-tight sm:text-2xl">
            {project.description}
          </p>
          {(project.client || project.year || project.websiteUrl) && (
            <div className="mt-8 flex flex-wrap items-end gap-x-12 gap-y-6">
              <dl className="flex flex-wrap gap-x-12 gap-y-6">
                {project.client && (
                  <div>
                    <dt className="text-sm">Клиент</dt>
                    <dd className="mt-1 font-semibold">{project.client}</dd>
                  </div>
                )}
                {project.year && (
                  <div>
                    <dt className="text-sm">Год</dt>
                    <dd className="mt-1 font-semibold">{project.year}</dd>
                  </div>
                )}
              </dl>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-3 border-big-border bg-primary-button px-5 py-3 font-semibold shadow-big"
                >
                  Открыть сайт
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </a>
              )}
            </div>
          )}
        </header>
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="max-h-[85svh] w-full rounded-3xl border-3 border-big-border bg-white object-contain shadow-big"
        />
        {sections.length > 0 && (
          <div className="my-12 grid gap-6 lg:grid-cols-3">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="rounded-3xl border-3 border-big-border bg-white p-6 shadow-big sm:p-8"
              >
                <p aria-hidden="true" className="mb-6 text-4xl font-extrabold text-red-background">
                  0{index + 1}
                </p>
                <h2 className="text-2xl font-extrabold uppercase tracking-tight-custom">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line">{section.text}</p>
              </section>
            ))}
          </div>
        )}
        {!!project.gallery?.length && (
          <section aria-label="Изображения проекта" className="my-12 space-y-6">
            {project.gallery.map((item, index) => (
              <img
                key={`${item.image}-${index}`}
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="h-auto w-full rounded-3xl border-3 border-big-border bg-white"
              />
            ))}
          </section>
        )}
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
