import { RootState } from "../root-reducer";
import { DirectoryState } from "./directory.types";

export const selectDirectory = (state: RootState): DirectoryState => state.directory;