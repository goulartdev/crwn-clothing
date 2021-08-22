import Skeleton from "react-loading-skeleton";

import * as S from "./styles";

export const ItemSkeleton = (): JSX.Element => {
  return (
    <S.CollectionItem>
      <Skeleton height="321px" width="22vw" />

      <S.ItemFooter>
        <S.ItemName>
          <Skeleton />
        </S.ItemName>
      </S.ItemFooter>
    </S.CollectionItem>
  );
};

export default ItemSkeleton;
