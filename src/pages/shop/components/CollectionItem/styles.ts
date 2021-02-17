import styled from "styled-components";
import CustomButton from "components/CustomButton";
import BackgroundImage from "components/BackgroundImage";

export const ItemImage = styled(BackgroundImage)`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionItem = styled.div`
  position: relative;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    ${ItemImage} {
      opacity: 0.8;
    }

    ${AddToCartButton} {
      display: flex;

      &:hover {
        opacity: 0.85;
      }
    }
  }
`;

export const ItemFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ItemName = styled.span`
  flex: 1;
`;

export const ItemPrice = styled.span`
  min-width: 70px;
  text-align: right;
`;
