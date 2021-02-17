import { useSelector } from "react-redux";

import { selectDirectorySections } from "redux/directory/directory.selectors";

import MenuItem from "../MenuItem";

import * as S from "./styles";

const Directory = (): JSX.Element => {
  const sections = useSelector(selectDirectorySections);

  return (
    <S.DirectoryMenu>
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </S.DirectoryMenu>
  );
};

export default Directory;
