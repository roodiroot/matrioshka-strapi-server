import { ArrowUpRight } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { Card_4 } from "../components/ui/Card";
import { Icons } from "../components/ui/Icons";
import { useProjects } from "../hooks/useProjects";
import { useModal } from "../hooks/useModal";

export default function ProjectsPage() {
  const { open } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPage = Number(searchParams.get("page") ?? 1);
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const { data, isPending, isError, isFetching, refetch } = useProjects(page, 10);
  const projects = data?.data ?? [];
  const pagination = data?.meta.pagination;
  const strapiUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ?? "";

  function changePage(nextPage: number) {
    const params = new URLSearchParams(searchParams);
    if (nextPage === 1) params.delete("page");
    else params.set("page", String(nextPage));
    setSearchParams(params);
    document.getElementById("projects-list")?.scrollIntoView({ block: "start" });
  }

  return (
    <main>
      <title>Проекты — Матрёшка</title>
      <section className="relative overflow-hidden border-b-3 border-big-border bg-[#90B730]">
        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:py-16 lg:py-20">
          <nav aria-label="Хлебные крошки" className="mb-10 flex items-center gap-3 text-sm">
            <Link to="/" className="underline underline-offset-4 hover:no-underline">Главная</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Проекты</span>
          </nav>
          <div className="relative z-10 max-w-3xl">
            <Badge className="bg-background">Портфолио</Badge>
            <h1 className="mt-7 text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.95] font-extrabold uppercase tracking-tight-custom">Идеи, которые<br />стали сайтами.</h1>
            <p className="mt-7 max-w-xl text-xl tracking-tight sm:text-2xl">Разные задачи, свой характер у каждого проекта. Посмотрите, как мы соединяем дизайн и удобство для бизнеса.</p>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-0 hidden size-80 lg:block">
            <div className="absolute inset-0 rounded-tl-[120px] border-t-3 border-l-3 border-big-border bg-primary-button" />
            <Icons.element_4 className="absolute top-12 left-8 size-56 -rotate-12" />
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-list" className="border-b-3 border-big-border">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:py-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 id="projects-list" className="scroll-mt-28 text-3xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-4xl">Все проекты</h2>
            {pagination && <span aria-label={`Количество проектов: ${pagination.total}`} className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border-2 border-big-border bg-primary-button px-3 text-sm font-bold">{String(pagination.total).padStart(2, "0")}</span>}
          </div>
          {isPending && <p role="status" className="py-12">Загружаем проекты…</p>}
          {isError && <div role="alert" className="py-8">
            <p>Не удалось загрузить проекты.</p>
            <Button className="mt-4" disabled={isFetching} onClick={() => void refetch()}>Попробовать снова</Button>
          </div>}
          {!isPending && !isError && projects.length === 0 && (
            <div className="py-8">
              <p>{page > 1 ? "На этой странице проектов нет." : "Скоро здесь появятся наши проекты."}</p>
              {page > 1 && <Button className="mt-4" onClick={() => changePage(1)}>На первую страницу</Button>}
            </div>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const coverUrl = project.cover?.formats?.medium?.url ?? project.cover?.url;
              const image = coverUrl
                ? /^(https?:)?\/\//.test(coverUrl)
                  ? coverUrl
                  : `${strapiUrl}/${coverUrl.replace(/^\/+/, "")}`
                : undefined;
              return (
                <Link key={project.documentId} to={`/projects/${encodeURIComponent(project.slug)}`} className="block min-w-0 rounded-[26px] focus-visible:outline-2 focus-visible:outline-offset-4">
                  <Card_4
                    title={project.title}
                    description={project.description}
                    image={image}
                    imageAlt={project.cover?.alternativeText ?? project.title}
                    tags={[]}
                    className="h-full bg-[#F6ECDC]"
                  />
                </Link>
              );
            })}
          </div>
          {pagination && pagination.pageCount > 1 && page <= pagination.pageCount && (
            <nav aria-label="Страницы проектов" className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Button disabled={page <= 1} onClick={() => changePage(page - 1)}>Назад</Button>
              <p role="status" className="text-sm font-semibold tabular-nums">
                Страница {page} из {pagination.pageCount}
              </p>
              <Button disabled={page >= pagination.pageCount} onClick={() => changePage(page + 1)}>Далее</Button>
            </nav>
          )}
        </div>
      </section>

      <section aria-labelledby="projects-contact" className="border-b-3 border-big-border bg-primary-button">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge className="bg-background">Следующий проект — ваш?</Badge>
            <h2 id="projects-contact" className="mt-7 text-4xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-6xl">Дадим вашей<br />идее форму.</h2>
            <p className="mt-5 max-w-xl text-lg">Расскажите о задаче — обсудим, каким может быть ваш сайт и с чего начать.</p>
          </div>
          <Button variant="secondary" onClick={open} className="shrink-0" rightIcon={<ArrowUpRight aria-hidden="true" className="size-5" />}>Обсудить проект</Button>
        </div>
      </section>
    </main>
  );
}
