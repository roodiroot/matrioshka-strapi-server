export interface Document {
  id: number;
  documentId: string;
  name: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface DocumentResponse {
  data: Document;
  meta: {};
}
