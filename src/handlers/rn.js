import { rename } from 'fs/promises';
import { resolve, dirname } from 'path';
import { existsSync } from 'fs';

export const rn = async (currentPath, pathToFile, newFileName) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);
  const resolvedPathToDir = dirname(resolvedPathToFile);
  const resolvedNewPathToFile = resolve(resolvedPathToDir, newFileName);

  const fileIsExist = existsSync(resolvedPathToFile);
  const newFileNameIsExist = existsSync(resolvedNewPathToFile);

  if (fileIsExist && !newFileNameIsExist) {
    await rename(resolvedPathToFile, resolvedNewPathToFile);
    return;
  }

  throw new Error();
};