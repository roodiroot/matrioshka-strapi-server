import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "../api/projects";

export function useProjects(page = 1, pageSize = 25) {
  return useQuery({
    queryKey: ["projects", "list", page, pageSize],
    queryFn: ({ signal }) => getProjects(page, pageSize, signal),
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
