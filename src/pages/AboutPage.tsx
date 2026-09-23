import { ArrowUpRight, Code2, MessagesSquare, Shapes } from "lucide-react";
import { Link } from "react-router";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { Icons } from "../components/ui/Icons";
import { useModal } from "../hooks/useModal";
import matryoshka from "../assets/minimatryoshka.png";

const principles = [
  { icon: MessagesSquare, title: "Сначала — задача", text: "Разбираемся, кому нужен ваш сайт и что он должен делать. На этой основе строим структуру и выбираем решения." },
  { icon: Shapes, title: "Дизайн со смыслом", text: "Помогаем бренду звучать по-своему. Соединяем выразительный визуальный язык с понятной навигацией." },
  { icon: Code2, title: "Внимание к деталям", text: "Адаптируем страницы под разные экраны, проверяем формы и переходы. За красивой картинкой должен стоять работающий сайт." },
];

export default function AboutPage() {
  const { open } = useModal();
  return (
    <main>
      <title>О нас — Матрёшка</title>
      <section className="overflow-hidden border-b-3 border-big-border">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-16 lg:py-20">
          <nav aria-label="Хлебные крошки" className="mb-10 flex items-center gap-3 text-sm">
            <Link to="/" className="underline underline-offset-4 hover:no-underline">Главная</Link>
            <span aria-hidden="true">/</span><span aria-current="page">О нас</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <Badge>Давайте знакомиться</Badge>
              <h1 className="mt-7 text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.95] font-extrabold uppercase tracking-tight-custom">Снаружи —<br />характер.<br />Внутри —<br /><span className="text-red-background">смысл.</span></h1>
              <p className="mt-7 max-w-xl text-xl tracking-tight sm:text-2xl">Мы — «Матрёшка». Создаём сайты, в которых идея, дизайн и разработка работают вместе на задачи бизнеса.</p>
              <Button onClick={open} className="mt-8" rightIcon={<ArrowUpRight aria-hidden="true" className="size-5" />}>Обсудить проект</Button>
            </div>
            <div aria-hidden="true" className="relative isolate flex aspect-square items-center justify-center overflow-hidden rounded-[40px] border-3 border-big-border bg-[#90B730] shadow-big">
              <div className="absolute -right-12 -top-12 size-[65%] rounded-full border-3 border-big-border bg-primary-button" />
              <div className="absolute bottom-0 left-0 h-[48%] w-[60%] rounded-tr-[100px] bg-[#3D7010]" />
              <Icons.element_4 className="absolute right-4 bottom-5 size-[28%] rotate-12" />
              <img src={matryoshka} alt="" width={310} height={346} className="relative w-[65%] -rotate-6 object-contain" />
              <span className="absolute top-5 left-4 -rotate-6 rounded-full border-3 border-big-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-tight-long sm:text-sm">Всё складывается</span>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="about-approach" className="border-b-3 border-big-border bg-primary-button">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div><Badge>Наш подход</Badge><h2 id="about-approach" className="mt-7 text-4xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-6xl">Один проект.<br />Всё связано.</h2></div>
          <div className="space-y-5 text-lg tracking-tight sm:text-xl">
            <p>В матрёшке каждая часть на своём месте. Так и в сайте: структура помогает найти нужное, дизайн раскрывает характер бренда, а разработка превращает идею в удобный инструмент.</p>
            <p>Мы смотрим на проект целиком — от первого знакомства с бизнесом до публикации. Создаём лендинги, корпоративные сайты, интернет-магазины и веб-приложения.</p>
            <Link to="/#projects" className="inline-flex min-h-12 items-center gap-2 font-bold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Смотреть наши проекты <ArrowUpRight aria-hidden="true" className="size-5" /></Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="about-principles" className="border-b-3 border-big-border">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
          <Badge>Что для нас важно</Badge>
          <h2 id="about-principles" className="mt-7 text-4xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-6xl">Красиво. Понятно.<br />По делу.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-[28px] border-3 border-big-border bg-white p-6 shadow-big">
                <div className="mb-9 flex items-center justify-between"><Icon aria-hidden="true" className="size-8" strokeWidth={1.75} /><span aria-hidden="true" className="text-sm font-bold">0{index + 1}</span></div>
                <h3 className="text-2xl leading-tight font-extrabold uppercase tracking-tight-custom">{title}</h3>
                <p className="mt-4 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="about-together" className="border-b-3 border-big-border bg-[#90B730]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div><Badge>На одной стороне</Badge><h2 id="about-together" className="mt-7 text-4xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-6xl">Делаем вместе<br />с вами.</h2><p className="mt-6 max-w-xl text-xl tracking-tight">Вы знаете свой бизнес. Мы помогаем рассказать о нём в интернете. В основе работы — диалог и понятные решения.</p></div>
          <ol className="space-y-6 rounded-[28px] border-3 border-big-border bg-background p-6 shadow-big sm:p-8">
            {[
              ["Договариваемся на старте", "Обсуждаем задачи, объём работ, бюджет и сроки."],
              ["Показываем результат поэтапно", "Согласовываем структуру и дизайн, обсуждаем обратную связь."],
              ["Передаём готовый сайт", "После запуска передаём доступы и объясняем, как управлять контентом."],
            ].map(([title, text], index) => <li key={title} className="flex items-start gap-4"><span aria-hidden="true" className="text-2xl font-extrabold text-red-background">0{index + 1}</span><div><h3 className="text-lg font-bold tracking-tight">{title}</h3><p className="mt-1 text-sm leading-relaxed">{text}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section aria-labelledby="about-contact" className="border-b-3 border-big-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div><h2 id="about-contact" className="text-4xl leading-none font-extrabold uppercase tracking-tight-custom sm:text-6xl">Начнём с идеи?</h2><p className="mt-5 max-w-xl text-lg">Расскажите, что хотите создать. Вместе разберёмся, каким должен быть ваш сайт.</p></div>
          <Button onClick={open} className="shrink-0" rightIcon={<ArrowUpRight aria-hidden="true" className="size-5" />}>Давайте обсудим</Button>
        </div>
      </section>
    </main>
  );
}
