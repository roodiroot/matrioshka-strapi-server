import { forwardRef, type ComponentPropsWithRef } from "react";

interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className="px-3 py-2.5 text-sm w-full uppercase tracking-tight-custom font-bold placeholder:uppercase placeholder:tracking-tight-custom placeholder:font-semibold bg-white rounded-[26px] shadow-big border-3 border-big-border  focus-visible:outline-big-border focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-1 focus-visible:ring-0 focus-visible:ring-offset-0"
      {...props}
    />
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
