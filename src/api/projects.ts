import type { PortfolioProject, PortfolioResponse } from "../types/project";

async function fetchProjects(
  params: URLSearchParams,
  signal?: AbortSignal,
): Promise<PortfolioResponse> {
  const baseUrl = import.meta.env.VITE_API_URL;

  if (!baseUrl) {
    throw new Error("Не задан адрес API: VITE_API_URL");
  }

  const response = await fetch(`${baseUrl.replace(/\/+$/, "")}/api/articles?${params}`, { signal });

  if (!response.ok) {
    throw new Error(`Не удалось получить проекты (HTTP ${response.status})`);
  }

  return response.json();
}

/** Возвращает страницу проектов вместе с информацией о пагинации. */
export function getProjects(
  page = 1,
  pageSize = 25,
  signal?: AbortSignal,
): Promise<PortfolioResponse> {
  return fetchProjects(
    new URLSearchParams({
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize),
      populate: "cover",
    }),
    signal,
  );
}

/** Ищет проект по slug; null означает, что проект не найден. */
export async function getProject(
  slug: string,
  signal?: AbortSignal,
): Promise<PortfolioProject | null> {
  if (!slug.trim()) {
    throw new Error("Не указан slug проекта");
  }

  const response = await fetchProjects(
    new URLSearchParams({
      "filters[slug][$eq]": slug,
      "populate[cover]": "true",
      "populate[blocks][on][shared.rich-text]": "true",
      "populate[blocks][on][shared.quote]": "true",
      "populate[blocks][on][shared.media][populate]": "*",
      "populate[blocks][on][shared.slider][populate]": "*",
    }),
    signal,
  );

  return response.data[0] ?? null;
}
