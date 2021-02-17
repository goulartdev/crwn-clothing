import { useHistory, useLocation } from "react-router-dom";

import * as S from "./styles";

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size: S.ItemSize;
  linkUrl: string;
}

const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { title, imageUrl, size, linkUrl } = props;

  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <S.MenuItem size={size} onClick={() => history.push(`${pathname}${linkUrl}`)}>
      <S.Image url={imageUrl} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </S.MenuItem>
  );
};

export default MenuItem;
