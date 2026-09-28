import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import ProjectMatryoshka from "./ProjectMatryoshka";

export default function ArticleForm({ open }: { open: () => void }) {
  return (
    <section className="relative mt-14 overflow-hidden rounded-[2rem] border-3 border-big-border bg-[#E5DCEF] p-6 shadow-big sm:mt-20 sm:p-10 lg:p-12">
      <div className="relative z-10 max-w-2xl lg:pr-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]">Теперь ваша история</p>
        <h2 className="text-3xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-5xl">
          Большие идеи.<br />Начнём с разговора.
        </h2>
        <p className="mt-5 max-w-lg text-lg">Расскажите о задаче — обсудим, как воплотить её в жизнь.</p>
        <Button onClick={open} className="mt-8" rightIcon={<ArrowUpRight aria-hidden="true" className="size-5" />}>
          Обсудить проект
        </Button>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-8 -bottom-8 hidden h-72 w-56 select-none lg:block">
        <div className="absolute -right-12 bottom-0 size-64 rounded-full bg-[#C6B2E0]" />
        <ProjectMatryoshka color="#FACD22" className="relative h-full w-full rotate-12" />
      </div>
    </section>
  );
}
