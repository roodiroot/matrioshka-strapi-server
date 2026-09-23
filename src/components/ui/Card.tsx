import { cn } from "../../lib/utils";
import element from "../../assets/element.png";
import Tag from "./Tag";

interface Card_1Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}
interface Card_3Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}
interface Card_2Props extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  title: string;
  description: string;
}
interface Card_4Props extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
}

export const Card_1: React.FC<Card_1Props> = ({ title, description, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-[26px] border-3 border-big-border shadow-big hover:-translate-y-0.5 overflow-hidden ",
        className,
      )}
      {...props}
    >
      <h3 className="uppercase font-semibold text-[37px] leading-[100%] tracking-tight-custom">
        {title}
      </h3>
      <p className="mt-2.5 tracking-tighter font-medium text-sm">{description}</p>
    </div>
  );
};

export const Card_2: React.FC<Card_2Props> = ({
  title,
  description,
  number,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-[#467315] p-6 rounded-[26px] border-3 border-big-border shadow-big hover:-translate-y-0.5 overflow-hidden space-y-3",
        className,
      )}
      {...props}
    >
      <p className="font-semibold text-[85px] text-white leading-[100%] tracking-tight-custom">
        {number}
      </p>
      <h3 className="uppercase font-semibold text-white text-[24px] leading-[100%] tracking-tight-custom">
        {title}
      </h3>
      <p className="tracking-tighter font-medium text-white text-sm">{description}</p>
    </div>
  );
};

export const Card_3: React.FC<Card_3Props> = ({ title, description, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-[26px] border-3 border-big-border shadow-big hover:-translate-y-0.5 overflow-hidden flex items-start gap-5",
        className,
      )}
      {...props}
    >
      <img
        src={element}
        width={91}
        height={68}
        loading="lazy"
        className="w-[clamp(3rem,12vw,91px)]"
      />
      <div className="flex-1">
        <h3 className="uppercase font-bold text-[18px] leading-[100%] tracking-tight-custom">
          {title}
        </h3>
        <p className="mt-3 tracking-tighter font-medium text-sm">{description}</p>
      </div>
    </div>
  );
};

export const Card_4: React.FC<Card_4Props> = ({
  title,
  description,
  tags,
  image,
  imageAlt,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[26px] border-3 border-big-border shadow-big hover:-translate-y-0.5 overflow-hidden ",
        className,
      )}
      {...props}
    >
      <div className="bg-white relative -mx-0.75 -mt-0.75 aspect-[1.6/1] overflow-hidden rounded-[26px] border-3 border-big-border">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            width={388}
            height={246}
            className="absolute w-full h-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#F6ECDC] text-sm">
            Обложка скоро появится
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col">
        <div>
          <h3 className="uppercase font-bold  text-[35px] leading-[100%] tracking-tight-custom">
            {title}
          </h3>
          <p className="mt-2.5 tracking-tighter font-medium text-sm">{description}</p>
        </div>
        {tags.length > 0 && (
          <div className="mt-10 flex-1 flex items-end gap-x-2 gap-y-1 flex-wrap">
            {tags.map((i) => (
              <Tag key={i} text={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
