import Daemon from "../Daemon";
import Magician from "../Magician";

test('Атака мага без дурмана', () => {
  const mag = new Magician('Vasiy');
  mag.dope = false;
  expect(mag.attack(2)).toEqual(90);
});

test("Атака демона с дурманом", () => {
  const dem = new Daemon('Petiy');
  dem.dope = true;
  expect(dem.attack(2)).toEqual(85);
});