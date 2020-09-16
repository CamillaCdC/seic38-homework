// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.


// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
console.log("First function\n");

function DrEvil(a){
  if (a===1000000){
    return (`DrEvil(${a}): ${a} dollars (pinky)`);
  }else{
    return (`DrEvil(${a}): ${a} dollars`);
  }
}
console.log(DrEvil(10));
console.log(DrEvil(1000000));
console.log(DrEvil(100));

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and
// swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
console.log("\nSecond function\n");

function mixUp(a,b){
  if ((typeof(a) !== "string")||(typeof (b)!=="string")){
    return("You have input non-strings argument. The inputs for this function should be strings");
  }else{
    return(`${b.slice(0,2)+a.slice(2,a.length)} ${a.slice(0,2)+b.slice(2,b.length)}`);
  };
};
console.log(mixUp("mix","pod"));
console.log(mixUp("dog","dinner"));
console.log(mixUp("dog",'223'));


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*',
// except for the first character itself.You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
console.log("\nThird function\n");

function fixStart(a){
  let result = a[0];
  if (typeof(a) !== "string"){
    return("You have input non-strings argument. The inputs for this function should be strings");
  }else{
    for (i=1; i<a.length; i++){
      if (a[i]===a[0]){
        result = result+'*';
      }else{
        result = result+a[i];
      };
    };
  };
  return(result);
};
console.log(fixStart('babble'));

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
console.log("\nForth function\n");

function verbing(a){
  b = ['a','i','o','e','u'];

  if (typeof(a) !== "string"){
    return("You have input non-strings argument. The inputs for this function should be strings");
  }else{
    if (a.length>=3){
      for (i=0;i<b.length; i++){
        if (a[a.length-2]===b[i]){
          a = a.slice(0,a.length)+a[a.length-1];
        };
      };
    };
    if (a.length < 3){
      return(a);
    }else if ((a.slice(a.length-3,a.length)!=='ing')||(a.length-3<3)) { return(a+'ing');}
    else if (a.slice(a.length-3,a.length)==='ing'){ return(a+'ly');}
  }
};

console.log(verbing('go'));
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('bring'));
console.log(verbing(23));


// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
console.log("\nFifth function\n");

//First Way\\
// function notBad(a){
//
//   let result = '';
//   let s = 0;
//
//   if (typeof(a) !== "string"){
//     return("You have input non-strings argument. The inputs for this function should be strings");
//   }else{
//     let splitA=a.split(" ");
//     for (i=0; i<splitA.length; i++){
//       if (splitA[i]==='not'){
//         for(j=i+1;j<splitA.length; j++){
//           if (splitA[j]==='bad!'){
//              s = i;
//           }
//         }
//       }
//     }
//     if (s!==0) {
//       for (i=0; i<s; i++) {
//         result = result + splitA[i]+' ';
//       }
//       result = result+'good!';
//     }else{
//       result = a;
//     }
//   }
//
// return(result);
// };
//
// console.log(notBad('This dinner is not that bad!'));
// console.log(notBad('This movie is not so bad!'));
// console.log(notBad('This dinner is bad!'));
// console.log(notBad(2));

//Second Way - better way\\

function notBad(a){
  let result ='';
  let s = 0;
  if (typeof(a) !== "string"){
    return("You have input non-strings argument. The inputs for this function should be strings");
  }else{
    let splitA=a.split(" ");
    if ((a.includes('not'))&&(a.includes('bad'))){
      for (i=0; i<splitA.length; i++){
        if (splitA[i]==='not'){
          s = i;
        }
      }
    }
    if (s!==0) {
      for (i=0; i<s; i++) {
        result = result + splitA[i]+' ';
      }
      result = result+'good!';
    }else{
      result = a;
    }
  }

return(result);
};

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
console.log(notBad(2));
