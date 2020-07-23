import Magician from './Magician';
import Daemon from './Daemon';

const mag = new Magician('Vasiy');
const dem = new Daemon('Petiy');


mag.dope = false;
console.log(mag.attack(2));

dem.dope = true;
console.log(dem.attack(2));