import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 100;
    this.isStoned = false;
  }

  set attackBasedOnDistance(distance) {
    this._attack = this.attack - (this.attack * ((distance - 1) * 0.1));
  }

  get attackBasedOnDistance() {
    return this._attack;
  }

  set stoned(distance) {
    this.attackBasedOnDistance = distance;
    this.stonedAttack = Math.round(this.attackBasedOnDistance - Math.log2(distance) * 5);
  }

  get stoned() {
    return this.stonedAttack;
  }
}
