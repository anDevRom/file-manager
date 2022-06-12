import { resolve, basename, join, dirname } from 'path';
import { existsSync, createWriteStream, createReadStream } from 'fs';
import { appendFile } from 'fs/promises';
import { promisify } from 'util';
import { pipeline } from 'stream';

export const cp = async (currentPath, pathToFile, pathToDir) => {
  const fileName = basename(pathToFile);
  
  const resolvedPathToFile = resolve(currentPath, pathToFile);
  const resolvedPathToDir = resolve(dirname(resolvedPathToFile), pathToDir);
  const resolvedCopiedPath = join(resolvedPathToDir, fileName);

  const fileIsExist = existsSync(resolvedPathToFile);
  const destDirIsExist = existsSync(resolvedPathToDir);
  const copiedFileIsExist = existsSync(resolvedCopiedPath);

  if (fileIsExist && destDirIsExist && !copiedFileIsExist) {
    const sourceFile = createReadStream(resolvedPathToFile);

    await appendFile(resolvedCopiedPath, '');
    const destFile = createWriteStream(resolvedCopiedPath);

    await promisify(pipeline)(sourceFile, destFile);
    return;
  }

  throw new Error();
};