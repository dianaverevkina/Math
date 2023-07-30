import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
  }

  // Устанавливает значение клетки
  set distance(distance) {
    this._distance = distance;
  }

  // Получает значение клетки
  get distance() {
    return this._distance;
  }

  // Устанавливает силу атаки
  set attack(attack) {
    this._attack = attack;
  }

  // Получаем значение силы атаки в зависимости от расстояния и "дурмана"
  get attack() {
    const distanceModifier = (100 - (this.distance - 1) * 10);
    const stonedModifier = Math.ceil(Math.log2(this.distance) * 5);

    if (this.stoned) {
      return (this._attack * distanceModifier) / 100 - stonedModifier;
    }
    return (this._attack * distanceModifier) / 100;
  }

  // Устанавливаем дурман
  set stoned(value) {
    this._stoned = value;
  }

  // Получаем дурман
  get stoned() {
    return this._stoned;
  }
}
