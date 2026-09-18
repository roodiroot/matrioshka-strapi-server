import Container from "../../general/Container";
import Title from "../../general/Title";
import Badge from "../../ui/Badge";
import { Card_2, Card_3 } from "../../ui/Card";
import { Icons } from "../../ui/Icons";

const workStages = [
  {
    number: "01",
    title: "Знакомство с проектом",
    description: "Обсуждаем ваш бизнес, цели и пожелания. Определяем задачи сайта, бюджет и сроки.",
  },
  {
    number: "02",
    title: "Структура и прототип",
    description:
      "Продумываем разделы сайта и путь пользователя. Создаём прототип и согласовываем его с вами.",
  },
  {
    number: "03",
    title: "Дизайн сайта",
    description:
      "Разрабатываем дизайн, который отражает характер вашего бренда. Адаптируем макеты под разные экраны.",
  },
  {
    number: "04",
    title: "Разработка и тесты",
    description:
      "Превращаем макеты в работающий сайт. Подключаем нужные сервисы и проверяем всё на разных устройствах.",
  },
  {
    number: "05",
    title: "Запуск проекта",
    description:
      "Публикуем сайт на вашем домене. Передаём доступы и объясняем, как управлять контентом.",
  },
];

const Section_2 = () => {
  return (
    <Container className="overflow-hidden">
      {/* Desktop background composition */}
      <div className="pointer-events-none absolute inset-0 z-0 block">
        <Icons.element_4 className="absolute top-20 -right-15 sm:top-30  sm:left-[64%]" />
      </div>
      <div className="relative z-1 flex flex-col items-start gap-10">
        <div className="w-full sm:max-w-181">
          <Badge>О процессе</Badge>
          <Title className="mt-8">Как мы работаем</Title>
          <p className="tracking-tight text-2xl font-medium mt-6 text-balance">
            Выстраиваем работу поэтапно: от первой встречи до запуска готового сайта. <br />
            <br />
            На каждом этапе согласовываем результат с вами, что бы двигаться в одном направлении.
          </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
          {workStages.map((i) => (
            <Card_2 title={i.title} description={i.description} number={i.number} />
          ))}
        </div>
        <Card_3
          title="Вы учавствуете в процессе на каждом этапе работы"
          description="Пространство, где собраны лучшие проекты от локальных обжарщиков кофе, производителей чая, шоколада, десертов и выпечки, ингредиентов и напитков, аксессуаров и посуды для дома и бизнеса."
        />
      </div>
    </Container>
  );
};

export default Section_2;
