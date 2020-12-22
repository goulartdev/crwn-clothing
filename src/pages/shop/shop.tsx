import { useState } from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection';

import { ShopData } from '../../model';

import SHOP_DATA from './shop.data';
import './shop.scss';


const ShopPage = () => {

  const [collections] = useState<ShopData[]>(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(shopData => {
        return <PreviewCollection key={shopData.id} {...shopData} />
      })}
    </div>
  )
}

export default ShopPage;