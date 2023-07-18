import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
  }

  // Расчет силы урона в зависимости от расстояния и дурмана
  calcDamagePower(attack, distance) {
    const damagePower = attack * ((distance - 1) * 0.1);
    if (this.isStoned) {
      return damagePower + Math.log2(distance) * 5;
    }
    return damagePower;
  }

  // Установка значения атаки
  set attack(value) {
    this._attack = value;
  }

  // Получить атаку в зависимости от расстояния
  get attack() {
    return this._attack - this.damagePower(this._attack, this.distance);
  }

  set stoned(value) {
    this.stonedAttack = value;
  }

  get stoned() {
    this.isStoned = true;
    this.stonedAttack -= this.damagePower(this.stonedAttack, this.distance);
    return this.stonedAttack;
  }
}
