import { Button, type ButtonProps } from "react-aria-components";
import { cn } from "../../../lib/utils";

type MobilMenuButtonProps = Omit<ButtonProps, "className"> & { className?: string };

const MobilMenuButton = ({ className, ...props }: MobilMenuButtonProps) => (
  <Button
    {...props}
    className={cn(
      "inline-flex min-h-[58px] min-w-[58px] items-center justify-center rounded-full border-3 border-big-border bg-primary-button p-3.5 shadow-big hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-1",
      className,
    )}
  />
);

export default MobilMenuButton;
