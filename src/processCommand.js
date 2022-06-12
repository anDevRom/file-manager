import { availableCommands } from './availableCommands.js';
import { currentPath, rl } from '../index.js';

export const processCommand = async (commandStr) => {
  if (!commandStr) {
    currentPath.log();
    rl.prompt();
    return;
  }

  const [command, ...args] = commandStr.trim().split(' ');

  const isAvailableCommand = availableCommands.hasOwnProperty(command);
  const argumentsCountIsCorrect = availableCommands[command]?.countOfRequiredArguments === args.length;

  if (command === '.exit') {
    rl.close();
  }

  if (isAvailableCommand && argumentsCountIsCorrect) {
    try {
      await availableCommands[command].handler(args);
    } catch(err) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }

  currentPath.log();
  rl.prompt();
};