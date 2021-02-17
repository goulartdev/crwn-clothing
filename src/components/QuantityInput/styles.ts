import styled from "styled-components";

export const QuantityInput = styled.div`
  display: flex;
`;

interface ArrowProps {
  left?: boolean;
  right?: boolean;
}

export const Arrow = styled.span<ArrowProps>`
  cursor: pointer;
  margin: 0 10px;

  &::before {
    content: "${({ left, right }) => (left ? "❮" : right ? "❯" : "")}";
  }
`;
