// Starter Code:
const planets = [
  { name: "Mercury", temperature: 440, distance: 0.39 },
  { name: "Venus", temperature: 737, distance: 0.72 },
  { name: "Earth", temperature: 288, distance: 1 },
  { name: "Mars", temperature: 253, distance: 1.5 },
  { name: "Jupiter", temperature: 163, distance: 5.2 },
  { name: "Saturn", temperature: 133, distance: 9.58 },
  { name: "Uranus", temperature: 78, distance: 19.22 },
  { name: "Neptune", temperature: 73, distance: 30.05 },
];

// Filter planets that have a temperature between 253 and 323 degrees
// const planetTemp = planets.filter(function (planet) {
//   return planet.temperature >= 253 && planet.temperature <= 323;
// });

// Filter planets that have a distance between 0.75 and 1.5 AU from the sun
// const planetDist = planets.filter(function (planet) {
//   return planet.distance >= 0.75 && planet.distance <= 1.5;
// });

// Combine the two filters commented out above into a single filter.
const habitablePlanets = planets.filter((planet) => {
  return (
    planet.temperature >= 252 &&
    planet.temperature <= 330 &&
    planet.distance >= 0.75 &&
    planet.distance <= 1.5
  );
});

// log the filtered planets to the console
console.log(habitablePlanets);
