// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

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

const subway = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  details: [],
  planTrip: function (
    initialStation,
    initialStop,
    destinationStation,
    destinationStop
  ) {
    this.details.length = 0;
    const startStation = this[initialStation];
    const firstStop = startStation.indexOf(initialStop);
    const endStation = this[destinationStation];
    const lastStop = endStation.indexOf(destinationStop);
    let tripCounter = 0;
    if (startStation.includes(initialStop)) {
      console.log(
        `Location is valid, ${initialStop}'s index is ${firstStop} on line ${initialStation}`
      );
    } else {
      console.log(`Location invald.  Exiting`);
      return;
    }
    if (endStation.includes(destinationStop)) {
      console.log(
        `Destination is valid, ${destinationStop}'s index is ${lastStop} on line ${destinationStation}`
      );
    } else {
      console.log(`Destination invalid.  Exiting`);
      return;
    }
    // map out the first leg of the journey
    if (firstStop !== "Union Square") {
      let unionSquare = startStation.indexOf("Union Square"); // initialise Union Square's index
      console.log(
        `Union Square is at index ${unionSquare} on your initial line`
      );
      if (firstStop > unionSquare) {
        for (let i = firstStop; i >= unionSquare; i--) {
          if (startStation[i] === "Union Square") {
            this.details.push("Change at Union Square");
            continue; // dont put Union Square in twice
          }
          this.details.push(startStation[i]);
        }
        tripCounter += firstStop - unionSquare;
      } else {
        for (let i = firstStop; i <= unionSquare; i++) {
          if (startStation[i] === "Union Square") {
            this.details.push("Change at Union Square");
            continue;
          }
          this.details.push(startStation[i]);
        }
        tripCounter += unionSquare - firstStop;
      }
    } // map out second leg of the journey
    if (lastStop !== "Union Square") {
      let unionSquare = endStation.indexOf("Union Square");
      console.log(
        `Union Square is at index ${unionSquare} on your destination line`
      );
      if (lastStop > unionSquare) {
        for (let i = lastStop; i >= unionSquare; i--) {
          if (endStation[i] === "Union Square") {
            continue;
          }
          this.details.push(endStation[i]);
        }
        tripCounter += lastStop - unionSquare;
      } else {
        for (let i = lastStop; i <= unionSquare; i++) {
          if (endStation[i] === "Union Square") {
            continue;
          }
          this.details.push(endStation[unionSquare - 1 - i]);
        }
        tripCounter += unionSquare - lastStop;
      }
    }
    return `Your journey from ${initialStop} station on line ${initialStation} includes : ${this.details.join(
      ", "
    )}`;
  },
};
