import { Menu } from "lucide-react";
import Button from "../../ui/Button";
import { Icons } from "../../ui/Icons";
import { useModal } from "../../../hooks/useModal";

const Navbar = () => {
  const { open } = useModal();
  return (
    <div className="sticky top-0 z-20 w-full bg-red-background border-b-[3px] border-shadow">
      <nav className="w-full max-w-7xl mx-auto px-3.5">
        <div className="w-full flex items-center justify-between py-4">
          <div>
            <Icons.element_4 className="size-14" />
          </div>
          <div className="flex-1 gap-4 items-center justify-center hidden sm:flex">
            <div className="p-2.5 tracking-tight-custom uppercase font-semibold">Услуги</div>
            <div className="p-2.5  tracking-tight-custom uppercase font-semibold">Проекты</div>
            <div className="p-2.5 tracking-tight-custom uppercase font-semibold">О компании</div>
          </div>
          <Button onClick={open} className="hidden sm:inline-flex">
            Обсудить проект
          </Button>
          <Button className="sm:hidden" size="icon">
            <Menu />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
