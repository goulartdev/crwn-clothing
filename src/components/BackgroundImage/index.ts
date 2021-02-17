import styled from "styled-components";

const BackgroundImage = styled.div<{ url: string }>`
  background-image: url("${({ url }) => url}");
`;

export default BackgroundImage;
