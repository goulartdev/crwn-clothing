import Directory from "./components/Directory";

import * as S from "./styles";

const HomePage = (): JSX.Element => {
  return (
    <S.HomePageContainer>
      <Directory />
    </S.HomePageContainer>
  );
};

export default HomePage;
