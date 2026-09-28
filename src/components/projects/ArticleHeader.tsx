import { Icons } from "../ui/Icons";
import ProjectMatryoshka from "./ProjectMatryoshka";

export default function ArticleHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="my-10 grid items-center gap-8 sm:my-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
      <div className="min-w-0">
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-[#6B843D]" />
          Проект в деталях
        </p>
      <h1 className="wrap-anywhere text-[clamp(2.5rem,7vw,6rem)] leading-none font-extrabold uppercase tracking-tight-custom">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl whitespace-pre-line text-xl tracking-tight sm:text-2xl">
        {description}
      </p>
      </div>
      <div aria-hidden="true" className="pointer-events-none relative mx-auto h-40 w-60 select-none sm:h-48 sm:w-72 lg:h-72 lg:w-full">
        <div className="absolute inset-x-3 bottom-0 h-4/5 rounded-t-full rounded-b-3xl bg-[#E8EBCF]" />
        <ProjectMatryoshka className="absolute bottom-0 left-6 h-[95%] w-auto -rotate-12" />
        <ProjectMatryoshka color="#90B730" className="absolute right-4 bottom-0 h-[72%] w-auto rotate-12" />
        <Icons.element_4 className="absolute top-0 right-0 size-14 rotate-12 lg:size-20" />
      </div>
    </header>
  );
}
