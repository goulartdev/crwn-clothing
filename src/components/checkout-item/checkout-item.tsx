import { useDispatch } from 'react-redux';

import { CartItem } from '../../model';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';

import Money from '../money/money';

import './checkout-item.scss';

interface CheckoutItemProps {
  item: CartItem;
}

const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const dispatch = useDispatch();
  const {product: {name, price, imageUrl}, quantity} = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span 
          className="arrow" 
          onClick={() => dispatch(removeItemFromCart(item.product))}
        >
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span 
          className="arrow" 
          onClick={() => dispatch(addItemToCart(item.product))}
        >
          &#10095;
        </span>
      </div>
      <div className="price"><Money value={price} /></div>
      <div className="remove">
        <span onClick={() => dispatch(clearItemFromCart(item.product))}>&#10005;</span>
      </div>
    </div>
  )
}

export default CheckoutItem;