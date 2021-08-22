import Skeleton from "react-loading-skeleton";
import ProductsGridSkeleton from "../ProductsGrid/grid.skeleton";

import * as S from "./styles";

interface SkeletonProps {
  numItems: number;
}

export const CollectionSkeleton = ({ numItems }: SkeletonProps): JSX.Element => {
  return (
    <S.CollectionPage>
      <S.Title>
        <Skeleton width={150} />
      </S.Title>

      <ProductsGridSkeleton numItems={numItems} />
    </S.CollectionPage>
  );
};

export default CollectionSkeleton;
