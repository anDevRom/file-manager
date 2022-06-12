import { currentPath } from '../index.js';

export const getUserName = () => {
  const userNameArgPrefix = '--username=';

  const userNameArg = process.argv.find(
    arg => arg.startsWith(userNameArgPrefix)
  );

  if (!userNameArg) {
    console.log('You didn`t input your name');
    process.exit();
  }

  return userNameArg.replace(userNameArgPrefix, '');
};

export const getGreetMsg = (userName) => {
  return `Welcome to the File Manager, ${userName}!`
};

export const getCurrentDirPathMsg = () => {
  return `You are currently in ${currentPath.get()}`;
};