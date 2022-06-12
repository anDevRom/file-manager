import { currentPath } from '../index.js';
import { cp } from './handlers/cp.js';
import { add } from './handlers/add.js';
import { cat } from './handlers/cat.js';
import { compress } from './handlers/compress.js';
import { decompress } from './handlers/decompress.js';
import { hash } from './handlers/hash.js';
import { ls } from './handlers/ls.js';
import { mv } from './handlers/mv.js';
import { getOsInfo } from './handlers/os.js';
import { remove } from './handlers/rm.js';
import { rn } from './handlers/rn.js';

export const availableCommands = {
  up: { 
    value: 'up', 
    countOfRequiredArguments: 0,
    handler(_) {
      currentPath.cd('..');
    }
  },
  cd: { 
    value: 'cd', 
    countOfRequiredArguments: 1,
    handler([dest]) {
      currentPath.cd(dest);
    }
  },
  ls: { 
    value: 'ls', 
    countOfRequiredArguments: 0,
    async handler(_) {
      await ls(currentPath.get());
    }
  },
  cat: { 
    value: 'cat', 
    countOfRequiredArguments: 1,
    async handler([src]) {
      await cat(currentPath.get(), src);  
    }
  },
  add: { 
    value: 'add', 
    countOfRequiredArguments: 1,
    async handler([src]) {
      await add(currentPath.get(), src);
    }
  },
  rn: { 
    value: 'rn', 
    countOfRequiredArguments: 2,
    async handler([src, newFileName]) {
      await rn(currentPath.get(), src, newFileName);
    }
  },
  cp: { 
    value: 'cp', 
    countOfRequiredArguments: 2,
    async handler([src, newPath]) {
      await cp(currentPath.get(), src, newPath);
    }
  },
  mv: { 
    value: 'mv', 
    countOfRequiredArguments: 2,
    async handler([src, newPath]) {
      await mv(currentPath.get(), src, newPath);
    }
  },
  rm: { 
    value: 'rm', 
    countOfRequiredArguments: 1,
    async handler([src]) {
      await remove(currentPath.get(), src);
    }
  },
  os: { 
    value: 'os', 
    countOfRequiredArguments: 1,
    handler([arg]) {
      getOsInfo(arg);
    }
  },
  hash: { 
    value: 'hash', 
    countOfRequiredArguments: 1,
    async handler([src]) {
      await hash(currentPath.get(), src);
    }
  },
  compress: { 
    value: 'compress', 
    countOfRequiredArguments: 2,
    async handler([src, dest]) {
      await compress(currentPath.get(), src, dest);
    }
  },
  decompress: { 
    value: 'decompress', 
    countOfRequiredArguments: 2,
    async handler([src, dest]) {
      await decompress(currentPath.get(), src, dest);
    }
  },
};