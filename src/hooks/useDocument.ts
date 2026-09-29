import { useQuery } from "@tanstack/react-query";
import { getDocument } from "../api/docs";

export function useDocument(documentId?: string) {
  return useQuery({
    queryKey: ["document", documentId],
    queryFn: ({ signal }) => {
      if (!documentId) {
        throw new Error("Не указан ID документа");
      }
      return getDocument(documentId, signal);
    },
    enabled: Boolean(documentId?.trim()),
    staleTime: 60_000,
  });
}
