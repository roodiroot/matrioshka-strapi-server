import Markdown from "react-markdown";
import { mediaUrl } from "../../lib/utils";

export default function ArticleRichText({ body }: { body: string }) {
  return (
    <div className="project-prose mx-auto max-w-3xl">
      <Markdown
        components={{
          h1: ({ children }) => <h2>{children}</h2>,
          img: ({ src, alt }) => (
            <img src={src ? mediaUrl(src) : undefined} alt={alt ?? ""} loading="lazy" />
          ),
        }}
      >
        {body}
      </Markdown>
    </div>
  );
}
