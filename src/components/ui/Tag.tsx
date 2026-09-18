import { cn } from "../../lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text, className, ...props }) => (
  <div
    {...props}
    className={cn(
      "shrink-0 whitespace-nowrap inline-block px-2.25 py-1.25 bg-white/50 font-semibold text-sm tracking-tight-custom border-2 border-r-big-border rounded-full ",
      className,
    )}
  >
    {text}
  </div>
);

export default Tag;
