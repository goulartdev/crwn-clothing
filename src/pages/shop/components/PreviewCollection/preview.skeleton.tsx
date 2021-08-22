import Skeleton from "react-loading-skeleton";
import ProductsGridSkeleton from "../ProductsGrid/grid.skeleton";

import * as S from "./styles";

interface SkeletonProps {
  numItems: number;
}

export const CollectionSkeleton = ({ numItems }: SkeletonProps): JSX.Element => {
  return (
    <S.CollectionPreview>
      <S.CollectionTitle>
        <Skeleton width={150} />
      </S.CollectionTitle>

      <ProductsGridSkeleton numItems={numItems} />
    </S.CollectionPreview>
  );
};

export default CollectionSkeleton;
