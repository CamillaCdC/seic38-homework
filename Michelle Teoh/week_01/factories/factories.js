// Factories: Mass Produce Objects
// Add "global" features to all our objects
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    carnivore: true,
    meow: function () {
      console.log('Meow, my name is: ' + this.name); // dynamic
    },
    eat: function (food) {
      console.log(`Yum, I love to eat ${ food }`);
    }
  };
};
const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];
for (let i = 0; i < cuteCats.length; i++) {
  const cat = cuteCats[ i ];
  console.log(`${ cat.name } has ${ cat.furColor } fur.`);
