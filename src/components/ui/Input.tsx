import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type InputSize = "sm" | "md";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  weight?: InputSize;
}

const sizes: Record<InputSize, string> = {
  sm: "min-h-8 px-3 py-2.5 text-sm",
  md: "min-h-10 px-6 py-3.5",
  // lg: "min-h-12 px-5 text-base",
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, weight = "md", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        " w-full uppercase tracking-tight-custom font-bold text-base placeholder:uppercase placeholder:tracking-tight-custom placeholder:font-semibold bg-white rounded-full shadow-big border-3 border-big-border  focus-visible:outline-big-border focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-1 focus-visible:ring-0 focus-visible:ring-offset-0",
        className,
        sizes[weight],
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
