import {EOL, cpus, homedir, userInfo, arch} from 'os';

export const getOsInfo = (arg) => {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      return;
    case '--cpus':
      cpus().forEach(cpu => {
        console.log(cpu.model);
      });
      return;
    case '--homedir':
      console.log(homedir());
      return;
    case '--username':
      console.log(userInfo().username);
      return;
    case '--architecture':
      console.log(arch());
      return;
    default:
      throw new Error();         
  }
};