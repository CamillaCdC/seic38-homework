// question 1 Rectangle

const rectangleA = {
  isSquare: 'false',
  length: 4,
  width: 4,
  area: 16,
  perimeter: 16,
}

console.log('is square', rectangleA.isSquare);
console.log('the area is', rectangleA.area);
console.log('the perimeter is',rectangleA.perimeter);

// question 2 Triangle

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral : 'false',
  isIsosceles : 'true',
  area: 5.5,
  isObtuse: 'false',
}
console.log('is Equilateral', triangleA.isEquilateral);
console.log('is osceles =', triangleA.isIsosceles);
console.log('the area is',triangleA.area);
console.log('is Obtuse =', triangleA.isObtuse);





//question 3 The Cash Register
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};
const cashRegister = function(cart){
  let items = Object.keys(cart);
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i];
  let itemPrice = cart[itemName];
    sum += Number.parseFloat(itemPrice);
  }

  return sum;
}
console.log(cashRegister(cartForParty));





// Bonus Credit Card Validation

function validateCreditCard(creditCardNum){
  if(creditCardNum.length !== 16){
    return false;
  }
  for(let i = 0; i < creditCardNum.length; i++){
    let currentNumber = creditCardNum[i];
    currentNumber = Number.parseInt(currentNumber);
    if(!Number.isInteger(currentNumber)){
      return false;
    }
  }
  let obj = {};
  for(let i = 0; i < creditCardNum.length; i++){
    obj[creditCardNum[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }
  if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
    return false;
  }
  let sum = 0;
  for(let i = 0; i < creditCardNum.length; i++){
    sum += Number(creditCardNum[i]);
  }
  if(sum <= 16){
    return false;
  }
  return true;
};
console.log(validateCreditCard('9999777788880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1211111111111112')); //true
