import { Icons } from "../../ui/Icons";
import PhoneForm from "../../general/forms/PhoneForm";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-b-[3px] border-black bg-[#3D7010]">
      <div className="relative mx-auto flex min-h-71 w-full max-w-7xl items-center overflow-hidden px-3.5 py-12 sm:px-10">
        <div className="relative z-10 max-w-132.5">
          <p className="text-2xl font-extrabold tracking-tight-custom uppercase">Матрёшка</p>
          <p className="mt-5 max-w-130 text-lg leading-[1.2] tracking-tight sm:text-xl">
            Создаем сайты, которые помогают бизнесу достигать поставленные задачи, и расти.
          </p>

          <PhoneForm />
        </div>

        <Icons.logo className="pointer-events-none absolute right-[8%] top-1/2 hidden w-35 -translate-y-1/2 sm:block" />
      </div>
      <div className="bg-background border-t-3 border-big-border px-5 py-5 text-center">
        <div className=" text-sm font-semibold uppercase tracking-tight-custom">
          Создаём сайты, которые работают
        </div>
        <div className="mt-4 text-gray-700 underline text-center text-xs flex gap-x-4 justify-center flex-wrap">
          <Link to="/docs/pd-consent">Политика конфиденциальности</Link>
          <Link to="/docs/privacy-policy">Согласие на обработку персональных данных</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
