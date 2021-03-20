import { FC } from "react";

interface IRadio {
  id: string;
  label: string;
  className?: string;
  name: string;
}

export const Radio: FC<IRadio> = ({
  className = "",
  id = "",
  label = "",
  name = "",
}) => {
  return (
    <div className={`radio ${className}`}>
      <input className='radio__input' type='radio' id={id} name={name} />
      <label className='radio__label' htmlFor={id}>
        <span className='radio__box'></span>
        {label}
      </label>
    </div>
  );
};
