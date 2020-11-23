// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const shoppingCart = function ( shoppingList ) {
  let sum = 0;
  let itemCost = Object.values( cartForParty );
  for ( let i = 0; i < itemCost.length; i++ ) {
    cost = itemCost[i];
    sum = sum += cost;
  }
  return sum;
}
console.log (`${cashRegister(cartForParty)}`)

// array --> shoppingList
// objects --> dictionary
// keys are the items
// RESEARCH : for in loop : for ( let items in cartForParty ) {
// console.log ( items[ values ] ); finds values of items.
//for ( let items in cartForParty ) {
// console.log ( items[ values ], values ); finds both items and values.
