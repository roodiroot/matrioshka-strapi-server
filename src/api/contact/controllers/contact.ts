import { factories } from "@strapi/strapi";
import type { Context } from "koa";

interface SendEmailBody {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export default factories.createCoreController("api::contact.contact", ({ strapi }) => ({
  async sendEmail(ctx: Context) {
    const { to, subject, text, html } = ctx.request.body as SendEmailBody;

    if (!to || !to.trim()) {
      return ctx.badRequest("Укажите email получателя");
    }

    if (!subject || !subject.trim()) {
      return ctx.badRequest("Укажите тему письма");
    }

    try {
      await strapi.plugin("email").service("email").send({
        to,
        from: "no-reply@matryoshka-studio.ru",
        subject,
        text,
        html,
      });

      return ctx.send({ message: "Email sent successfully" });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
      return ctx.internalServerError(errorMessage);
    }
  },
}));
