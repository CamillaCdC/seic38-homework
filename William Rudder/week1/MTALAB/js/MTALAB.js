function planTrip(lineA, stopA, lineB, stopB) {

//note: this only stop have intersects all lines is "U.S"
const lines = {

  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

  "L": ["Times Square", "8th", "6th", "Union Square", "3rd", "1st"],

  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
// create a function that helps us travel form one stop to the other on the same line
//parameters: line, start stop, end stop
function stopsOnLine(line, stopA, stopB) {
  const currentLine = lines[line];
if (!currentLine) {
  throw `line ${line} does not exist!`
}

const indexA = currentLine.indexOf(stopA);
const indexB = currentLine.indexOf(stopB);
// if the user types in the wrong thing then itll be -1 meaning nudrfined
if (indexA === -1 || indexB === -1) {
  throw `stop ${stopA} or ${stopB} are invalid`;
}
//examine indecies of our stops to determine what direction we want to go in
//if indexA is smaller then indexB  then we want to increase our index as we iterate the array
// ese if indexA is larger then indexB then we want to decrease our index as we iterate array
const direction = indexA <= indexB ? 1: -1;
//empty array for those stops to be punched into
let stops =[];

const start = indexA + direction;

const end = indexB + direction;

for (let i = start; i !== end; i += direction) {
  stops.push(currentLine[i]);
}
return stops;
}
//check if destination is ont he same line or different - this indicated if we need to change at union or // NOTE:
if (lineA === lineB) {
  const stops = stopsOnLine(lineA, stopA, stopB);
  console.log(`you must travel through the following stops on the ${lineA} line: ${stops.join(", ")}`);
  return stops.length;
}
//if we need get to this point we obviously have to change at union square
const stopToUnionSquare = stopsOnLine(lineA, stopA, "Union Square");
const stopsFromUnionSquare = stopsOnLine(lineB, "Union Square", stopB);
console.log(`you must travel through the following stops on the ${lineA} line: ${stopToUnionSquare.join(", ")}.`);
console.log("change at Union Square");
console.log(`your hourney continues through the following stops: ${stopsFromUnionSquare.join(", ")}`);

return stopToUnionSquare.length + stopsFromUnionSquare.length;

}


console.log("running tests...")

planTrip("N", "Times Square", "N", "8th")
planTrip("N", "Times Square", "6", "33rd")
