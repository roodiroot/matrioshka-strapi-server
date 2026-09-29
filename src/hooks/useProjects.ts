import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "../api/projects";

export function useProjects(page = 1, pageSize = 25, params = {}) {
  return useQuery({
    queryKey: ["projects", "list", page, pageSize, params],
    queryFn: ({ signal }) => getProjects(page, pageSize, signal, params),
    staleTime: 60_000,
  });
}

export function useProject(slug?: string) {
  return useQuery({
    queryKey: ["projects", "detail", slug],
    queryFn: ({ signal }) => getProject(slug ?? "", signal),
    enabled: Boolean(slug?.trim()),
    staleTime: 60_000,
  });
}
