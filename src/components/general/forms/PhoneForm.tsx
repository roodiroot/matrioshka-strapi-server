import { Controller, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { InputPhone, InputPhoneWrapper } from "../../ui/InputPhone";
import { phoneSchema, type PhoneFormValues } from "../../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckBox from "../../ui/CheckBox";
import { sendFeedback } from "../../../api/feedback";
import { useState } from "react";

const PhoneForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
      consent: false,
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: PhoneFormValues) => {
    setLoading(true);
    const res = await sendFeedback({
      to: "borisov130490@gmail.com",
      subject: "Обратная связь c matryoshka-studio.ru",
      text: `Телефон: ${data.phone};`,
    });
    if (res.ok) {
      reset();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full max-w-95">
      <label className="sr-only" htmlFor="footer-phone">
        Номер телефона
      </label>
      <InputPhoneWrapper>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputPhone
              id="footer-phone"
              name={field.name}
              value={field.value}
              setValue={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
          )}
        />
        <Button isLoading={loading} disabled={loading} type="submit" className="-my-0.75 -mr-0.75">
          Отправить
        </Button>
      </InputPhoneWrapper>
      <div className="relative text-start mt-4">
        <CheckBox
          id="feedback-consent"
          {...register("consent")}
          required
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        >
          Согласен на обработку персональных данных
        </CheckBox>
        {errors.consent && (
          <p
            id="consent-error"
            className="absolute bottom-0 left-9 text-xs text-red-500 tracking-tighter font-medium"
          >
            {errors.consent.message}
          </p>
        )}
      </div>
    </form>
  );
};
export default PhoneForm;
