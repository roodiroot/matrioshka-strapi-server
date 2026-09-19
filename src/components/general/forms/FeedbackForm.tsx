import Button from "../../ui/Button";
import { InputPhone, InputPhoneWrapper } from "../../ui/InputPhone";
import Label from "../../ui/Label";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackSchema, type FeedbackFormValues } from "../../../schemas";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import CheckBox from "../../ui/CheckBox";

const FeedbackForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
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

  const onSubmit = (data: FeedbackFormValues) => {
    console.log(data);
    // Здесь отправка на API.
    // data.phone уже очищен и преобразован схемой.
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="relative">
        <Label>Как вас зовут?</Label>
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
            className="absolute -bottom-5 left-5.5 text-xs text-red-500 tracking-tighter font-medium"
            id="name-error"
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Label>Ваш email</Label>
        <Input
          weight="sm"
          id="feedback-email"
          type="email"
          autoComplete="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            className="absolute -bottom-5 left-5.5 text-xs text-red-500 tracking-tighter font-medium"
            id="name-error"
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Label>Ваш телефон</Label>
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
            className="absolute -bottom-5 left-5.5 text-xs text-red-500 tracking-tighter font-medium"
            id="name-error"
          >
            {errors?.phone?.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Label>Комментарий?</Label>
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
            className="absolute bottom-0 left-9 text-xs text-red-500 tracking-tighter font-medium"
          >
            {errors.consent.message}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <Button type="submit" className="w-full">
          Отправить
        </Button>
        <Button className="w-full" variant="secondary">
          Закрыть
        </Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
