import { createReadStream, existsSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { rejects } from 'assert';

export const hash = async (currentPath, pathToFile) => {
  const resolvedPathToFile = resolve(currentPath, pathToFile);

  if (!existsSync(resolvedPathToFile)) {
    throw new Error();
  };

  const hash = createHash('sha256');
  const sourceFile = createReadStream(resolvedPathToFile);

  await new Promise((res, rej) => {
    sourceFile.on('readable', () => {
      const data = sourceFile.read();
      
      if (data)
        hash.update(data);
      else {
        console.log(hash.digest('hex'));
        res();
      }
    });

    sourceFile.on('error', (err) => {
      rej();
      throw err;
    });
  });
};

