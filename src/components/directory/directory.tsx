import { useState } from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory.scss';

interface Section {
  id: number;
  title: string;
  imageUrl: string;
  route?: string;
  size?: 'medium' | 'large';
  linkUrl: string;
}

const Directory = () => {
  const [sections] = useState<Section[]>([
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'sneakers'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'womens'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'mens'
    }
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({id, ...sectionProps}) => {
        return (
          <MenuItem key={id} {...sectionProps} />
        );
      })}
    </div>    
  );
}

export default Directory;