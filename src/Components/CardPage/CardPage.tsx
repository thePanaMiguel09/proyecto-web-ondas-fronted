import type { InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
}

const CardPage: React.FC<Props> = ({
  title,
  icon: Icon,
  description,
  imageSrc,
  link,
}) => {
  const content = (
    <div className="flex flex-col h-full min-h-[520px] bg-gray-800 rounded-2xl border border-gray-700 shadow-xl hover:scale-[1.02] transition-transform overflow-hidden">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-full h-60 object-cover" />
      )}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          {Icon && <Icon className="text-blue-500 mb-3" size={30} />}
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-base text-gray-300">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-semibold text-blue-400 hover:underline"
          >
            Leer más →
          </a>
        )}
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full w-full block"
    >
      {content}
    </a>
  ) : (
    <div className="h-full w-full">{content}</div>
  );
};

export default CardPage;
