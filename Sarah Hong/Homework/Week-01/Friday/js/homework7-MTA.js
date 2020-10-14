// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
// * The program takes the line and stop that a user is getting on at, and the line and stop that user is getting off at.
// * Print the journey and the total number of stops for the trip in the console:
//
//====JAVASCRIPT
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
//====THERE ARE THREE SUBWAY LINES:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at UNION SQUARE, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
//   * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

const route = {
  NLine: [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
  LLine:[ '8th', '6th', 'Union Square', '3rd', '1st' ],
  SLine: [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astro Place' ]
};

const planTrip = function ( line, startStation, stopLine, endStation ) {
  const startLine = route[ line ];
  const startIndex = startLine.indexOf( startStation ); // startLine.indexOf() = finds the start index from the start line variable - in this case 'startStation' = Times Square.
  const endLine = route [ stopLine ];
  const endIndex = endLine.indexOf( endStation ); // endLine.indexOf() = finds the ending index of end line variable - in this case (endStation) = '23rd'.
  let stops = [ ];
  if ( startLine === endLine ) {
    // single line trip - true
    if ( startIndex < endIndex ) {
      // single line forward
      stops = startLine.slice( startIndex, endIndex + 1) // the aim here is to start from a station on a subway line, and find a way to get from one stop to another stop. You would then use .slice() from startLine feeding only startIndex and endIndex. Because .slice() returns and 'up to but not equal to' value, the end of endIndex requires a + 1 to get '23rd'.
    } else {
      // single line - backwards
      stops = startLine.slice( endIndex, startIndex + 1 ).reverse();// .reverse() reverses an array in place. A method that doesnt requires anything between the ().
    }
    console.log( `You must travel through the following stops on the ${ line }: ${ stops }` );
  } else {
    // transfer line.
    let stopStage1 = [ ]; // first line on start station.
    let stopStage2 = [ ]; // second (transfer) line on end station.
    let startLineIntersectingIndex = startLine.indexOf( 'Union Square' ); // key = first line stopping at intersecting station, union square.
    let endLineIntersectingIndex = endLine.indexOf( 'Union Square' );// key = second line starting at intersecting station, union square.
    if ( startIndex < startLineIntersectingIndex ) {
      // transfer stage1 forward to union.
      stopStage1 = startLine.slice( startIndex, startLineIntersectingIndex + 1)
    } else {
      // transfer stage1 reverse to union.
      stopStage1 = startLine.slice( startLineIntersectingIndex , startIndex + 1 ).reverse();
    }
    console.log( `You must travel through the following stops on the ${ line }: ${ stopStage1 }`);
    console.log( `Change at Union Square` );

    // stage2 same logic as above - forward / backward
    if ( endLineIntersectingIndex < endIndex ) {
      // transfer stage2 forward to union.
      stopStage2 = endLine.slice( endLineIntersectingIndex, endIndex + 1 )
    } else {
      // transfer stage2 reverse to union.
      stopStage2 = endLine.slice( endIndex, endLineIntersectingIndex + 1 ).reverse();
    }
    console.log( `Your journey continues on the following stops through ${ stopLine }: ${ stopStage2 }`);
    stops = stopStage1.concat( stopStage2 ); //combined 1st line route and 2nd line route.
  }
};

planTrip( 'NLine', '34th', 'NLine', 'Union Square' );

planTrip( 'NLine', 'Times Square', 'NLine', '23rd' ); // forward - single line

planTrip ( 'NLine', '8th', 'NLine', '28th' ); // backwards - single line

planTrip ( 'LLine', '8th', 'SLine', 'Astro Place' ); // transfer forward lline to SLine

planTrip ( 'LLine', '1st', 'SLine', '33rd' );// transfer backwards.

planTrip ( 'SLine', 'Grand Central', 'LLine', '8th' );

//====SHOWS OUTPUT SIMILAR TO THIS:
//console.log( `You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.`)
//console.log( `Change at Union Square.`)
//console.log( `Your journey continues through the following stops: 23rd, 28th, 33rd.`)
//console.log( `7 stops in total.`)

//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
