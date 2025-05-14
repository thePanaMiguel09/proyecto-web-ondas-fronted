import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="w-[100%] flex flex-col px-1">
      <label htmlFor={id} className="text-xl font-extralight mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="p-3 font-light text-sm border border-gray-300 rounded-sm w-full focus:outline-none focus:border-sky-400 transition-colors duration-200"
      />
    </div>
  );
};

export default InputField;
