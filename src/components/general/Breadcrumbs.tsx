import { Link } from "react-router";
import { cn } from "../../lib/utils";

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) return null;

  const crumbs: BreadcrumbItem[] = [{ label: "Главная", to: "/" }, ...items];

  return (
    <nav aria-label="Хлебные крошки" className={cn("mb-10 text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {crumbs.map((item, index) => {
          const isCurrent = index === crumbs.length - 1;

          return (
            <li key={`${item.to ?? item.label}-${index}`} className="flex min-w-0 items-baseline gap-3">
              {index > 0 && <span aria-hidden="true" className="shrink-0">/</span>}
              {item.to && !isCurrent ? (
                <Link
                  to={item.to}
                  className="min-w-0 wrap-anywhere underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isCurrent ? "page" : undefined} className="min-w-0 wrap-anywhere">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
