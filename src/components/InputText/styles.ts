import { LabelHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  margin: 54px 0;
`;

export const InputText = styled.input`
  background: none;
  background-color: white;
  color: gray;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }

  /* ${({ type }) => (type === "password" ? `letter-spacing: 0.3em;` : null)} */
`;

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  shrink?: boolean;
}

export const InputLabel = styled.label<InputLabelProps>`
  color: gray;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink = false }) => (shrink ? shrinkLabel : "")}

  ${InputText}:focus ~ & {
    ${shrinkLabel}
  }
`;
