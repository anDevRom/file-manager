import { resolve } from 'path';
import { existsSync } from 'fs';
import { rm } from 'fs/promises';

export const remove = async (currentPath, pathToFile) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);

  const fileIsExist = existsSync(resolvedPathToFile);

  if (!fileIsExist) {
    throw new Error();
  }

  try {
    await rm(resolvedPathToFile);
    return;
  } catch(err) {
    throw err;
  }
};