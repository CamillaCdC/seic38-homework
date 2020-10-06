// Factories: Mass Produce Objects
//Add global features to all our objects
const catFactory = function (n, a, f) {
  // create a cat
  return {
    //custom values
    name: n,
    age: a,
    furColor: f,
    // constants
    species: 'feline',
    // methods
    meow: function() {
      console.log('Meow, my name is: ' + this.name);
    },
    eat: function(food) {
      console.log(`I love to eat ${food}`)
    }
};
}

const cuteCats = [
		catFactory("Tyler", 18, 'tortoise shell'),
    catFactory("Eve", 18, 'tabby')
	];
