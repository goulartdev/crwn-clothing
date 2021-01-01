import { InputHTMLAttributes } from "react";

import "./form-input.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput = ({ label, ...props }: FormInputProps): JSX.Element => {
  return (
    <div className="input-group">
      <input {...props} />
      {label && (
        <label className={`${props.value && "shrink"}`} htmlFor={props.name}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
