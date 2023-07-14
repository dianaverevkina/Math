import Daemon from '../js/Daemon';

test('Calculate attack depending on distance', () => {
  const character = new Daemon('Ivan');
  character.attackBasedOnDistance = 3;
  expect(character.attackBasedOnDistance).toBe(80);
});

test('Calculate attack depending on distance and character is stoned', () => {
  const character = new Daemon('Ivan');
  character.stoned = 3;
  expect(character.stoned).toBe(72);
});
