import { Dialog, DialogTrigger } from "react-aria-components";
import MobilMenuButton from "./MobilMenuButton";
import { ArrowUpRight, Mail, Menu } from "lucide-react";
import { MobilMenuModal } from "../../ui/MobilMenuModal";
import { menu } from "../../../menu";
import { Link } from "react-router";

const MobilMenu = () => {
  return (
    <DialogTrigger>
      <MobilMenuButton className="sm:hidden" aria-label="Открыть меню">
        <Menu />
      </MobilMenuButton>

      <MobilMenuModal isDismissable>
        <Dialog
          aria-label="Мобильное меню"
          className="max-h-[calc(100dvh-7.25rem)] overflow-y-auto overscroll-contain p-4 text-left"
        >
          {({ close }) => (
            <div className="flex flex-col items-start">
              {menu.headerMenu.map((i) => (
                <Link
                  key={i.link}
                  onClick={close}
                  to={i.link}
                  className="uppercase font-bold tracking-tight-custom py-2 text-lg w-full"
                >
                  {i.name}
                </Link>
              ))}

              <section
                aria-label="Контактные данные"
                className="mt-5 w-full rounded-[20px] border-3 border-big-border bg-primary-button p-4"
              >
                <h2 className="text-xl font-extrabold uppercase tracking-tight-custom">
                  Мы на связи
                </h2>
                <a
                  href="mailto:hello@matryoshka-studio.ru"
                  onClick={close}
                  className="mt-3 flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 hover:underline underline-offset-4"
                >
                  <Mail aria-hidden="true" className="size-5 shrink-0" />
                  <span className="min-w-0 break-all">hello@matryoshka-studio.ru</span>
                  <ArrowUpRight aria-hidden="true" className="ml-auto size-5 shrink-0" />
                </a>
                <p className="mt-3 flex items-center gap-2 text-xs font-medium">
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#3D7010]" />
                  Работаем онлайн — где бы вы ни были
                </p>
              </section>
            </div>
          )}
        </Dialog>
      </MobilMenuModal>
    </DialogTrigger>
  );
};

export default MobilMenu;
