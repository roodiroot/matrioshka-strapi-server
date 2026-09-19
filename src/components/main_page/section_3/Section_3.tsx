import Container from "../../general/Container";
import Title from "../../general/Title";
import Badge from "../../ui/Badge";
import portfolioImg from "../../../assets/portfolio/image.png";
import Button from "../../ui/Button";

import { Card_4 } from "../../ui/Card";
import { Icons } from "../../ui/Icons";

import nevalashkaImage from "../../../assets/nevalashka.png";

export const portfolioItems = [
  {
    id: "astraway",
    title: "ASTRAWAY",
    description:
      "Дизайн лендинга для бренда бытовой химии с акцентом на чистоту, экологичность и экономичность. Лёгкая визуальная стилистика, тематические иллюстрации и понятная структура.",
    image: portfolioImg,
    imageAlt: "Лендинг бренда бытовой химии Astraway",
    tags: ["Web Design", "Landing Page", "UI/UX"],
    backgroundColor: "#A7CB63",
  },
  {
    id: "forma",
    title: "FORMA",
    description:
      "Сайт студии интерьерного дизайна с акцентом на проекты и детали. Крупные фотографии, сдержанная типографика и удобная навигация помогают познакомиться с подходом команды.",
    image: portfolioImg,
    imageAlt: "Сайт студии интерьерного дизайна Forma",
    tags: ["Web Design", "Corporate Website", "UI/UX"],
    backgroundColor: "#FFFFFF",
  },
  {
    id: "bloom",
    title: "BLOOM",
    description:
      "Интернет-магазин цветочной мастерской с удобным выбором букетов и оформлением доставки. Нежная палитра, выразительные фотографии и продуманный каталог создают настроение.",
    image: portfolioImg,
    imageAlt: "Интернет-магазин цветочной мастерской Bloom",
    tags: ["Web Design", "E-commerce", "UI/UX"],
    backgroundColor: "#FFFFFF",
  },
];

const Section_3 = () => {
  return (
    <Container className="overflow-hidden relative">
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
          {portfolioItems.map((i) => (
            <Card_4
              key={i.id}
              title={i.title}
              description={i.description}
              image={i.image}
              tags={i.tags}
              imageAlt={i.imageAlt}
              className="max-w-100 bg-[#F6ECDC] last:bg-[#A7CB62]"
            />
          ))}
        </div>
        <div>
          <Button className="mx-auto">Смотреть все проекты</Button>
        </div>
      </div>
    </Container>
  );
};

export default Section_3;
