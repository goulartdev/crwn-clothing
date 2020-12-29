import { useSelector } from 'react-redux';

import { selectDirectory } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

const Directory = () => {
  const sections = useSelector(selectDirectory);

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