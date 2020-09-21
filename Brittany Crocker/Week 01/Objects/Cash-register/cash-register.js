// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};



const cashRegister = function(items) {

Object.keys(items).forEach(function(arg){
  items[arg] = parseFloat(items[arg]);
})
let sum = 0;
for (let i in items){
sum += +items[i]
};
return sum
};
console.log(cashRegister(cartForParty));
