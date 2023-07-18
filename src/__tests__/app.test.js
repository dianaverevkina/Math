import Daemon from '../js/Daemon';

test('Calculate attack depending on distance', () => {
  const character = new Daemon('Ivan');
  character.distance = 3;
  character.attack = 100;
  expect(character.attack).toBe(80);
});

test('Calculate attack depending on distance and character is stoned', () => {
  const character = new Daemon('Ivan');
  character.distance = 3;
  character.stoned = 100;
  expect(character.stoned).toBe(72);
});
