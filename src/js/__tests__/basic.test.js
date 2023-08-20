import sum from '../basic';
import checkHealth from "../../index";

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

//--------------------------------------

let hero = {
  name: 'Маг', 
  health: 90
}

test('check Health of Hero', () => {
  const result = checkHealth(hero.health);

  expect(result).toBe('healthy');
});

//---------------------------------

test.each([
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
])('check health of heros', () => {
  const result = checkHealth(10);
  expect(result).toEqual('critical');
});