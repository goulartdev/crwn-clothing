import { CartItem } from '../../model';

import Money from '../money/money';

import './checkout-item.scss';

interface CheckoutItemProps {
  item: CartItem;
}

const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const {product: {name, price, imageUrl}, quantity} = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price"><Money value={price} /></div>
      <div className="remove">&#10005;</div>
    </div>
  )
}

export default CheckoutItem;