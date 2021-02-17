import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
`;

interface CellProps {
  align?: "left" | "center" | "right";
}

export const Cell = styled.div<CellProps>`
  justify-self: ${({ align = "left" }) => align};
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 2fr 1.3fr;
  border-bottom: 1px solid darkgray;
`;

export const Header = styled(Row)`
  height: 40px;

  ${Cell} {
    text-transform: capitalize;
  }
`;
