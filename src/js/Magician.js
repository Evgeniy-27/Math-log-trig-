import Calculation from './Calculation';

export default class Magician extends Calculation {
  constructor(name) {
    super(name);
    this.type = 'Magician';
  }
}