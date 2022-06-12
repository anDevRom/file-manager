import { createBrotliCompress } from 'zlib';
import { resolve, join, basename } from 'path';
import { existsSync, createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream'
import { promisify } from 'util';

const pipe = promisify(pipeline);

export const compress = async (currentPath, pathToFile, pathToDir) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);
  const resolvedPathToDir = resolve(currentPath, pathToDir);

  const fileName = basename(resolvedPathToFile);
  const compressedFilePath = join(resolvedPathToDir, `${fileName}.gz`);

  const fileIsExist = existsSync(resolvedPathToFile);
  const dirIsExist = existsSync(resolvedPathToDir);
  const compressedFileIsExist = existsSync(compressedFilePath);

  if (!fileIsExist || !dirIsExist || compressedFileIsExist) {
    throw new Error();
  }

  try {
    const source = createReadStream(resolvedPathToFile);
    const dest = createWriteStream(compressedFilePath);
    const brotli = createBrotliCompress();
    
    await pipe(source, brotli, dest);
    return;
  } catch(err) {
    throw err;
  }
};