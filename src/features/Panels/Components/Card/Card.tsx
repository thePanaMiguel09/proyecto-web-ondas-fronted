import type { InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import Button from "../Button/Button";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  titleButton: string;
  title: string;
  description: string;
  color?: "blue" | "purple" | "red" | "green" | "orange";
}

const Card: React.FC<Props> = ({
  title,
  icon: Icon,
  titleButton,
  description,
  color,
}: Props) => {
  return (
    <div className="w-[30%] h-[30%] bg-gray-800 rounded-lg border-2 border-gray-600 flex flex-col justify-around items-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="w-[90%] flex">
        {" "}
        {Icon && <Icon className="text-blue-500 mr-2" size={25} />}
      </div>
      <div className="w-[90%]">
        <div className="mb-1 text-2xl font-semibold text-white">{title}</div>
        <div className="text-sm font-light text-text-muted">{description}</div>
      </div>

      <div className="w-[100%] flex justify-center">
        <Button title={titleButton} color={color} />
      </div>
    </div>
  );
};

export default Card;
