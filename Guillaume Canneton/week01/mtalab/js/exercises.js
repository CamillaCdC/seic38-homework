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


const lineS = ['Astor Place','Union Square', '23rd', '28th', '33rd', 'Grand Central'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const lineN = ['8th','Union Square', '23rd', '28th', '34th', 'Times Square'];

const planTrip = function(line1, stop1, line2, stop2){
  let lineStart ='';
  let lineFinish = '';

  if (line1 === '6'){
    lineStart = lineS
    } else if (line1 === 'L'){
      lineStart = lineL
      } else if (line1 === 'N'){
        lineStart = lineN
        } else {
      console.log('there is an error for the starting line')
  }

  if (line2 === '6'){
    lineFinish = lineS
    } else if (line2 === 'L'){
      lineFinish = lineL
      } else if (line2 === 'N'){
        lineFinish = lineN
        } else {
          console.log('there is an error for the finish line')
  }


  let arrayOfStop = []; //The Array that will list the stop and count the number of stops

//Part 1 when you are using the same Line
  if (line1 === line2 && stop1 ===stop2){
    console.log('You do not need to take the subway')
  } else if (line1 === line2) {
    if (lineStart.indexOf(stop1) < lineFinish.indexOf(stop2)){
      for (i = lineStart.indexOf(stop1); i < lineFinish.indexOf(stop2); i++){
        arrayOfStop.push(lineStart[i]);
      };
    // console.log(arrayOfStop);
    } else if (lineStart.indexOf(stop1) > lineFinish.indexOf(stop2)){
      for (i = lineStart.indexOf(stop1); i > lineFinish.indexOf(stop2); i--){
        arrayOfStop.push(lineStart[i]);
      };
      // console.log(arrayOfStop);
    } else {
      console.log('You do not need to take the subway')
    }
    const trip = `For your trip you will go through ${arrayOfStop.join(', ')} and finish at ${stop2} for a ${arrayOfStop.length +1 } stops journey`;
    console.log(trip);
    // return trip;
    // console.log(arrayOfStop);
    document.getElementById("message").innerHTML = trip

  } else {//Part 2-1 two different lines - add to the arrayOfStop the first part of the journey

    const stopConnection = 'Union Square'; //I create the variable if I plan to have more connection available on the map

    if (lineStart.indexOf(stop1) < lineStart.indexOf(stopConnection)){
      for (i = lineStart.indexOf(stop1); i < lineStart.indexOf(stopConnection); i++){
        arrayOfStop.push(lineStart[i]);
      };
    // console.log(arrayOfStop);
    } else if (lineStart.indexOf(stop1) > lineStart.indexOf(stopConnection)){
        for (i = lineStart.indexOf(stop1); i > lineStart.indexOf(stopConnection); i--){
          arrayOfStop.push(lineStart[i]);
        };
        // console.log(arrayOfStop);
    }
    //Part 2-2 second part of the journey to add to arrayOfStop
    if (lineFinish.indexOf(stopConnection) < lineFinish.indexOf(stop2)){
      for (i = lineFinish.indexOf(stopConnection); i < lineFinish.indexOf(stop2); i++){
        arrayOfStop.push(lineFinish[i]);
      };
    // console.log(arrayOfStop);
  } else if (lineFinish.indexOf(stopConnection) > lineFinish.indexOf(stop2)){
        for (i = lineFinish.indexOf(stopConnection); i > lineFinish.indexOf(stop2); i--){
          arrayOfStop.push(lineFinish[i]);
        };
        // console.log(arrayOfStop);
    }
    const trip = `For your trip you will go through ${arrayOfStop.join(', ')} and finish at ${stop2} for a ${arrayOfStop.length + 1 } stops journey`;
    console.log(trip);
    // return trip;
    // console.log(arrayOfStop);
    // document.getElementById("message").innerHTML = trip;
  }
}

const lineStartHtml = '';
const stopStartHtml = '';
const lineFinishHtml = '';
const stopFinishHtml = '';

document.getElementById("returnTrip").addEventListener("click", planTrip('6', '23th', 'N', '34th'));


// planTrip ('6', '23rd', 'N', '34th');
// planTrip ('6', '23rd', 'L', '1st');
// planTrip ('6', 'Astor Place', '6', '33rd');
// planTrip ('N', '28th', '6', 'Astor Place');
// planTrip ('N', '34th', 'L', '8th');
// planTrip ('N', '34th', 'N', '8th');
// planTrip ('L', '6th', '6', 'Grand Central');
// planTrip ('L', '3rd', 'N', 'Times Square');
// planTrip ('L', '3rd', 'L', '6th');
// planTrip ('L', 'Grand Central', 'L', 'Grand Central');

//
//
//
//
//
