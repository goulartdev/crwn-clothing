import { useDispatch } from "react-redux";

import { Product } from "../../model";

import { addItemToCart } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-buttom/custom-buttom";
import Money from "../money/money";

import "./collection-item.scss";

interface CollectionItemProps {
  product: Product;
}

const CollectionItem = ({ product }: CollectionItemProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${product.imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{product.name}</span>
        <span className="price">
          <Money value={product.price} />
        </span>
      </div>
      <CustomButton
        btnStyle="white"
        onClick={() => dispatch(addItemToCart(product))}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
