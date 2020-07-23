import Calculation from './Calculation';

export default class Daemon extends Calculation {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}