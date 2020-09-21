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
const nLine = ['Times Square',
                '34th',
                '28th',
                '23rd',
                'Union Square',
                '8th'];
const lLine = ['8th',
                '6th',
                'Union Square',
                '3rd',
                '1st'];
const sixLine = ['Grand Central',
                  '33rd',
                  '28th',
                  '23rd',
                  'Union Square',
                  'Astor Place'];
const trip = []


planTrip = function(line1, station1, line2, station2) {
  //find and store start and end indicies
  trip.length = 0; // clears trip variable for a new trip
  let start;
  let end;
  let startLine;
  let endLine;

  if (line1 === 'N') { // set first line
    startLine = nLine;
  } else if (line1 === 'L') {
    startLine = lLine;
  } else if (line1 === '6') {
    startLine = sixLine;
  } else {
  return console.error("Valid lines are 'N', 'L' and '6'."); //invalid line error
  }
  start = startLine.indexOf(station1); // set start to index of first station

  if (line2 === 'N') { //set end to index of station2 on line: line2
    endLine = nLine;
  } else if (line2 === 'L') {
    endLine = lLine;
  } else if (line2 === '6') {
    endLine = sixLine;
  } else {
    return console.error("Valid lines are 'N', 'L' and '6'.");
  }
  end = endLine.indexOf(station2);

  if (start === -1 || end === -1 ) {  // Invalid station error
    return console.error( "Please enter a valid station.")
  }
  //bump journey, in order, in to trip array
  if (start < end) {
    for (i = start; i <= end; i++) {
    trip.push(startLine[i]);
    }
  } else if (start > end) {

    for (i = start; i >= end; i --) {
    trip.push(startLine[i]);
    }
  } else {
    return console.warn("You're already there!");
  }
  // print journey, iterating through trip array
  let journey = `You must travel through the following stops on the ${line1} line: `
  for (i = 0; i < trip.length -1 ; i++) {
    journey += `${trip[i]}, `;
  }
  console.log(`${journey} ${trip[trip.length - 1]}.`);
  // print journey.length
  console.log(`${trip.length} stops in total.`)

};

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

console.log(`TRAIN GOOD CAR BAD`);
//one line tests
planTrip('6', '33rd', '6', 'Astor Place');
planTrip('6', 'Astor Place', '6', '33rd');

//error tests
// planTrip('6', '33rd', '6', '33rd'); // same start/finish
// planTrip('z', '33rd', '6', '28th'); // line1 invalid
// planTrip('6', '33rd', 'f', '28th'); // line2 invalid
// planTrip('6', 'zz', '6', '28th'); // station1 invalid
// planTrip('6', '33rd', '6', 'ZZ'); // station2 invalid
