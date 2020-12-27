import { ButtonHTMLAttributes } from 'react';
import './custom-buttom.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: 'black' | 'blue' | 'white';
}

const CustomButton = ({ btnStyle='black', children, ...props }: CustomButtonProps) => {
  return (
    <button className={`${btnStyle} custom-button`} {...props}>
      {children}
    </button>
  )
}

export default CustomButton;