import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Визуальный стиль кнопки. */
  variant?: ButtonVariant;
  /** Размер кнопки. */
  size?: ButtonSize;
  /** Показывает индикатор и блокирует повторный клик. */
  isLoading?: boolean;
  /** Иконка перед текстом. */
  leftIcon?: ReactNode;
  /** Иконка после текста. */
  rightIcon?: ReactNode;
  /** Растягивает кнопку на всю доступную ширину. */
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-button rounded-full shadow-big border-3 border-big-border hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none  focus-visible:outline focus-visible:outline-big-border focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-1 focus-visible:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0",
  secondary:
    "bg-white text-shadow rounded-full shadow-big border-3 border-big-border hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none  focus-visible:outline focus-visible:outline-big-border focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-1 focus-visible:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0",
  outline:
    "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400",
  ghost: "bg-transparent text-zinc-700 hover:bg-zinc-100 focus-visible:ring-zinc-400",
  danger: "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-8 px-3 text-sm",
  md: "min-h-10 px-6 py-[14px] text-sm uppercase tracking-tight-custom",
  lg: "min-h-12 px-5 text-base",
  icon: "p-3.5 min-h-[58px] min-w-[58px]",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    className = "",
    children,
    type = "button",
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap",
        "transition-colors duration-200",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
