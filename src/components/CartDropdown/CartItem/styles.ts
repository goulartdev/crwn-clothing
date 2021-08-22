import BackgroundImage from "components/BackgroundImage";
import styled from "styled-components";

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemImage = styled(BackgroundImage)`
  width: 40%;
  background-size: cover;
  background-position: center;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 10px;
`;

export const ItemName = styled.span`
  font-size: 16px;
`;
