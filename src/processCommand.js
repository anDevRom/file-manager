import { availableCommands } from './availableCommands.js';
import { getCurrentDirPathMsg } from './helpers.js';
import { rl } from '../index.js';

export const processCommand = async (commandStr) => {
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
      console.log(err)
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }

  console.log(getCurrentDirPathMsg());

  rl.prompt();
};