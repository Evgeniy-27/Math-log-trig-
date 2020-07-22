import Math from './Math';

export default class Daemon extends Math {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}