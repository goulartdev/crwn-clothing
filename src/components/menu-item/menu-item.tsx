import { useHistory, useLocation } from 'react-router-dom';

import './menu-item.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
  linkUrl: string;
}

const MenuItem = ({ title, imageUrl, size='medium', linkUrl }: MenuItemProps) => {
  const { pathname } = useLocation();
  const history = useHistory();
  
  return (
    <div 
      className={`menu-item ${size}`} 
      onClick={() => history.push(`${pathname}${linkUrl}`)}
    >
      <div 
        className="background-image"
        style={{ 
          backgroundImage: `url(${imageUrl})` 
        }} 
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;