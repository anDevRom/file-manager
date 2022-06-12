
import { readdir } from 'fs/promises';

export const ls = async (pathDir) => {
  try {
    const files = await readdir(pathDir);
    for await (const file of files) {
      console.log(file);
    }
  } catch(err) {
    throw err;
  }
};