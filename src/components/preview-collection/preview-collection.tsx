import { ShopData } from '../../model';
import CollectionItem from '../collection-item/collection-item';

import './preview-collection.scss';

const PreviewCollection = ({ title, items }: ShopData) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .slice(0, 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;