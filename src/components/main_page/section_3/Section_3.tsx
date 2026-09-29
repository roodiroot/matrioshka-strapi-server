import Container from "../../general/Container";
import Title from "../../general/Title";
import Badge from "../../ui/Badge";
import { useProjects } from "../../../hooks/useProjects";
import { Link, useNavigate } from "react-router";
import Button from "../../ui/Button";

import { Card_4 } from "../../ui/Card";
import { Icons } from "../../ui/Icons";

import nevalashkaImage from "../../../assets/nevalashka.png";

const Section_3 = () => {
  const navigate = useNavigate();
  const { data, isPending, isError, refetch, isFetching } = useProjects(1, 3, {
    sort: "updatedAt:desc",
  });
  const projects = data?.data ?? [];
  const strapiUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ?? "";
  return (
    <Container id="projects" className="overflow-hidden relative scroll-mt-24">
      {/* Desktop background composition */}
      <div className="pointer-events-none absolute inset-0 z-0 block">
        <Icons.element_5 className="absolute -bottom-5 left-[10%] sm:bottom-5  sm:left-[20%]" />
        <div className="bg-[#467315] border-x-3 border-big-border w-[20%] h-full absolute top-0 left-0 sm:w-[40%] sm:left-auto sm:right-0 overflow-hidden">
          <img
            src={nevalashkaImage}
            alt="Неваляшка"
            width={405}
            height={750}
            className="hidden sm:block sm:absolute sm:top-10 sm:-left-40 sm:min-w-100 max-w-120 sm:animate-[float_4s_ease-in-out_infinite]"
          />
        </div>
      </div>

      <div className="relative z-1 flex flex-col items-start gap-10">
        <div className="w-full sm:max-w-160">
          <Badge>Портфолио</Badge>
          <Title className="mt-8 text-balance">Проекты которыми мы гордимся</Title>
          <p className="tracking-tight text-2xl font-medium mt-6 text-balance">
            Создаем сайты, которые помогают бизнесу достигать поставленные задачи, и расти.{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {isPending && <p role="status">Загружаем проекты…</p>}
          {isError && (
            <div role="alert">
              <p>Не удалось загрузить проекты.</p>
              <Button onClick={() => void refetch()} disabled={isFetching} className="mt-4">
                Попробовать снова
              </Button>
            </div>
          )}
          {!isPending && !isError && projects.length === 0 && (
            <p>Скоро здесь появятся наши проекты.</p>
          )}
          {projects.map((i) => {
            const coverUrl = i.cover?.formats.medium?.url ?? i.cover?.url;
            const image = coverUrl
              ? /^(https?:)?\/\//.test(coverUrl)
                ? coverUrl
                : `${strapiUrl}/${coverUrl.replace(/^\/+/, "")}`
              : undefined;

            return (
              <Link
                key={i.documentId}
                to={`/projects/${encodeURIComponent(i.slug)}`}
                className="block max-w-100 rounded-[26px] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <Card_4
                  title={i.title}
                  description={i.description}
                  image={image}
                  tags={[]}
                  imageAlt={i.cover?.alternativeText ?? i.title}
                  className="h-full bg-[#F6ECDC]"
                />
              </Link>
            );
          })}
        </div>
        <div>
          <Button className="mx-auto" onClick={() => navigate("/projects")}>
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Section_3;
