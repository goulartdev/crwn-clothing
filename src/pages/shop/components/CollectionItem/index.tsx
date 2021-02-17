import { useDispatch } from "react-redux";

import { Product } from "model";
import { addItem } from "redux/cart/cart.slice";

import Money from "components/Money";

import * as S from "./styles";

interface CollectionItemProps {
  product: Product;
}

const CollectionItem = ({ product }: CollectionItemProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <S.CollectionItem>
      <S.ItemImage url={product.imageUrl} />

      <S.ItemFooter>
        <S.ItemName>{product.name}</S.ItemName>
        <S.ItemPrice>
          <Money value={product.price} />
        </S.ItemPrice>
      </S.ItemFooter>

      <S.AddToCartButton colorScheme="white" onClick={() => dispatch(addItem(product))}>
        Add to cart
      </S.AddToCartButton>
    </S.CollectionItem>
  );
};

export default CollectionItem;
