type SeoProps = {
  title: string;
  description: string;
  image?: string;
};

export default function Seo({ title, description, image }: SeoProps) {
  const pageTitle = `${title} — Матрёшка`;
  const imageUrl = image ? new URL(image, window.location.origin).href : undefined;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </>
  );
}
