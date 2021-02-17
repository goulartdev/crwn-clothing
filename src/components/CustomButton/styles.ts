import styled, { css } from "styled-components";

const colorMapping = {
  black: css`
    color: white;
    background-color: black;
    border: none;

    &:hover:enabled {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  `,

  white: css`
    color: black;
    background-color: white;
    border: 1px solid black;

    &:hover:enabled {
      background-color: black;
      color: white;
      border: none;
    }
  `,

  blue: css`
    color: white;
    background-color: #4285f4;
    border: none;

    &:hover:enabled {
      background-color: #357ae8;
      border: none;
    }
  `,
};

export type ColorScheme = keyof typeof colorMapping;

interface CustomButtonProps {
  colorScheme?: ColorScheme;
}

export const CustomButton = styled.button<CustomButtonProps>`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${({ colorScheme = "black" }) => colorMapping[colorScheme]}

  &:disabled {
    background-color: lightgray;
    color: darkgray;
    border: none;
  }
`;
