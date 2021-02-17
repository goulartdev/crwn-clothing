import styled from "styled-components";

export const CheckoutPage = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const Footer = styled.div`
  width: 100%;
  margin: 30px 0;
  display: grid;
  grid-template-columns: auto 180px;
  grid-template-areas:
    "warning total"
    "warning pay";
  gap: 20px;
  justify-items: end;
  align-items: center;
`;

export const TotalPrice = styled.div`
  font-size: 36px;
`;

export const TestWarning = styled.div`
  width: 100%;
  grid-area: warning;
  text-align: center;
  font-size: 22px;
  color: red;
`;
