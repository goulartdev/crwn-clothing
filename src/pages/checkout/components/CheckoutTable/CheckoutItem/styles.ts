import styled from "styled-components";

import BackgroundImage from "components/BackgroundImage";
import { Row } from "../styles";

export const CheckoutItem = styled(Row)`
  min-height: 150px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 100%;
  max-width: 160px;
  padding-right: 20px;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const Image = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const RemoveItem = styled.span`
  cursor: pointer;

  &::before {
    content: "✕";
  }
`;
