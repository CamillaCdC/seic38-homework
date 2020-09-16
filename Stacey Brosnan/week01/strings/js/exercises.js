const DrEvil = function(amount){
  if (amount >= 1000000){
    console.log(`${amount} dollars (pinky)`);
  }
  else {
    console.log(`${amount} dollars`);
  }
};

DrEvil(1000001);
DrEvil(999999);

const mixUp = function(string1, string2){
  const firstLetters1 = string1.charAt(0) + string1.charAt(1) ;
  const secondLetters2 = string2.charAt(0) + string2.charAt(1);
  string1 = string1.replace(firstLetters1, secondLetters2);
  string2 = string2.replace(secondLetters2, firstLetters1);
  console.log(`${string1} ${string2}`);
};

mixUp("mix", "pod");
mixUp('dog', 'dinner');

  const fixStart = function(string){
  const s = string.charAt(0);
  let outputString = "";
  for (let i = 0; i < string.length; i++){
  if (string[i] === s && i !== 0){
    outputString += "*";
  }
  else {
    outputString += string[i];
  }
};
    return outputString;
};

console.log(fixStart("fafffffle"));
console.log(fixStart("babble"));

  const verbing = function(string){
  let outputString = "";
  const i = "ing";
  const l = "ly";

  if (string.length < 3){
    outputString = string;
    console.log(`${outputString}`);
  }
  else if (!string.endsWith('ing')){
    outputString = string + i;
    console.log(`${outputString}`);
  }
  else {
    outputString = string + l;
    console.log(`${outputString}`);
  }

};

verbing("swim");
verbing("swimming");
verbing("go");

  const notBad = function(string){
  const not = "not";
  const bad = "bad";
  //const length = string.lenght;
  let outputString = "";
  if (string.includes(bad) && !string.includes(not)){
    outputString = string;
    console.log(`${outputString}`);
  }

};


notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
