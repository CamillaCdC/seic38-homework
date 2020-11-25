
var userInput = prompt("Please enter a year: ")

const isLeapYear = function (year) {
  var result;
  year = parseInt(year);
  if (year % 400 === 0){
    result = true
  } else if (year % 100 === 0){
    result = false
  } else if (year % 4 === 0) {
    result = true
  } else {
    result = false
  }
  return result
};

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(100));
console.log(isLeapYear(userInput));



// Scrabble Score
var userInput = prompt("Enter a word please: ")
userInput = userInput.toLowerCase();

var points = {
	a: 1,
	e: 1,
	i: 1,
	o: 1,
	u: 1,
	l: 1,
	n: 1,
	r: 1,
	s: 1,
	t: 1,
	d: 2,
	g: 2,
	b: 3,
	c: 3,
	m: 3,
	p: 3,
	f: 4,
	h: 4,
	v: 4,
	w: 4,
	y: 4,
	k: 5,
	j: 8,
	x: 8,
	q: 10,
	z: 10,
};

var letter = 0;
var i = 0;
var sum = 0;
for (i = 0; i < userInput.length; i++) {
  letter = userInput[i];
  sum += points[letter];
}

alert(sum);

//
// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

var userInput1 = prompt("Enter first word which is anagram -> ")
var userInput2 = prompt("Enter second word which match the first anagram -> ")
var stringA = userInput1;
var stringB = userInput2;

function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

console.log(isAnagram(stringA, stringB))




// Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.

const arrSum = function(a, b) {
  let sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }

  b = 0;
  for (var i = 0; i < b.length; i++) {
    sum += b[i];
  }

  return sum;
};

console.log(arrSum([2, 6.4, 3], [3, 3.6, 2]));


// Space Age Warmup
// Given an age in seconds, calculate how old someone would be on the following planets:
//
// Earth: orbital period 365.25 Earth days
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years

var age = (planet, seconds) => {

    var orbitalPeriod;

    const solarsystem = {
        earth : 1,
        mercury : 0.2408467,
        venus : 0.61519726,
        mars : 1.8808158,
        jupiter : 11.862615,
        saturn : 29.447498,
        uranus : 84.016846,
        neptune : 164.79132
    }
    orbitalPeriod = solarsystem[planet];

    return (seconds / 31557600 / orbitalPeriod).toFixed(2);
}

age('mercury',2134835688);
