import { createSelector } from "reselect";

import { Section } from "model";

import { RootState } from "../root-reducer";
import { DirectoryState } from "./directory.types";

const selectDirectory = (state: RootState): DirectoryState => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory: DirectoryState): Section[] => directory.sections
);
