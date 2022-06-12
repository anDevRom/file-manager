import { resolve } from 'path';
import { existsSync } from 'fs';
import { rm } from 'fs/promises';

export const remove = async (currentPath, pathToFile) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);

  const fileIsExist = existsSync(resolvedPathToFile);

  if (fileIsExist) {
    await rm(resolvedPathToFile);
    return;
  }

  throw new Error();
};