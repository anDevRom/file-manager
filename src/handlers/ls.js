import { opendir } from 'fs/promises';
import { Readable } from 'stream';

export const ls = async (pathDir) => {
  const files = await opendir(pathDir);

  return await new Promise((res, rej) => {
    const source = Readable.from(files);

    source.on('readable', () => {
      const data = source.read();

      if (data) {
        console.log(data.name);
      } else {
        res();
      }
    });

    source.on('error', (err) => {
      rej();
      throw err;
    });
  });
};