// // MTA Lab
//
// // Objectives:
// // Apply your knowledge of Javascript to solve a real world problem.
// // Get really good at array manipulation.
//
// // Activity
// // Create a program that models a simple subway system.
// //
// // The program takes the line and stop that a user is getting on at and the line and stop that user is -
// // - getting off at and prints the journey and the total number of stops for the trip in the console:
// //
// // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// // // console.log() shows output similar to this:
// // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // // "Change at Union Square."
// // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // // "7 stops in total."
//
//
//
// // There are 3 subway lines:
// // The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// // The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// // The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// // All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example,
// // this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll -
// // - have to differentiate this when you name your stops in the arrays.)
//
// // Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// // Hints:
// // Work out how you would do it on paper first! Then start to explain that process in Javascript.
// // Get the program to work for a single line before trying to tackle multiple lines.
// // Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() -
// // - later to make it more interactive.
// // Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// // The key to the lab is finding the index positions of each stop. (hint: indexOf())
// // Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 -
// // - need to be differentiated)
//
//
// --------------------------------First Way-----------------------------------------

// const planTrip = function (firstLine, firstStop,secondLine, secondStop){
//
//   return {
//
    // N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
    // L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
    // 6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ],
    //
    // trip: function (){
    //       if (firstStop === 'Union Square') {
    //         firstLine = secondLine;
    //       }else if (secondStop === 'Union Square') {
    //         secondLine = firstLine;
    //       }
    //
    //   let startStop = this[firstLine].indexOf(firstStop);
    //   let lastStop = this[secondLine].indexOf(secondStop);
    //   let unionIndex1 = this[firstLine].indexOf('Union Square');
    //   let unionIndex2 = this[secondLine].indexOf('Union Square');
    //
    //   let totalstops = 0;
    //   let travel = [];
    //   if (firstLine === secondLine) {
    //     totalstops = Math.abs(lastStop-startStop);
    //     first = Math.min(lastStop,startStop);
    //     last = Math.max(lastStop,startStop);
    //     for (i=first; i<last+1; i++){
    //       travel.push(this[firstLine][i]);
    //     }
    //     if (startStop>lastStop){
    //       travel.reverse();
    //     }
    //     travel.shift();
    //     console.log(`You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`);
    //     console.log(`\n\n${totalstops} stops in total.`);
    //   }else{
    //     totalstops = Math.abs(startStop-unionIndex1)+Math.abs(unionIndex2-lastStop);
    //     firstS = Math.min(startStop,unionIndex1);
    //     firstE = Math.max(startStop,unionIndex1)
    //     secondS = Math.min(lastStop,unionIndex2);
    //     secondE = Math.max(lastStop,unionIndex2);
    //
    //     for (j=firstS; j<firstE+1; j++){
    //       travel.push(this[firstLine][j]);
    //     }
    //     if (startStop>unionIndex1){
    //       travel.reverse();
    //     }
    //     travel.shift();
    //     //travel.pop();
    //     console.log(`You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`);
    //     console.log(`\n\nChange at Union Sqaure.`);
    //     travel = [];
    //     if (unionIndex2<lastStop){
    //       for (k=secondS; k<secondE+1; k++){
    //         travel.push(this[secondLine][k]);
    //       }
    //     }else{
    //       for (k=secondE; k>secondS-1; k--){
    //         travel.push(this[secondLine][k]);
    //       }
    //     }
    //     travel.shift();
    //
    //     console.log(`\n\nYour journey continues through the following stops: ${travel.join(', ')}.`);
    //     console.log(`\n\n${totalstops} stops in total.`)
    //
    //   }
    //
    // }

// };
// }
//
//
//

// // --------------------------------Second Way-----------------------------------------
// //
// const planTrip = function (firstLine, firstStop,secondLine, secondStop){
//
//   return {
//
//     N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
//     L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
//     6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ],
//
//     trip: function (){
//       if (firstStop === 'Union Square') {
//         firstLine = secondLine;
//       }else if (secondStop === 'Union Square') {
//         secondLine = firstLine;
//       }
//
//       let startStop = this[firstLine].indexOf(firstStop);
//       let lastStop = this[secondLine].indexOf(secondStop);
//       let unionIndex1 = this[firstLine].indexOf('Union Square');
//       let unionIndex2 = this[secondLine].indexOf('Union Square');
//
//       let totalstops = 0;
//       let travel = [];
//       if (firstLine === secondLine) {
//         totalstops = Math.abs(lastStop-startStop);
//         first = Math.min(lastStop,startStop);
//         last = Math.max(lastStop,startStop);
//
//         travel = this[firstLine].slice(first,last+1);
//         if (startStop>lastStop){
//           travel.reverse();
//         }
//         travel.shift();
//         console.log(`You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`);
//         console.log(`\n\n${totalstops} stops in total.`);
//       }else{
//         totalstops = Math.abs(startStop-unionIndex1)+Math.abs(unionIndex2-lastStop);
//         firstS = Math.min(startStop,unionIndex1);
//         firstE = Math.max(startStop,unionIndex1)
//         secondS = Math.min(lastStop,unionIndex2);
//         secondE = Math.max(lastStop,unionIndex2);
//
//         travel = this[firstLine].slice(firstS,firstE+1)
//
//         if (startStop>unionIndex1){
//           travel.reverse();
//         }
//         travel.shift();
//         console.log(`You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`);
//         console.log(`\n\nChange at Union Sqaure.`);
//
//         travel = [];
//
//         travel = this[secondLine].slice(secondS,secondE+1);
//
//         if (unionIndex2>lastStop){
//           travel.reverse();
//         }
//         travel.shift();
//
//         console.log(`\n\nYour journey continues through the following stops: ${travel.join(', ')}.`);
//         console.log(`\n\n${totalstops} stops in total.`)
//         }
//       }
// };
// }

// --------------------------------Third Way-----------------------------------------
// let lines = {
//   N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
//   L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
//   6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ]
// };
//
// const planTrip = function (firstLine, firstStop,secondLine, secondStop){
//
//   let result = '';
//
//   let tripObj = {
//     trip: function () {
//       if (firstStop === 'Union Square') {
//         firstLine = secondLine;
//       }else if (secondStop === 'Union Square') {
//         secondLine = firstLine;
//       }
//
//       let startStop = lines[firstLine].indexOf(firstStop);
//       let lastStop = lines[secondLine].indexOf(secondStop);
//       let unionIndex1 = lines[firstLine].indexOf('Union Square');
//       let unionIndex2 = lines[secondLine].indexOf('Union Square');
//
//       let totalstops = 0;
//       let travel = [];
//       if (firstLine === secondLine) {
//
//         totalstops = Math.abs(lastStop-startStop);
//         first = Math.min(lastStop,startStop);
//         last = Math.max(lastStop,startStop);
//
//         travel = lines[firstLine].slice(first,last+1);
//         if (startStop>lastStop){
//           travel.reverse();
//         }
//         travel.shift();
//
//         let result = `You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`;
//         result = result + `\n\n${totalstops} stops in total.`;
//         return result;
//       }else{
//         totalstops = Math.abs(startStop-unionIndex1)+Math.abs(unionIndex2-lastStop);
//         firstS = Math.min(startStop,unionIndex1);
//         firstE = Math.max(startStop,unionIndex1)
//         secondS = Math.min(lastStop,unionIndex2);
//         secondE = Math.max(lastStop,unionIndex2);
//
//         travel = lines[firstLine].slice(firstS,firstE+1)
//
//         if (startStop>unionIndex1){
//           travel.reverse();
//         }
//         travel.shift();
//         let result = `You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`;
//         result = result + `\n\nChange at Union Sqaure.`;
//
//         travel = [];
//         travel = lines[secondLine].slice(secondS,secondE+1);
//
//         if (unionIndex2>lastStop){
//           travel.reverse();
//         }
//         travel.shift();
//
//         result = result + `\n\nYour journey continues through the following stops: ${travel.join(', ')}.`;
//         result = result + `\n\n${totalstops} stops in total.`;
//         return result;
//       }
//     }
//
//   }
//   return tripObj.trip();
// };
//

// --------------------------------Forth Way-----------------------------------------
// let tripPlansObj = {
//
//   // All the lines with name and name of the stops.
//   lines: {
//     N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
//     L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
//     6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ]
//   },
//
//   // The function to give the plan of the trip and the total of stops.
//   trip: function (firstLine, firstStop,secondLine, secondStop) {
//
//     // Check: if the lines existed or not.
//     // Exp: planTrip( 'West', '5th','N', 'Times Square')
//     if (!Object.keys(this.lines).includes(firstLine)) {
//       return `There is no ${firstLine} line.`
//     } else if (!Object.keys(this.lines).includes(secondLine)){
//       return `There is no ${secondLine} line.`
//     }
//
//     // check: if the stops are in the lines or not.
//     // Exp: planTrip( 'N', '34th','L', 'Times Square')
//     if (!this.lines[firstLine].includes(firstStop)) {
//       return `There is no ${firstStop} station in line ${firstLine}`;
//     } else if (!this.lines[secondLine].includes(secondStop)) {
//       return `There is no ${secondStop} station in line ${secondLine}`;
//     };
//
//     // check: if one of the stops is 'Union Square', but two different -
//     // - lines has been inputed.
//     // Exp: planTrip( 'N', 'Union Square','L', 'Times Square')
//     if (firstStop === 'Union Square') {
//       firstLine = secondLine;
//     }else if (secondStop === 'Union Square') {
//       secondLine = firstLine;
//     }
//
//     // Structure of the function.
//     let result = '';
//     let startStop = this.lines[firstLine].indexOf(firstStop);
//     let lastStop = this.lines[secondLine].indexOf(secondStop);
//     let unionIndex1 = this.lines[firstLine].indexOf('Union Square');
//     let unionIndex2 = this.lines[secondLine].indexOf('Union Square');
//
//     let totalstops = 0;
//     let travel = [];
//
//     // Check if the trip is inside one of the lines.
//     if (firstLine === secondLine) {
//
//       totalstops = Math.abs(lastStop-startStop);
//       first = Math.min(lastStop,startStop);
//       last = Math.max(lastStop,startStop);
//
//       travel = this.lines[firstLine].slice(first,last+1);
//       if (startStop>lastStop){
//         travel.reverse();
//       }
//       travel.shift();
//
//       let result = `You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`;
//       result = result + `\n\n${totalstops} stops in total.`;
//       return result;
//     }else{
//
//       // if changing the line is needed.
//       totalstops = Math.abs(startStop-unionIndex1)+Math.abs(unionIndex2-lastStop);
//       firstS = Math.min(startStop,unionIndex1);
//       firstE = Math.max(startStop,unionIndex1)
//       secondS = Math.min(lastStop,unionIndex2);
//       secondE = Math.max(lastStop,unionIndex2);
//
//       travel = this.lines[firstLine].slice(firstS,firstE+1)
//
//       if (startStop>unionIndex1){
//         travel.reverse();
//       }
//       travel.shift();
//       let result = `You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`;
//       result = result + `\n\nChange at Union Sqaure.`;
//
//       travel = [];
//       travel = this.lines[secondLine].slice(secondS,secondE+1);
//
//       if (unionIndex2>lastStop){
//         travel.reverse();
//       }
//       travel.shift();
//
//       result = result + `\n\nYour journey continues through the following stops: ${travel.join(', ')}.`;
//       result = result + `\n\n${totalstops} stops in total.`;
//       return result;
//     }
//   },
//
//   // if we want to add more stops to one of the existed lines.
//   addStations: function (line,name) {
//     this.lines[line].push(name);
//     return `${name} station has been added to ${line} line.`;
//   },
//
//   // if we want to add a new line.
//   addLine: function (lineName,stationsArray) {
//     this.lines[lineName] = stationsArray;
//   }
//
// }
//
//
// const planTrip = function (firstLine, firstStop,secondLine, secondStop){
//   return tripPlansObj.trip(firstLine, firstStop,secondLine, secondStop);
// };

// -------------------------------- Fifth Way  -----------------------------------------

let tripPlansObj = {

  // All the lines with name and name of the stops.
  lines: {
    N: [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
    L: [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
    6: [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ]
  },


  // The function to give the plan of the trip and the total of stops.
  // * Union Station between the lines can be passed. (As default = 'Union Square')
  trip: function (firstLine, firstStop, secondLine, secondStop, unionStation = 'Union Square') {

    // Check: if the lines existed or not.
    // Exp: planTrip( 'West', '5th','N', 'Times Square')
    if (!Object.keys(this.lines).includes(firstLine)) {
      return `There is no ${firstLine} line.`
    } else if (!Object.keys(this.lines).includes(secondLine)){
      return `There is no ${secondLine} line.`
    }

    // check: if the stops are in the lines or not.
    // Exp: planTrip( 'N', '34th','L', 'Times Square')
    if (!this.lines[firstLine].includes(firstStop)) {
      return `There is no ${firstStop} station in line ${firstLine}`;
    } else if (!this.lines[secondLine].includes(secondStop)) {
      return `There is no ${secondStop} station in line ${secondLine}`;
    };

    // check: if one of the stops is 'Union Square', but two different -
    // - lines has been inputed.
    // Exp: planTrip( 'N', 'Union Square','L', 'Times Square')
    if (firstStop === unionStation) {
      firstLine = secondLine;
    }else if (secondStop === unionStation) {
      secondLine = firstLine;
    }

    // Structure of the function.
    let result = '';
    let startStop = this.lines[firstLine].indexOf(firstStop);
    let lastStop = this.lines[secondLine].indexOf(secondStop);
    let unionIndex1 = this.lines[firstLine].indexOf(unionStation);
    let unionIndex2 = this.lines[secondLine].indexOf(unionStation);

    let totalstops = 0;
    let travel = [];

    // Check if the trip is inside one of the lines.
    if (firstLine === secondLine) {

      totalstops = Math.abs(lastStop-startStop);
      first = Math.min(lastStop,startStop);
      last = Math.max(lastStop,startStop);

      travel = this.lines[firstLine].slice(first,last+1);
      if (startStop>lastStop){
        travel.reverse();
      }
      travel.shift();

      let result = `You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`;
      result = result + `\n\n${totalstops} stops in total.`;
      return result;
    }else{

      // if changing the line is needed.
      totalstops = Math.abs(startStop-unionIndex1)+Math.abs(unionIndex2-lastStop);
      firstS = Math.min(startStop,unionIndex1);
      firstE = Math.max(startStop,unionIndex1)
      secondS = Math.min(lastStop,unionIndex2);
      secondE = Math.max(lastStop,unionIndex2);

      travel = this.lines[firstLine].slice(firstS,firstE+1)

      if (startStop>unionIndex1){
        travel.reverse();
      }
      travel.shift();
      let result = `You must travel through the following stops on the ${firstLine} line: ${travel.join(', ')}.`;
      result = result + `\n\nChange at ${unionStation}.`;

      travel = [];
      travel = this.lines[secondLine].slice(secondS,secondE+1);

      if (unionIndex2>lastStop){
        travel.reverse();
      }
      travel.shift();

      result = result + `\n\nYour journey continues through the following stops: ${travel.join(', ')}.`;
      result = result + `\n\n${totalstops} stops in total.`;
      return result;
    }
  },

  // if we want to add more stops to one of the existed lines.
  addStations: function (line,name,whereToAddIndex) {
    this.lines[line].splice(whereToAddIndex,0,name);
    return `${name} station has been added to ${line} line.`;
  },

  // if we want to add a new line.
  addLine: function (lineName,stationsArray) {
    this.lines[lineName] = stationsArray;
  }

}


const planTrip = function (firstLine, firstStop, secondLine, secondStop, unionStation){
  return tripPlansObj.trip(firstLine, firstStop, secondLine, secondStop, unionStation);
};
