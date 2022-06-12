import { resolve } from 'path';
import { existsSync } from 'fs';
import { homedir } from 'os';

export class CurrentPath {
  constructor() {
    this._currentPath = homedir();
  }

  get() {
    return this._currentPath;
  }

  cd(path) {
    const newPathCandidate = resolve(this._currentPath, path);

    if (existsSync(newPathCandidate)) {
      this._currentPath = newPathCandidate;
      return this._currentPath;
    }

    throw new Error();
  }
}
