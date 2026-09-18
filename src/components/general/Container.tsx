import { cn } from "../../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => (
  <div {...props} className={cn("relative border-big-border border-b-3", className)}>
    <div className="w-full max-w-7xl px-3.5 py-25 mx-auto">{children}</div>
  </div>
);

export default Container;
