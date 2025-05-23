import type { InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import React from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  onClick?: () => void;
}

const CardsFunctions: React.FC<Props> = ({
  title,
  icon: Icon,
  onClick,
}: Props) => {
  return (
    <div
      className="bg-darkblue w-[85%] h-[15%] rounded-lg flex items-center justify-around hover:cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
      onClick={onClick}
    >
      {Icon && <Icon className="text-blue-500 mr-2" size={25} />}
      <div className=" text-text-muted">{title}</div>
    </div>
  );
};

export default CardsFunctions;
