import styled from "styled-components";
import CustomButton from "components/CustomButton";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0px;
  z-index: 5;
`;

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
