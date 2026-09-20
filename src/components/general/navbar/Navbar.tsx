import Button from "../../ui/Button";
import { Icons } from "../../ui/Icons";
import { useModal } from "../../../hooks/useModal";
import { Link } from "react-router";
import { menu } from "../../../menu";
import MobilMenu from "./MobilMenu";

const Navbar = () => {
  const { open } = useModal();
  return (
    <div className="fixed top-0 z-20 w-full h-22 bg-red-background border-b-[3px] border-shadow">
      <nav className="w-full max-w-7xl mx-auto px-3.5">
        <div className="w-full flex items-center justify-between py-4">
          <Link to="/" aria-label="Матрёшка — на главную" className="md:w-45.75">
            <Icons.element_4 className="size-14" />
          </Link>

          <div className="flex-1 gap-4 items-center justify-center hidden sm:flex">
            {menu.headerMenu.map((i) => (
              <Link
                key={i.name}
                to={i.link}
                className="text-sm p-2.5 tracking-tight-custom uppercase font-semibold"
              >
                {i.name}
              </Link>
            ))}
          </div>

          <Button onClick={open} className="hidden sm:inline-flex">
            Обсудить проект
          </Button>

          <MobilMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
