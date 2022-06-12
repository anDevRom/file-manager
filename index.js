import { createInterface } from 'readline';
import { CurrentPath } from './src/currentPath.js';
import { 
  getGreetMsg, 
  getCurrentDirPathMsg,
  getUserName,
} from './src/helpers.js';
import { processCommand } from './src/processCommand.js';

const userName = getUserName();

export const currentPath = new CurrentPath();

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(getGreetMsg(userName));
console.log(getCurrentDirPathMsg());

rl.prompt();

rl.on('line', processCommand);

const onCloseHandler = () => {
  console.log(`\nThank you for using File Manager, ${userName}!`);

  process.exit();
};

rl.on('close', onCloseHandler);
rl.on('SIGINT', onCloseHandler);