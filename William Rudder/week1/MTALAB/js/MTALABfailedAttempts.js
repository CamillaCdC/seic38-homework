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
// const line1 = [
//   "Times Square", "34th", "28th", "23rd", "Union Square", "8th"
// ]
//
// lLine: ["Times Square", "8th", "6th", "Union Square", "3rd", "1st"],
//
// sixline:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
// }

const lines = {
  nLine: ["Times Square Nline", "34th", "28th Nline", "23rd Nline", "Union Square Nline", "8th"],
  lLine: ["Times Square Lline", "8", "6th", "Union Square Lline", "3rd", "1st"],
  sixline: ["Grand Central", "33rd", "28th sixline", "23", "Union Square sixline", "Astor Place"]

}

// working!!
// //const planTrip = function(start, end) {
//   var startIndex = lines.nLine.indexOf(start)
//   var endIndex = lines.nLine.indexOf(end)
//   for (var i = startIndex; i <= endIndex; i++) {
//     console.log(lines.nLine[i]) }
//   if (lines.nLine[i] === lines.nLine[4]) {
//     console.log("at union")
//   }
// }


// const planTrip = function(start, end) {
//   var startIndex = lines.nLine.indexOf(start)
//   var endIndex = lines.nLine.indexOf(end)
//   for (var i = startIndex; i <= endIndex; i++) {
//     console.log(lines.nLine[i]) }  // this means itll log all sotps between start and end on the n line of given parameters
//     //maybe try break it here
//   } if (end != endIndex) {
//   // console log amount of stops from 'start' input to union square (loop for this?)
//     console.log("get off at ")
//   } // then i want to run the other line to check what index the end position is at (i will need 4 arguments for this??) {
//     var startIndex2 = lines.lLine.indexOf(start)
//     var endIndex2 = lines.lLine.indexOf(end)
//       for (var i2 = startIndex2; i2 <= endIndex2; i2++) {
//         console.log(`${lines.nLine[i]} + ${lines.lLine[i2]}`)
//       }
//     }
//   }

//
// planTrip("34th", "3rd")

var stopsCount = 0

function getStopString (line, startStop, endStop) {
  var lineArray = lines[line];
  var stopString = "";
  var startStationIndex = lineArray.indexOf(startStop);
  var endStationIndex = lineArray.indexOf(endStop);
  if (startStationIndex < endStationIndex) {
    for (var i = startStationIndex; i <= endStationIndex; i++){
      stopString += lineArray[i] + ", ";
      stopsCount++;
    }
  }
  return stopsString;
}

getStopString("nLine", "34th", "8th")
//planTrip('34th', '8th');
// failed attempt #58304
// const planTrip = function(start, stationStart, endStation, end) {
//
//   var stationStart = Object.keys(lines)
//   var endStation = Object.keys(lines)
//   var startIndex = lines.stationStart.indexOf(start)
//   var endIndex = lines.endStation.indexOf(end)
//   for (var i = startIndex; i <= endIndex; i++) {
//     console.log(lines.nLine[i])
//   if (lines.nLine[i] === lines.nLine[4]) {
//     console.log("change trains ")
//   }
//   }
// }

//
// planTrip('34th', 'nLine', 'nLine', '8th');



// need a function for getting the stops
//need a function fro plantrip


//throw will stop the statement e.g. if line1 ===
// const planTrip = function(start, end) {
//   var startIndex = indexOf(line1)
//   var endIndex = line1.nLine.indexOf(end)
//   for (var i = startIndex; i <= endIndex; i++) {
//     console.log(line1[i])
//   }
// }
// planTrip('34th', '8th');

//
// const planTrip2 = function (start, end) {
//
//   for (var i = startIndex; i <= endIndex; i++) {
//     console.log(line1[i])
//   }
// }
// planTrip2('8th', '6th');

// want to get from line1 to the stop given
// const stationStartToFinish = function (startLine, startStop, stopLine, stopStop) {
//   for (let i = 0; i < trainLineNLine.length; i++) {
//     if (lineChoice === trainLineNLine[i]) {
//       console.log("user is taking the N - Line")
//     } else if {
//       for (let i2 = 0; i2 < trainLineLLine.length; i++) {
//         if ( lineChoice === trainLineLLine[i2]) {
//           console.log("user is taking the L - line");
//         }
//       }
//     }
//   }
// }
// whichLine("3th")
//


// if youre coming from timesqaure to 23rd
// start at index of first stop  end at index of second
// could create a new array that stores all the stops
// index end - index start = how many stops itll take


//planTrip('N', 'Times Square', '6', '33rd');
// N = Line  TRAVELING on //  time square = stop youre getting on from // 6 indicated the Line you need to change onto to get to the destination // 33rd indicates the stop you need to get off at.
