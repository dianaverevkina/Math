import Daemon from '../js/Daemon';

const character = new Daemon('Ivan');
character.distance = 3;
character.attack = 100;

test('Get attack if player is not stoned', () => {
  expect(character.attack).toBe(80);
});

test('Get attack if player is stoned', () => {
  character.stoned = true;
  expect(character.attack).toBe(72);
});
