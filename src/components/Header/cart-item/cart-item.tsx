import { CartItem as Item } from "../../../model";
import Money from "../../Money";

import "./cart-item.scss";

interface CartItemPros {
  item: Item;
}

const CartItem = ({ item }: CartItemPros): JSX.Element => {
  const {
    product: { name, price, imageUrl },
    quantity,
  } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="pric">
          {quantity} x <Money value={price} />
        </span>
      </div>
    </div>
  );
};

export default CartItem;