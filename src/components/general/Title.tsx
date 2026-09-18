import { cn } from "../../lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {}
const Title: React.FC<TitleProps> = ({ children, className }) => (
  <h2
    className={cn(
      "uppercase font-extrabold tracking-tight-custom text-balance text-[clamp(2rem,12vw,3.2rem)] leading-[100%] md:text-[62px] md:leading-15.5",
      className,
    )}
  >
    {children}
  </h2>
);

export default Title;
