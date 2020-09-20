// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

// *** looked this up and then went through each step to understand what was occuring.**** 

const cashRegister = function (price) {
  // use object.keys to find the objects property names, and put them in array
  // use reduce() to add key values together.
  // parseFoat to return floating point if required.
  const total = Object.keys(price).reduce((cashRegister, key) => cashRegister + parseFloat(price[key] || 0), 0);
  return `Your shopping totals $${total}`;
};

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
console.log(cashRegister(cartForParty)); // 60.55
