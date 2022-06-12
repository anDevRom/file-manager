import { EOL } from 'os';

export class User {
  constructor() {
    const userNameArgPrefix = '--username=';

    const userNameArg = process.argv.find(
      arg => arg.startsWith(userNameArgPrefix)
    );

    if (!userNameArg) {
      console.log('You didn`t input your name');
      process.exit();
    }

    this._name = userNameArg.replace(userNameArgPrefix, '');
  }

  logGreet() {
    console.log(`Welcome to the File Manager, ${this._name}!`);
  }

  logBye() {
    console.log(`${EOL}Thank you for using File Manager, ${this._name}!`);
  }
};