import type { ImageFormat } from ".";

export interface ProjectCover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: { x: number; y: number } | null;
  width: number;
  height: number;
  formats: Partial<Record<"large" | "medium" | "small" | "thumbnail", ImageFormat>>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type ProjectBlock =
  | { id: number; __component: "shared.rich-text"; body: string }
  | { id: number; __component: "shared.media"; file: ProjectCover | null }
  | { id: number; __component: "shared.slider"; files: ProjectCover[] | null }
  | { id: number; __component: "shared.quote"; title: string | null; body: string };

export interface PortfolioProject {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: ProjectCover | null;
  blocks?: ProjectBlock[];
}

export interface PortfolioResponse {
  data: PortfolioProject[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
