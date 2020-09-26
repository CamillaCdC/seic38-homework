// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
//
//


// COLLECT DATA FROM USER
// WELCOME USER MESSAGE
const trainLine = `/n
                        HELLO! WHERE ARE YOU GOING TO? \n
                                  TRAIN LINE\n
                           -------- N LINE -------\n
          8th -> Union Sqaure -> 23rd -> 28th -> 34th -> Time Square\n

                           -------- L LINE -------\n
                    8th -> 6th -> Union Sqaure -> 3rd -> 1st\n

                           -------- 6 LINE -------\n
              Astor Place -> 23rd -> 28th -> 33rd -> Grand Cental\n\n\n

                `;
console.log(trainLine);


// Cental of train station
//Train Line --> Dictionary of Platform ---> Stops ---> location name
const mapping =  {
  nLine : ['8th', 'Union Sqaure','23rd ', '28th', '34th' , 'Time sqaure'],  //Object key Train Line
  lLine : [ '8th', '6th', 'Union Square', '3rd', '1st' ], // [Obeject : array]
  sixLine : ['Astor Place','Union Sqaure','23rd', '28th', '33rd', 'Grand Central']
};


// var trainLine = (Object.keys(unionSqaure)); // return all train line
// var returnOne = (Object.values(unionSqaure)); // return all platform
// var returnTwo = (Object.values(unionSqaure)[0]); // return selected index platform []
// var returnThree = (Object.values(returnTwo)[0]); // return selected platform value
//
// console.table(unionSqaure)
// console.log(trainLine);
// console.log(returnOne);
// console.log(returnTwo);
// console.log(returnThree);


// Create a program that models a simple subway system.
const route = {
  nLine : ['8th', 'Union Square','23rd ', '28th', '34th' , 'Time square'],
  lLine : [ '8th', '6th', 'Union Square', '3rd', '1st' ],
  sixLine : ['Astor Place','Union Square','23rd', '28th', '33rd', 'Grand Central']
};

//Load function
var tripPlanner = function(startTrainLine,startStop,stopTrainLine,stopStop) {
  var startLine = route[startTrainLine];
  var startStation = startLine.indexOf(startStop);
  var stopLine = route[stopTrainLine];
  var endStation = stopLine.indexOf(stopStop);
  let replayUser = [ ];
  if (startLine === stopLine) {
    if (startStation < endStation) {
      replayUser = startLine.slice(startStation, endStation +1)
    } else {
      replayUser = startLine.slice(endStation, startStation + s1).reverse();
    }
    console.log(`You must travel through the following stops on the ${startTrainLine}: ${replayUser}`);
 } else {
   var transfer1 = [ ];
   var transfer2 = [ ];
   var startIntersecting = startLine.indexOf('Union Square');
   var endIntersecting = stopLine.indexOf('Union Square');
   if (startStation < startIntersecting) {
     transfer1 = startLine.slice(startStation, startIntersecting +1)
   } else {
     transfer1 = startLine.slice(startIntersecting, startStation +1).reverse();
   }
   console.log(`You must travel through the following stops on the ${startTrainLine}: ${transfer1}`);
   console.log(`Change at Union Square`);

   if (endIntersecting < endStation) {
     transfer2 = stopLine.slice(endStation, endIntersecting +1)
   } else {
     transfer2 = stopLine.slice(endStation, endIntersecting).reverse();
   }
   console.log(`Your journey continues on the following stops through ${stopTrainLine}: ${transfer2}`);
   replayUser = transfer1.concat(transfer2);
 }
};

// Ask user
var startTrainLine = prompt("Enter your start Train Line -> ")
var startStop = prompt("Enter your start Location -> ")
var stopTrainLine = prompt("Enter your destination Train Line -> ");
var stopStop = prompt("Enter your destination location")
console.log(tripPlanner(startTrainLine,startStop,stopTrainLine,stopStop))
