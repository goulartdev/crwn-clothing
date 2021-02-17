import { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email";
  label: string;
}

const InputText = ({ label, ...props }: InputTextProps): JSX.Element => {
  return (
    <S.InputGroup>
      <S.InputText {...props} />
      <S.InputLabel shrink={!!props.value} htmlFor={props.name}>
        {label}
      </S.InputLabel>
    </S.InputGroup>
  );
};

export default InputText;
