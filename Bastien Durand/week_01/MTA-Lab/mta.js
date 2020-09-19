// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.


// #### Activity
// * Create a program that models a simple subway system.


// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:



// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.


// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

//Array of 3 seperate lines called N, L & S.
//Line1 = Times Square, 34th, 28th, 23rd, Union Square, and 8th
//Line2 = 8th, 6th, Union Square, 3rd, and 1st
//Line3 = Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//Remember all lines pass through Union Square & no other interaction points
//Tell the user the number of stops and the stops in order that will pass through or change at

const trainLines = {
  line1 : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  line2 : ['8th', '6th', 'Union Square', '3rd', '1st'],
  line3 : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


const train = function (startLine, start, endLine, end) {

let travelThrough = 'You must travel through the following stops on the'

//line1 'times square', line3, 33rd
if (startLine !== endLine) {
  train(startLine, start, startLine, 'Union Square');
  console.log(`Changing at lines at Union Square`)
  train(endLine, 'Union Square', endLine, end)
  if( end === end) {
    console.log('You have arrived')
    return;
  }
  }
// train(trainLines.line1, 'Times Square', trainLines.line3, '33rd')
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

const startIndex = startLine.indexOf(start)
const endIndex = endLine.indexOf(end)


const totalStops = startIndex + (endIndex - 1);
//
// const passThrough = []
// passThrough.push(totalStops)
// console.log(passThrough)


if (startIndex !== endIndex) {
  console.log(`${totalStops} stops in total.`)
}

console.log(Object.keys(trainLines).length)

//console.log(totalStops % trainLines )


let initial = start

let lineTotal = ''

  if(endIndex < startIndex) {

    for (i = startIndex; i >= endIndex; i--) {

      if(startIndex === i) {
        console.log(`Leaving ${startLine[i]} `) //index of ${i}
      }
        console.log(`Traveling through ${startLine[i] += lineTotal} `) //index of ${i}

      if(i === endIndex) {
        console.log(`arrived at ${startLine[i]} from ${initial}`)
      }
    }
  } else {

  for (i = startIndex; i <= endIndex; i++) {

    if(startIndex === i) {
      console.log(`Leaving ${startLine[i]} `) //index of ${i}
    }
      console.log(`Traveling through ${startLine[i] += lineTotal}`) //index of ${i

    if(i === endIndex) {
      console.log(`arrived at ${startLine[i]} from ${initial}`)
    }
  }

}
  }

train(trainLines.line1, 'Times Square', trainLines.line3, '33rd')




// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
