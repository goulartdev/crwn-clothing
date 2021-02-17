import styled from "styled-components";

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CollectionTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;

  & a {
    cursor: pointer;
  }
`;

export const PreviewItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
