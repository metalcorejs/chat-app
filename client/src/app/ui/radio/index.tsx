import { FC, SyntheticEvent } from "react";

interface IRadio {
  id: string;
  label: string;
  className?: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  isChecked: boolean;
}

export const Radio: FC<IRadio> = ({
  className = "",
  id = "",
  label = "",
  name = "",
  value = "",
  onChange,
  isChecked,
}) => {
  return (
    <div className={`radio ${className}`}>
      <input
        className='radio__input'
        type='radio'
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <label className='radio__label' htmlFor={id}>
        <span className='radio__box'></span>
        {label}
      </label>
    </div>
  );
};
