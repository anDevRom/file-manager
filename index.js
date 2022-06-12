import { createInterface } from 'readline';
import { CurrentPath } from './src/CurrentPath.js';
import { User } from './src/User.js';
import { processCommand } from './src/processCommand.js';

const user = new User();

export const currentPath = new CurrentPath();

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

user.logGreet();
currentPath.log();

rl.prompt();

rl.on('line', processCommand);

const onCloseHandler = () => {
  user.logBye();
  process.exit();
};

rl.on('close', onCloseHandler);
rl.on('SIGINT', onCloseHandler);