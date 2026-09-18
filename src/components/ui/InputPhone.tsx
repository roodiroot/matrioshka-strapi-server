import { cn } from "../../lib/utils";

type InputSize = "sm" | "md";

interface InputPhoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  ref?: React.Ref<HTMLInputElement>;
  weight?: InputSize;
}

const sizes: Record<InputSize, string> = {
  sm: "min-h-8 px-3 py-2.5 text-sm",
  md: "min-h-10 px-6 py-3.5",
  // lg: "min-h-12 px-5 text-base",
};

export const InputPhone: React.FC<InputPhoneProps> = ({
  ref,
  value,
  setValue,
  className,
  id = "phone",
  name = "phone",
  weight = "md",
  ...props
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && /^(?:\+7|8)\s?$/.test(event.currentTarget.value)) {
      event.preventDefault();
      setValue("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    let numbersValue = getNumbersValue(input);
    const selectionStart = input.selectionStart;
    const isEditingInMiddle = selectionStart !== null && selectionStart < input.value.length;
    let digitsBeforeCursor = input.value
      .slice(0, selectionStart ?? input.value.length)
      .replace(/\D/g, "").length;

    if (!numbersValue) {
      setValue("");
      return;
    }

    let formattedValue: string;

    if (["7", "8", "9"].includes(numbersValue[0])) {
      if (numbersValue[0] === "9") {
        numbersValue = "7" + numbersValue;
        digitsBeforeCursor += 1;
      }
      const firstSymbol = numbersValue[0] === "8" ? "8" : "+7";
      formattedValue = firstSymbol + " ";

      if (numbersValue.length > 1) {
        formattedValue += "(" + numbersValue.substring(1, 4);
      }
      if (numbersValue.length >= 5) {
        formattedValue += ") " + numbersValue.substring(4, 7);
      }
      if (numbersValue.length >= 8) {
        formattedValue += "-" + numbersValue.substring(7, 9);
      }
      if (numbersValue.length >= 10) {
        formattedValue += "-" + numbersValue.substring(9, 11);
      }
    } else {
      formattedValue = "+" + numbersValue.substring(0, 16);
    }

    // Update the DOM even when formatting produces the previous state value.
    input.value = formattedValue;
    if (isEditingInMiddle) {
      let cursor = formattedValue.startsWith("+") ? 1 : 0;
      let digits = 0;
      while (cursor < formattedValue.length && digits < digitsBeforeCursor) {
        if (/\d/.test(formattedValue[cursor])) digits += 1;
        cursor += 1;
      }
      input.setSelectionRange(cursor, cursor);
    }
    setValue(formattedValue);
  };

  return (
    <input
      maxLength={18}
      type="text"
      value={value}
      id={id}
      name={name}
      ref={ref}
      inputMode="tel"
      placeholder="8 (000) 000-00-00"
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      className={cn(
        "w-full  focus-visible:outline-0 focus-visible:ring-0",
        "uppercase tracking-tight-custom font-bold text-base",
        "placeholder:uppercase placeholder:tracking-tight-custom placeholder:font-semibold",
        className,
        sizes[weight],
      )}
      {...props}
    />
  );
};

export const InputPhoneWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between bg-white rounded-full shadow-big border-3 border-big-border  focus-visible:outline-big-border focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-1 focus-visible:ring-0 focus-visible:ring-offset-0">
      {children}
    </div>
  );
};

const getNumbersValue = (input: HTMLInputElement) => {
  return input.value.replace(/\D/g, "");
};
