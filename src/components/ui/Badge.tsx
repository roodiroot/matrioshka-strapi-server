import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "inline-block text-xs uppercase font-bold tracking-tight-long px-5 py-2 rounded-full border-big-border border-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
