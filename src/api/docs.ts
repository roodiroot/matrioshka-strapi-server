import type { DocumentResponse } from "../types/document";

async function fetchDocument(documendId: string, signal?: AbortSignal): Promise<DocumentResponse> {
  const baseUrl = import.meta.env.VITE_API_URL;

  if (!baseUrl) {
    throw new Error("Не задан адрес API: VITE_API_URL");
  }

  const response = await fetch(`${baseUrl.replace(/\/+$/, "")}/api/docs/${documendId}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Не удалось получить документ (HTTP ${response.status})`);
  }

  return response.json();
}

export function getDocument(documendId: string, signal?: AbortSignal): Promise<DocumentResponse> {
  return fetchDocument(documendId, signal);
}
