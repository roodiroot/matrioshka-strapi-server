import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import Button from "../components/ui/Button";
import { Icons } from "../components/ui/Icons";
import { useModal } from "../hooks/useModal";

export default function ContactsPage() {
  const { open } = useModal();

  return (
    <main className="border-b-3 border-big-border">
      <title>Контакты — Матрёшка</title>
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:py-16 lg:py-20">
        <nav aria-label="Хлебные крошки" className="mb-10 flex items-center gap-3 text-sm">
          <Link to="/" className="underline underline-offset-4 hover:no-underline">
            Главная
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Контакты</span>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-tight-long">
              Давайте знакомиться
            </p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] leading-none font-extrabold uppercase tracking-tight-custom">
              Есть идея?
              <br />
              Мы на связи.
            </h1>
            <p className="mt-6 max-w-lg text-xl tracking-tight sm:text-2xl">
              Расскажите о своём бизнесе и будущем сайте. Вместе разберёмся, с чего начать.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-big-border px-4 py-2 text-sm font-medium">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-[#3D7010]" />
              Работаем онлайн — где бы вы ни были
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-[3rem] border-3 border-big-border bg-[#90B730] shadow-big sm:min-h-80"
          >
            <div className="absolute -right-10 -top-10 size-44 rounded-full border-3 border-big-border bg-primary-button" />
            <div className="absolute -bottom-12 -left-12 size-48 rounded-full bg-[#3D7010]" />
            <Icons.element_4 className="relative size-48 -rotate-12 sm:size-60" />
          </div>
        </div>

        <section aria-label="Способы связи" className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
          <a
            href="mailto:hello@matryoshka-studio.ru"
            className="group flex flex-col rounded-3xl border-3 border-big-border bg-white p-6 shadow-big transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <Mail aria-hidden="true" className="size-8" />
              <ArrowUpRight
                aria-hidden="true"
                className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight-custom">
              Напишите нам
            </h2>
            <p className="mt-3 text-base break-all sm:text-xl">hello@matryoshka-studio.ru</p>
            <p className="mt-5 text-sm">Для вопросов, идей и предложений о сотрудничестве.</p>
          </a>

          <div className="flex flex-col items-start rounded-3xl border-3 border-big-border bg-primary-button p-6 shadow-big sm:p-8">
            <MessageCircle aria-hidden="true" className="mb-8 size-8" />
            <h2 className="text-2xl font-extrabold uppercase tracking-tight-custom">
              Обсудим ваш проект
            </h2>
            <p className="mt-3 mb-6">
              Оставьте контакты и пару слов о задаче — свяжемся с вами, чтобы обсудить детали.
            </p>
            <Button
              onClick={open}
              variant="secondary"
              className="mt-auto"
              rightIcon={<ArrowUpRight aria-hidden="true" className="size-5" />}
            >
              Оставить заявку
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
