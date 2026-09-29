import { useLocation } from "react-router";
import Markdown from "react-markdown";

import { useDocument } from "../hooks/useDocument";
import { mediaUrl } from "../lib/utils";
import Container from "../components/general/Container";
import NotFoundPage from "./NotFoundPage";

const documentIds: Record<string, string | undefined> = {
  "/docs/pd-consent": "tgsdai3gv1i7zx0tmft34sf2",
  "/docs/privacy-policy": "f82wvepf9dkkm169bm8hgtnm",
};

const DocPage = () => {
  const { pathname } = useLocation();
  const documentId = documentIds[pathname];
  const { data: doc, isPending, isError, refetch, isFetching, error } = useDocument(documentId);

  if (!documentId) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      <div className="project-prose mx-auto max-w-3xl">
        <Markdown
          components={{
            h1: ({ children }) => <h2>{children}</h2>,
            img: ({ src, alt }) => (
              <img src={src ? mediaUrl(src) : undefined} alt={alt ?? ""} loading="lazy" />
            ),
          }}
        >
          {doc?.data.body}
        </Markdown>
      </div>
    </Container>
  );
};

export default DocPage;
