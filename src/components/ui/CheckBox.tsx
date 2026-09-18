import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export interface CheckBoxProps extends Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "children"
> {
  children?: ReactNode;
  wrapperClassName?: string;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(function CheckBox(
  { children, className, wrapperClassName, disabled, ...props },
  ref,
) {
  return (
    <label
      className={cn(
        "inline-flex min-h-11 items-center gap-3 text-sm font-semibold tracking-tight-custom",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        wrapperClassName,
      )}
    >
      <span className="relative inline-flex size-6 shrink-0">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={cn(
            "peer m-0 size-6 shrink-0 appearance-none rounded-md border-3 border-big-border bg-white shadow-[3px_3px_0_0_var(--color-big-border)]",
            "cursor-pointer transition-colors checked:bg-primary-button",
            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-big-border",
            "aria-invalid:border-red-background disabled:cursor-not-allowed",
            className,
          )}
        />
        <Check
          aria-hidden="true"
          strokeWidth={3}
          className="pointer-events-none absolute inset-0 m-auto size-4 text-foreground opacity-0 peer-checked:opacity-100"
        />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
