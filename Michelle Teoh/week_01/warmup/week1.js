//
// # Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
//
// ### Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

const raindrops = function(numbers) {
  let output = '';

  if (numbers % 3 === 0) {
  output = output + 'Pling';
}
  if (numbers % 5 === 0); {
  output += 'Plang';
}
  if (numbers % 7 === 0); {
  output += 'Plong';
}
if (output.length === 0); {
  output += numbers;
}
return output;


// # Warmup - Raindrops
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.


const answer = function(question) {
  let output = "";

  if (question === "question") {
    output = 'Sure';
  } else if (question === 'yell') {
    output = ('Woah, chill out!'.toUpperCase());
  } else if (question === '') {
    output+= 'Fine, Be that way!';
  } else {
    output = 'Whatever.';
  }
  return output
};


  console.log(answer('question'))
  console.log(answer('yell'))
  console.log(answer(''))
  console.log(answer('nothing'))


  // 1. Create an array of the days of the week
  // Create a variable named days_of_the_week as an array of the following:
  // Monday
  // Tuesday
  // Wednesday
  // Thursday
  // Friday
  // Saturday
  // Sunday
const days_of_the_week = ['Monday', 'Tuesday',' Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(days_of_the_week)

  // 2. My calendar says the first day is Sunday...
 // Remove Sunday from the last postion and move it to the first position. Use array methods.
const days_of_the_week = ['Monday', 'Tuesday',' Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(days_of_the_week.pop())

  // 3. Create a new array of the days of the week:
  // The first inner array should be the weekdays
  // The second inner array should be the weekend days
  // 4. Remove either the weekdays or the weekends
  // Your choice...
const days_of_the_week = {
  ['Monday', 'Tuesday',' Wednesday', 'Thursday', 'Friday'],
  ['Saturday', 'Sunday']}

days_of_the_week.sort(0)

  // 5. Sort the remaining days alphabetically




//   Filter
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// Example:
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'
//
// Bonus question
// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'. Super extra bonus points for proving "how well engineered Javascript really is".

var removeDuplicateWords = function(s) {
var str = s.split(" ");
var result = [];
for(var i = 0; i < str.length ; i++){
    //if(result.indexOf(str[i]) == -1) result.push(str[i]);
    if(result.indexOf(str[i]) === -1){
      result.push(str[i]);
    }
}
 return result.join(" ");
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
