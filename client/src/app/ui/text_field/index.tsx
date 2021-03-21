import { FC, SyntheticEvent } from "react";

interface ITextField {
  type: string;
  id: string;
  label: string;
  className?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
}

export const TextField: FC<ITextField> = ({
  type = "text",
  id = "",
  label = "",
  className = "",
  placeholder = "",
  name = "",
  value = "",
  onChange,
}) => {
  return (
    <div className={`text-field ${className}`}>
      <label className='text-field__label' htmlFor={id}>
        {label}:
      </label>
      <input
        className='text-field__input'
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
