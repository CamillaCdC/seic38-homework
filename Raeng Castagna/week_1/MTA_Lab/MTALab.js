// ## TO DO
// Put oringal arrays into an object, this way you can pull out the keys to display on console

// ## DOING
// Create Console Log to display answers - stuck on this part! ***

// ## DONE
// Display each train line in an array
// Display the stations between a start and stop paramater for one line, going forwards. Using a for loop and indexOf
// Create a new array to show the journey within the function to return, using push()
// Display the stations between a start and stop paramater for one line, going backwards. Use reverse(), if else statement??
// Combine forward and backward display of trip for one line
// create global variable to identify junction point.
// Combine lines - possible if else/another function? Union Square as known junction to continue journey. Going forwards
// Combine lines going backwards
// Combine all options into one function
// Made it dry

// ## Display each train line in an array
const NLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const LLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
const sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

const N = NLine;
const L = LLine;
const six = sixLine;

// ## Created working function for one line going forwards
// const planTrip = function (start, stop) {
//   const stops = [];
//   for (let i = NLine.indexOf(start); i <= NLine.indexOf(stop); i++) {
//     stops.push(NLine[i]);
//   };
//   return (stops);
// };

// ## Formated above to make the function universal
// const planTrip = function (startLine, startStation, endLine, endStation) {
//  const start = startLine.indexOf(startStation);
//  const end = endLine.indexOf(endStation);
//  const stops = [];
//  for (let i = start; i <= end; i++) {
//    stops.push(startLine[i]);
//  };
//   return stops;
// };

// ## Display the stations between a start and stop paramater for one line, going backwards.
// Working but only for reverse!! Displays empty arry forward
// https://www.techiedelight.com/loop-through-array-backwards-javascript/

// const planTrip = function (startLine, startStation, endLine, endStation) {
//  const start = startLine.indexOf(startStation);
//  const end = endLine.indexOf(endStation);
//  const stops = [];
//
// for (let i = start -1; i >= end; i--) {
//    stops.push(startLine[i]);
//  };
//  return stops;
// };

// ## Combine forward and backward display of trip in array for one line
// const planTrip = function (startLine, startStation, endLine, endStation) {
//   const start = startLine.indexOf(startStation);
//   const end = endLine.indexOf(endStation);
//   const stops = [];
//
//   if (end < start) {
//     for (let i = start -1; i >= end; i--) {
//        stops.push(startLine[i]);
//      };
//   } else {
//       for (let i = start; i <= end; i++) {
//         stops.push(startLine[i]);
//       };
//   };
//  return stops;
// };

// ## Combine lines - possible if else/another function? Union Square as known junction to continue journey.
// if startLine !== endLine
// create global variable to identify junction point.
// list each lines stops from end/start to union.

// const junction = 'Union Square';
//
// const planTrip = function (startLine, startStation, endLine, endStation) {
//   const start = startLine.indexOf(startStation);
//   const end = endLine.indexOf(endStation);
//
//   const startInterchange = (startLine.indexOf(junction)); // this returns boolean
//   const endInterchange = (endLine.indexOf(junction));
//   const stops = [];
//
//   if (startLine !== endLine) {
//     // find stops start to interchange
//       for (let i = start; i < startInterchange; i++) {
//         stops.push(`Start: ${startLine[i]}`);
//       };
//       // find stops interchange to end
//       for (let i = endInterchange; i <= end; i++) {
//         stops.push(`End: ${endLine[i]}`);
//       };
//   };
//  return stops;
// };

// ## Combine lines going backwards
// const junction = 'Union Square';
//
// const planTrip = function (startLine, startStation, endLine, endStation) {
//   const start = startLine.indexOf(startStation);
//   const end = endLine.indexOf(endStation);
//
//   const startInterchange = (startLine.indexOf(junction));
//   const endInterchange = (endLine.indexOf(junction));
//   const stops = [];
//
//   if (startLine !== endLine) {
//     // if start greater than junction and end is less than junction
//     if (start > startInterchange && end < endInterchange) {
//       for (let i = start - 1; i >= startInterchange; i--) {
//         stops.push(`Start: ${startLine[i]}`);
//         console.log('1st start greater than junction')
//       };
//       for (let i = endInterchange -1; i >= end; i--) {
//         stops.push(`End: ${endLine[i]}`);
//         console.log('2nd end less than junction')
//       };
//     };
//     // if start is greater than juction and end is less than juction
//     if (start > startInterchange && end > endInterchange) {
//       for (let i = start - 1; i > startInterchange; i--) {
//         stops.push(`Start: ${startLine[i]}`);
//         console.log('3rd start greater than junction')
//       };
//       for (let i = endInterchange; i <= end; i++) {
//         stops.push(`End: ${endLine[i]}`);
//         console.log('4th end greater than junction')
//       };
//     };
//     // if start is less than junction and end is less than juction
//     if (start < startInterchange && end < endInterchange) {
//       for (let i = start; i < startInterchange; i++) {
//         stops.push(`Start: ${startLine[i]}`);
//         console.log('5th start less than junction')
//       };
//       for (let i = endInterchange -1; i >= end; i--) {
//         stops.push(`End: ${endLine[i]}`);
//         console.log('6th end less than junction')
//       };
//     };
//     if (start > startInterchange && end > endInterchange) {
//       for (let i = start; i < startInterchange; i++) {
//         stops.push(`Start: ${startLine[i]}`);
//         console.log('7th start less than junction')
//       };
//       // find stops interchange to end
//       for (let i = endInterchange; i <= end; i++) {
//         stops.push(`End: ${endLine[i]}`);
//         console.log('8th junction greter than junction')
//       };
//     };
//   } else {
//     if (end < start) {
//         for (let i = start -1; i >= end; i--) {
//            stops.push(startLine[i]);
//          };
//       } else {
//           for (let i = start; i <= end; i++) {
//             stops.push(startLine[i]);
//           };
//       };
//   };
//  return stops;
// };

// ## Make it DRY
const junction = 'Union Square';

const planTrip = function (startLine, startStation, endLine, endStation) {
  const start = startLine.indexOf(startStation);
  const end = endLine.indexOf(endStation);

  const startInterchange = (startLine.indexOf(junction));
  const endInterchange = (endLine.indexOf(junction));
  const stops = [];

  if (startLine !== endLine) {
    if (start > startInterchange) {
      for (let i = start - 1; i >= startInterchange; i--) {
        stops.push(`Start: ${startLine[i]}`);
        console.log('start greater junction')
      };
    };
    if (start < startInterchange) {
      for (let i = start; i <= startInterchange; i++) {
        stops.push(`Start: ${startLine[i]}`);
        console.log('start less than junction')
      };
    };
    if (end > endInterchange) {
      for (let i = endInterchange + 1; i <= end; i++) {
        stops.push(`End: ${endLine[i]}`);
        console.log('end greater than junction')
      };
    };
    if (end < endInterchange) {
      for (let i = endInterchange -1; i >= end; i--) {
        stops.push(`End: ${endLine[i]}`);
        console.log('end less than junction')
      };
    };
  } else {
    if (end < start) {
        for (let i = start -1; i >= end; i--) {
           stops.push(startLine[i]);
         };
      } else {
          for (let i = start; i <= end; i++) {
            stops.push(startLine[i]);
          };
      };
  };
  console.log(`You must travel through the following stops on the ${startStation}: ${stops}`);
  // ****** stuck at console.log!!! unsure how to pass the name of a variable?? Could convert to string but not sure if this this makes it reusable
 return stops;
};

// planTrip('N', '34th', 'N', 'Union Square');
// planTrip('N', 'Times Square', '6', '33rd');

// Workings for reverse!
  // Object.keys(b).reverse().forEach(function(index) {
  //   stops.push(a[index]);
  // })

    // for (let i = b; i <= d; i++) {
    //   d.reduceRight().stops.push(a[i]);
    // };

      // Object.keys(a).reverse()
      // .for(let i = b; i <= d; i++) {
      //   stops.push(a[i]);
      // };
