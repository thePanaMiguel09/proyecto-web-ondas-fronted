import { IoIosArrowRoundForward } from "react-icons/io";
import clsx from "clsx";

interface Props {
  title: string;
  color?: "blue" | "purple" | "red" | "green" | "orange";
  onClick?: () => void;
}

function Button({ title, color = "blue", onClick }: Props) {
  const colorClasses = {
    blue: "bg-accent-blue hover:bg-accent-blue-600",
    purple: "bg-accent-purple hover:bg-accent-purple-600",
    red: "bg-accent-red hover:bg-accent-red-600",
    green: "bg-accent-green hover:bg-accent-green-600",
    orange: "bg-accent-orange hover:bg-accent-orange-600",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-[90%] h-[40px] flex items-center justify-center px-4 rounded-lg text-white transition-colors duration-200",
        colorClasses[color]
      )}
    >
      <span className="font-semibold">{title}</span>
      <IoIosArrowRoundForward size={24} />
    </button>
  );
}

export default Button;
