import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mediaUrl(url: string) {
  if (/^(https?:)?\/\//.test(url)) return url;
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ?? "";
  return `${base}/${url.replace(/^\/+/, "")}`;
}
