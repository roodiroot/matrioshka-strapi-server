import Button from "../../ui/Button";
import heroImage from "../../../assets/hero.png";
import mouseImage from "../../../assets/mouse.png";
import { Icons } from "../../ui/Icons";
import { useModal } from "../../../hooks/useModal";

const HeroBLock = () => {
  const { open } = useModal();
  return (
    <section className="border-b-[3px] border-shadow relative flex min-h-183.5 items-center overflow-hidden sm:min-h-0 sm:h-[calc(100svh-88px)] sm:max-h-192">
      {/* Desktop background composition */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
        <div className="absolute left-[38.6%] top-0 h-[84%] w-[61.4%] rounded-bl-[clamp(4rem,9vw,8rem)] bg-[#3D7010]" />
        <div className="absolute left-[55%] top-[12%] h-[48%] w-[29%] rounded-[clamp(2rem,4vw,4rem)] bg-[#90B730]" />
        <div className="absolute bottom-0 right-0 h-[34%] w-[19%] rounded-tl-[clamp(2rem,4vw,4rem)] bg-[#90B730]" />
      </div>

      {/* Mobile background composition */}
      <div className="pointer-events-none absolute inset-0 z-0 sm:hidden">
        <div className="absolute left-[78%] top-0 h-[53%] w-[68%] rounded-bl-[4rem] bg-[#3D7010]" />
        <div className="absolute left-0 top-[53%] h-[38%] w-full rounded-br-[4rem] bg-[#3D7010]" />
        <div className="absolute bottom-0 right-0 h-[20%] w-[58%]  rounded-tl-[3rem] bg-[#90B730]" />
      </div>

      <div className="pointer-events-none absolute left-[38.6%] top-0 z-1 hidden h-[84%] w-[61.4%] sm:block">
        <div className="absolute left-0 top-0 h-[32%] w-[32%] overflow-hidden rounded-br-[clamp(3rem,10vw,8rem)] bg-[#D6071B]">
          <Icons.element className="absolute bottom-[8%] left-1/2 h-auto w-[68%] -translate-x-1/2" />
        </div>
      </div>

      <div className="pointer-events-none absolute left-[78%] top-0 z-1 h-[clamp(5rem,16vw,6rem)] w-[clamp(6.5rem,20vw,7.5rem)] overflow-hidden rounded-br-[3rem] bg-[#D6071B] sm:hidden">
        <Icons.element className="absolute bottom-[8%] left-1/2 h-auto w-[68%] -translate-x-1/2" />
      </div>

      <Icons.element className="pointer-events-none absolute bottom-[2%] left-[-7%] z-1 w-[32%] -rotate-12 sm:hidden" />

      <div className="relative z-10 w-full max-w-7xl px-3.5 mx-auto py-14 flex flex-col sm:flex-row sm:items-center">
        <div className="relative w-full flex-1 lg:max-w-132 pb-4 sm:pb-0">
          <div className="relative lg:pt-10 ">
            <div className="relative z-10 space-y-6">
              <h1 className="uppercase font-extrabold tracking-tight-custom text-balance text-[clamp(3rem,12vw,4rem)] leading-[0.95] md:text-[80px] md:leading-20">
                Создаем сайты, которые работают
              </h1>
              <p className="text-2xl tracking-tight">
                Разрабатываем современные быстрые сайты для бизнеса и стартапов
              </p>
              <div className="flex gap-1.5 sm:gap-6 pt-4">
                <Button onClick={open}>Обсудить проект</Button>
                <Button variant="secondary">Смотреть проекты</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-9 sm:pt-0">
          <div className="relative w-full aspect-794/692">
            <img
              src={heroImage}
              alt="Hero illustration"
              width={823.11}
              height={733}
              className="absolute inset-0 h-full w-full sm:w-[90%] object-contain object-center animate-[float_4s_ease-in-out_infinite]"
              // className="animate-[float_4s_ease-in-out_infinite]"
            />
            <img
              src={mouseImage}
              alt="Hero illustration mouse"
              width={98}
              height={141}
              loading="lazy"
              className="absolute left-[82%] top-[78%] h-auto w-[12.5%] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBLock;
