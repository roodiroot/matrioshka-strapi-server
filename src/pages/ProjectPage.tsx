import { ArrowLeft } from "lucide-react";
import { Icons } from "../components/ui/Icons";
import Seo from "../components/general/Seo";
import ProjectArticle from "../components/projects/ProjectArticle";
import { Link, useParams } from "react-router";
import { useProject } from "../hooks/useProjects";
import Button from "../components/ui/Button";
import { useModal } from "../hooks/useModal";
import NotFoundPage from "./NotFoundPage";
import { mediaUrl } from "../lib/utils";
import ArticleForm from "../components/projects/ArticleForm";
import ArticleHeader from "../components/projects/ArticleHeader";
import Breadcrumbs from "../components/general/Breadcrumbs";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { open } = useModal();
  const { data: project, isPending, isError, refetch, isFetching } = useProject(slug);

  if (!slug) return <NotFoundPage />;

  if (isPending) {
    return (
      <main className="mx-auto w-full max-w-7xl px-5 py-16">
        <Seo title="Загрузка проекта" description="Проект веб-студии «Матрёшка»." />
        <p role="status">Загружаем проект…</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto w-full max-w-7xl px-5 py-16">
        <Seo
          title="Не удалось загрузить проект"
          description="Попробуйте загрузить проект веб-студии «Матрёшка» снова."
        />
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

  return (
    <main className="border-b-3 border-big-border">
      <Seo
        title={project.title}
        description={project.description}
        image={coverUrl ? mediaUrl(coverUrl) : undefined}
      />
      <article className="mx-auto w-full max-w-7xl px-5 py-10 sm:py-16">
        <Breadcrumbs items={[{ label: "Проекты", to: "/projects" }, { label: project.slug }]} />
        <ArticleHeader title={project.title} description={project.description} />
        {coverUrl && (
          <img
            src={mediaUrl(coverUrl)}
            alt={project.cover?.alternativeText || project.title}
            width={project.cover?.width}
            height={project.cover?.height}
            className="max-h-[85svh] w-full rounded-3xl border-3 border-big-border bg-white object-cover shadow-big"
          />
        )}
        {(project.blocks?.length ?? 0) > 0 && (
          <div aria-hidden="true" className="mt-12 flex items-center gap-5 sm:mt-20">
            <span className="h-px flex-1 bg-big-border/20" />
            <Icons.element_4 className="size-10 -rotate-12 sm:size-14" />
            <span className="h-px flex-1 bg-big-border/20" />
          </div>
        )}
        <ProjectArticle key={project.documentId} blocks={project.blocks ?? []} />
        <div className="mt-12 border-t border-big-border/20 pt-6">
          <Link to="/projects" className="inline-flex items-center gap-3 rounded-sm text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Все проекты
          </Link>
        </div>
        <ArticleForm open={open} />
      </article>
    </main>
  );
}
