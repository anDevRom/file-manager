import { createBrotliDecompress } from 'zlib';
import { resolve, join, basename } from 'path';
import { existsSync, createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream'
import { promisify } from 'util';

const pipe = promisify(pipeline);

export const decompress = async (currentPath, pathToFile, pathToDir) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);
  const resolvedPathToDir = resolve(currentPath, pathToDir);

  const fileName = basename(resolvedPathToFile);
  const decompressedFilePath = join(resolvedPathToDir, fileName.replace('.gz', ''));

  const fileIsExist = existsSync(resolvedPathToFile);
  const dirIsExist = existsSync(resolvedPathToDir);
  const decompressedFileIsExist = existsSync(decompressedFilePath);

  if (!fileIsExist || !dirIsExist || decompressedFileIsExist) {
    throw new Error();
  }

  try {
    const source = createReadStream(resolvedPathToFile);
    const dest = createWriteStream(decompressedFilePath);
    const brotli = createBrotliDecompress();
    
    await pipe(source, brotli, dest);
    return;
  } catch(err) {
    throw err;
  }
};