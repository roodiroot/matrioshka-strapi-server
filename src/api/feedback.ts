export interface SendFeedbackBody {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

interface ResponseFeedback {
  ok: boolean;
  message?: string;
}

/** Отправляет сообщение на эндпоинт из VITE_FEEDBACK_API_URL. */
export async function sendFeedback(
  body: SendFeedbackBody,
  signal?: AbortSignal,
): Promise<ResponseFeedback> {
  const url = import.meta.env.VITE_FEEDBACK_API_URL;

  if (!url) {
    throw new Error("Не задан адрес API: VITE_FEEDBACK_API_URL");
  }

  const response = await fetch(`${url}/api/contact/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Не удалось отправить сообщение (HTTP ${response.status})`);
  }

  const data = await response.json();

  return {
    ok: response.ok,
    message: data.message,
  };
}
