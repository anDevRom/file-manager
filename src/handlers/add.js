import { resolve, dirname } from 'path';
import { appendFile } from 'fs/promises';
import { existsSync } from 'fs';

export const add = async (currentPath, pathToFile) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);

  const dirIsExist = existsSync(dirname(resolvedPathToFile));
  const fileIsExist = existsSync(resolvedPathToFile);

  if (dirIsExist) {
    if (!fileIsExist) {
      await appendFile(resolvedPathToFile, '');
      return;
    }
  }

  throw new Error();
};