import Button from "../../ui/Button";
import { InputPhone, InputPhoneWrapper } from "../../ui/InputPhone";
import Label from "../../ui/Label";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackSchema, type FeedbackFormValues } from "../../../schemas";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import CheckBox from "../../ui/CheckBox";
import { sendFeedback } from "../../../api/feedback";
import { useState } from "react";

const FeedbackForm = ({ onClose }: { onClose?: () => void }) => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
      consent: false,
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    setStatus("idle");
    try {
    const res = await sendFeedback({
      to: "borisov130490@gmail.com",
      subject: "Обратная связь c matryoshka-studio.ru",
      text: `Имя: ${data.name};
        Email: ${data.email || "Не указан"};
        Телефон: ${data.phone};
        Комментарий: ${data.comment || "Не указан"}.`,
    });
    if (!res.ok) throw new Error("Send failed");
    reset();
    setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mobile-feedback-form flex flex-col gap-5 text-start">
      <div className="relative">
        <Label htmlFor="feedback-name">Как вас зовут?</Label>
        <Input
          weight="sm"
          id="feedback-name"
          autoComplete="name"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p
            className="mt-2 text-sm text-red-700 font-medium"
            id="name-error"
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Label htmlFor="feedback-email">Ваш email</Label>
        <Input
          weight="sm"
          id="feedback-email"
          type="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            className="mt-2 text-sm text-red-700 font-medium"
            id="email-error"
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Label htmlFor="feedback-phone">Ваш телефон</Label>
        <InputPhoneWrapper>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputPhone
                weight="sm"
                id="feedback-phone"
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
        </InputPhoneWrapper>
        {errors.phone && (
          <p
            className="mt-2 text-sm text-red-700 font-medium"
            id="phone-error"
          >
            {errors?.phone?.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Label htmlFor="feedback-comment">Комментарий</Label>
        <TextArea rows={3} id="feedback-comment" {...register("comment")} />
      </div>
      <div className="relative text-start">
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
            className="mt-2 text-sm text-red-700 font-medium"
          >
            {errors.consent.message}
          </p>
        )}
      </div>
      {status === "success" && <p role="status" className="rounded-xl bg-green-100 p-4 text-green-900">Спасибо! Заявка отправлена. Мы свяжемся с вами.</p>}
      {status === "error" && <p role="alert" className="rounded-xl bg-red-100 p-4 text-red-900">Не удалось отправить заявку. Проверьте соединение и попробуйте снова — введённые данные сохранены.</p>}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button disabled={isSubmitting} isLoading={isSubmitting} type="submit" className="w-full">
          Отправить
        </Button>
        <Button onClick={onClose} className="w-full" variant="secondary">
          Закрыть
        </Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
