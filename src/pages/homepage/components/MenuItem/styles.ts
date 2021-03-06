import styled from "styled-components";

import BackgroundImage from "components/BackgroundImage";

export const Image = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
`;

const sizeMapping = {
  medium: "240px",
  large: "380px",
};

export type ItemSize = keyof typeof sizeMapping;

interface MenuItemProps {
  size: ItemSize;
}

export const MenuItem = styled.div<MenuItemProps>`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  height: ${({ size }) => sizeMapping[size]};

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
