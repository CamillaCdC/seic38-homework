// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```const catFactory = function (n,a,f){
  //create a catFactory

//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
const planTrip = function(sLine,sPoint,fLine,fPoint){
  const lines = {
    startLine:sLine,
    startPoint:sPoint,
    finishLine:fLine,
    finishPoint:fPoint,
    lineN:['Times', '34th', '28th', '23rd', 'Union','8th'],
    lineL:['8th', '6th', 'Union', '3rd','1st'],
    line6:['Grand', '33rd', '28th', '23rd', 'Union','Astor'],

    trip: function(){
       let lineChoiceStart;
       let lineChoiceFinish;
       let startFromStation;
       let unionIndex;
       let firstTripStations;


if (lines.startLine == "lineN") {
lineChoiceStart =lines.lineN;
unionIndex = 4;


} else if (lines.startLine == "lineL") {
  lineChoiceStart =lines.lineL;
  unionIndex = 2;
} else {
lineChoiceStart =lines.line6;
unionIndex = 4;
}

if (lines.finishLine == "lineN") {
lineChoiceFinish =lines.lineN;
} else if (lines.finishLine == "lineL") {
  lineChoiceFinish =lines.lineL;
} else {
lineChoiceFinish =lines.line6;
}

const startIndex =lineChoiceStart.indexOf(lines.startPoint);
const stopIndex=lineChoiceFinish.indexOf(lines.finishPoint);



console.log(`You must travel through the following stops on the ${lines.startLine} line: 34th, 28th, 23rd, Union Square.`);

console.log("Change at Union Square.");
console.log(`Your journey continues through the following stops: 23rd, 28th, 33rd.`);
//console.log(`${totalTravelLength} stops in total.`);
    }
  }
  return lines.trip();
}
