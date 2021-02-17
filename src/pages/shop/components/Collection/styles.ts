import styled from "styled-components";
import { CollectionItem } from "../CollectionItem/styles";

export const CollectionPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const Collection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  ${CollectionItem} {
    margin-bottom: 30px;
  }
`;
