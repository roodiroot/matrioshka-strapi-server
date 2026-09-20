import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Icons } from "../components/ui/Icons";

export default function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-tight-long">Кажется, мы заблудились</p>
      <div
        aria-hidden="true"
        className="my-6 flex items-center justify-center gap-2 text-[clamp(7rem,24vw,18rem)] leading-none font-extrabold tracking-tight-custom sm:gap-5"
      >
        <span>4</span>
        <span className="flex size-[clamp(5.5rem,19vw,14rem)] items-center justify-center rounded-full border-3 border-big-border bg-primary-button shadow-big">
          <Icons.element_4 className="h-3/4 w-3/4 -rotate-12" />
        </span>
        <span>4</span>
      </div>
      <h1 className="text-3xl font-extrabold uppercase tracking-tight-custom sm:text-5xl">
        404 — страница не найдена
      </h1>
      <p className="mt-5 max-w-md text-base sm:text-lg">
        Возможно, она переехала или в адресе опечатка. Вернёмся на главную — там всё на месте.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center gap-3 rounded-full border-3 border-big-border bg-primary-button px-7 py-4 text-sm font-semibold uppercase tracking-tight-custom shadow-big transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-0.5 active:shadow-none"
      >
        На главную
        <ArrowUpRight aria-hidden="true" className="size-5" />
      </Link>
    </main>
  );
}
