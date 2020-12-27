import { useDispatch } from 'react-redux';
import { ShopDataItem } from '../../model';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-buttom/custom-buttom';
import './collection-item.scss';

interface CollectionItemProps {
  item: ShopDataItem
}

const CollectionItem = ({ item }: CollectionItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div 
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
        
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">$ {item.price.toFixed(2)}</span>
      </div>
      <CustomButton 
        btnStyle="white"
        onClick={() => dispatch(addItemToCart(item))}
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

export default CollectionItem;