import ArticleImage from "./ArticleImage";
import ArticleSlider from "./ArticleSlider";

import type { ProjectBlock } from "../../types/project";
import { ArticleQuote } from "./ArticleQuote";
import ArticleRichText from "./ArticleRichText";

export default function ProjectArticle({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <div className="my-12 space-y-12 sm:my-20 sm:space-y-20">
      {blocks.map((block) => {
        const key = `${block.__component}-${block.id}`;
        switch (block.__component) {
          case "shared.rich-text":
            return <ArticleRichText key={key} body={block.body} />;
          case "shared.media":
            return block.file ? <ArticleImage key={key} file={block.file} /> : null;
          case "shared.slider":
            return <ArticleSlider key={key} files={block.files ?? []} />;
          case "shared.quote":
            return <ArticleQuote key={key} body={block.body} title={block.title} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
