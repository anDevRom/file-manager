import {EOL, cpus, homedir, userInfo, arch} from 'os';

export const getOsInfo = (arg) => {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      return;
    case '--cpus':
      console.log(`Overall amount of CPUS: ${cpus().length}`);
      cpus().forEach(({ model, speed }) => {
        console.log(`${model.trim()} ${speed / 1000}GHz`);
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