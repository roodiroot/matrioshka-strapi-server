import { z } from "zod";

export const feedbackSchema = z.object({
  consent: z.boolean().refine((value) => value === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),

  name: z.string().trim().min(2, "Введите имя — минимум 2 символа").max(100, "Имя слишком длинное"),

  email: z.string().trim().pipe(z.email("Введите корректный email")).or(z.literal("")).optional(),

  phone: z
    .string()
    .trim()
    .min(1, "Введите номер телефона")
    .regex(/^\+?[\d\s()-]+$/, "Номер содержит недопустимые символы")
    .transform((value) => value.replace(/[\s()-]/g, ""))
    .pipe(z.string().regex(/^(?:\+7|8)\d{10}$/, "Введите номер в формате +7 (999) 123-45-67"))
    .transform((value) => (value.startsWith("8") ? `+7${value.slice(1)}` : value)),

  comment: z
    .string()
    .trim()
    .max(2000, "Комментарий должен быть не длиннее 2000 символов")
    .optional(),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export const phoneSchema = feedbackSchema.pick({
  phone: true,
  consent: true,
});

export type PhoneFormValues = z.infer<typeof phoneSchema>;
