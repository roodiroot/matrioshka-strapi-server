import Container from "../../general/Container";
import Title from "../../general/Title";
import Badge from "../../ui/Badge";
import { Card_1 } from "../../ui/Card";
import { Icons } from "../../ui/Icons";

const services = [
  {
    title: "Посадочные страницы",
    description:
      "Создаём лендинги для запуска продуктов, услуг и рекламных кампаний. Продумываем структуру, тексты и дизайн, чтобы раскрыть ваше предложение и привести посетителя к заявке.",
  },
  {
    title: "Корпоративные сайты",
    description:
      "Разрабатываем сайты, которые знакомят с компанией и укрепляют доверие к ней. Помогаем понятно рассказать об услугах, показать проекты и упростить связь с вашей командой.",
  },
  {
    title: "Интернет-магазины",
    description:
      "Создаём магазины с удобным каталогом и простым оформлением заказа. Подключаем оплату и доставку, чтобы вашим покупателям было легко найти, выбрать и заказать нужный товар.",
  },
  {
    title: "Веб-приложения",
    description:
      "Разрабатываем личные кабинеты, онлайн-сервисы и инструменты для бизнеса. Продумываем логику и интерфейс, чтобы автоматизировать рутинные задачи и сделать работу удобнее.",
  },
];

const Section1 = () => {
  return (
    <Container className="bg-[#90B730]">
      {/* Desktop background composition */}
      <div className="pointer-events-none absolute inset-0 z-0 block">
        <Icons.element_3 className="absolute top-97.5 left-25 sm:top-75  sm:left-[64%]" />
      </div>

      <div className="relative z-1 flex flex-col items-start gap-10 sm:gap-6 md:flex-row md:items-center">
        <div className="w-full sm:max-w-107.25">
          <Badge>что мы делаем?</Badge>
          <Title className="mt-8">Создаём сайты под конкретные задачи бизнеса</Title>
          <p className="tracking-tight text-2xl font-medium mt-6 text-balance">
            - от быстрого запуска продукта до сложных корпоративных и e-commerce решений.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {services.map((i) => (
            <Card_1
              title={i.title}
              description={i.description}
              className="max-w-90 sm:max-w-none"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section1;
