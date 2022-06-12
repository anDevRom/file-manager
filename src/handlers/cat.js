import { resolve } from 'path';
import { existsSync, createReadStream } from 'fs';

export const cat = async (currentPath, pathToFile) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);

  if (!existsSync(resolvedPathToFile)) {
    throw new Error();
  }

  return await new Promise((res, rej) => {
    const source = createReadStream(resolvedPathToFile);

    source.on('data', (chunk) => {
      console.log(chunk.toString());
    });

    source.on('end', () => {
      res();
    });

    source.on('error', (err) => {
      rej();
      throw err;
    });
  });
};