export default class Calculation {
  constructor(name) {
    this.name = name;
    this.attackValue = 100;
    this.dopeStatus = true;
  }

  get attack() {
    return (distance) => {
      let attack = this.attackValue - 10 * (distance - 1);
      if (this.dope) {
        attack -= Math.log2(distance) * 5;
      }
      attack = Math.round(attack);
      return attack;
    };
  }

  set attack(value) {
    this.attackValue = value;
  }

  get dope() {
    return this.dopeStatus;
  }

  set dope(value) {
    this.dopeStatus = value;
  }
}