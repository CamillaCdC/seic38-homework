// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 5,
};

const rectangulator = (rectangle) => {
  const width = rectangle.width;
  const length = rectangle.length;
  const rectangleProperties = {
    isSquare: width === length,
    area: width * length,
    perimeter: width * 2 + length * 2,
  };
  console.log(rectangleProperties.isSquare);
  console.log(rectangleProperties.area);
  console.log(rectangleProperties.perimeter);
};

// rectangulator(rectangleA);

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 7,
  sideB: 8,
  sideC: 8,
};

const triangulator = (triangle) => {
  const sideA = triangle.sideA;
  const sideB = triangle.sideB;
  const sideC = triangle.sideC; //largest side must be sideC - potentially iterate over values and assign based on this?
  const triangleProperties = {
    isEquilateral: (sideA + sideB) / 2 === sideC ? true : false,
    isIsosceles:
      sideA === sideB || sideA === sideC || sideB === sideC ? true : false,
    isObtuse: sideC ** 2 > sideA ** 2 + sideB ** 2 ? true : false,
    area: (sideA + sideB + sideC) / 2,
  };
  console.log(triangleProperties.isEquilateral);
  console.log(triangleProperties.isIsosceles);
  console.log(triangleProperties.isObtuse);
  console.log(triangleProperties.area);
};

// triangulator(triangleA);

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

const cartTotal = (shoppingCart) => {
  const cartPrices = Object.values(shoppingCart).map((item) => (item = +item)); // gimme numbers
  const reducer = (accumulator, currentValue) => accumulator + currentValue; // bring to boil
  return cartPrices.reduce(reducer); // simmer
};
// console.log(cartTotal(cartForParty));

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is

// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const validateCreditCard = (cardNumber) => {
  let cardLegit = {
    "Tests Passed": [],
    "Tests Failed": [],
    Valid: "",
    Number: "",
  };
  const cardArray = cardNumber
    .split("-")
    .join("")
    .split("")
    .map((index) => (index = +index));
  cardLegit.Number = cardArray.join("");
  const checkForNumbers = (index) => typeof index === "number" && !isNaN(index); // checks that only numbers exist
  const checkForVariety = (index) => index === cardArray[0];
  const checkLastDigit = () => {
    const checkIfEven = cardArray.pop();
    return checkIfEven % 2 === 0;
  };
  const checkForSum = (accumulator, currentValue) => accumulator + currentValue;
  if (cardArray.every(checkForNumbers)) {
    // test for numbers only
    cardLegit["Tests Passed"].push("Only contains numbers");
    if (cardArray.reduce(checkForSum) > 16) {
      // if we only contain numbers, check the sum total of those
      cardLegit["Tests Passed"].push("Sum of numbers < 16");
    } else {
      cardLegit["Tests Failed"].push("Sum of numbers > 16");
    }
  } else {
    cardLegit["Tests Failed"].push("Contains something other than numbers");
  }
  if (cardArray.every(checkForVariety)) {
    // test that the card contains a variety of numbers
    cardLegit["Tests Failed"].push("Only contains the same number");
  } else {
    cardLegit["Tests Passed"].push("Contains a variety of numbers");
  }
  if (checkLastDigit()) {
    // test the last digit of the card
    cardLegit["Tests Passed"].push("Last digit is Even");
  } else {
    cardLegit["Tests Failed"].push("Last digit is Odd");
  }
  if (cardLegit["Tests Failed"].length === 0) {
    cardLegit.Valid = "True";
  } else {
    cardLegit.Valid = "False";
  }
  return cardLegit;
};
// console.log(validateCreditCard(`6666-66A6-6666-6534`));

// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// ### Tips

// Don't overthink this. Shorter code is probably the answer.

// ## Bonus

// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.

const bankOfRyan = {
  accounts: [
    {
      firstName: "Ryan",
      surname: "Bullough",
      id: 12345,
      balance: 40,
    },
    {
      firstName: "Joe",
      surname: "Blow",
      id: 125523,
      balance: 400,
    },
  ],
  deposit: function (account, amount) {
    this.accounts.forEach(function (accountnumber) {
      if (accountnumber.id === account) {
        accountnumber.balance += amount;
        console.log("deposit success");
      }
    });
  },
  withdraw: function (account, amount) {
    this.accounts.forEach(function (accountnumber) {
      if (accountnumber.id === account) {
        if (accountnumber.balance > amount) {
          accountnumber.balance -= amount;
          console.log("withdrawal success");
        } else {
          console.log("insufficient funds");
        }
      }
    });
  },
  addAccount: function (firstName, surname, id, balance) {
    return this.accounts.push({
      firstName,
      surname,
      id,
      balance,
    });
  },
  displayBalance: function () {
    const accountBalances = this.accounts;
    let howRichWeAre = 0;
    accountBalances.forEach(function (account) {
      howRichWeAre += account.balance;
    });
    return `$${howRichWeAre}`;
  },
};
bankOfRyan.addAccount("James", "Boffer", 1224, 40.5);
bankOfRyan.addAccount("Sheree", "Clement", 122314, 700.53);
bankOfRyan.addAccount("Madeline", "Taylor", 14, 112340.5);
bankOfRyan.withdraw(1224, 20);
bankOfRyan.deposit(122314, 100000);
console.log(bankOfRyan.displayBalance());
