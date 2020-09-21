// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


//Get Object.keys(returns an array whose elements are strings) in cartFortParty and iterate forEach(value) in the array.
//Then changing cartForPartys existing array from strings to numbers via Number()
//logged cartForParty to see if values are strings or numbers



Object.keys(cartForParty).forEach(function(arg){
  cartForParty[arg] = Number(cartForParty[arg])
})

console.log(cartForParty)

// Used let for sum and key as console yelled at me otherwise
// went over each key in cartForParty and added each keys value to sum.
// logged sum

const cashRegister = function () {
  let sum = 0;
  for (let key in cartForParty) {
    sum += cartForParty[key];
  }
  console.log(sum)
}

cashRegister(cartForParty)
