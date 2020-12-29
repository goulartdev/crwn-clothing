import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

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