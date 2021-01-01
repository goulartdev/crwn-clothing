import { ButtonHTMLAttributes } from "react";
import "./custom-buttom.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: "black" | "blue" | "white";
}

const CustomButton = (props: CustomButtonProps): JSX.Element => {
  const { btnStyle = "black", children, ...otherProps } = props;

  return (
    <button className={`${btnStyle} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
