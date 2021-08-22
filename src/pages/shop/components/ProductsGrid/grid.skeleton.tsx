import ItemSkeleton from "../CollectionItem/item.skeleton";

import * as S from "./styles";

interface SkeletonProps {
  numItems: number;
}

export const ProductsGridSlekeleton = ({ numItems }: SkeletonProps): JSX.Element => {
  return (
    <S.Grid>
      {Array.from(Array(numItems).keys()).map((key) => {
        return <ItemSkeleton key={key} />;
      })}
    </S.Grid>
  );
};

export default ProductsGridSlekeleton;
