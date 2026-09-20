import portfolioImg from "../assets/portfolio/image.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  backgroundColor: string;
  client?: string;
  year?: string;
  websiteUrl?: string;
  task?: string;
  solution?: string;
  result?: string;
  gallery?: { image: string; imageAlt: string }[];
}

// Локальные данные для вёрстки. Позже можно заменить ответом API.
export const portfolioItems: Project[] = [
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
