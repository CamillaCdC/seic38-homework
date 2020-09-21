console.log('is this on?');

// *** Outstanding ***
// Line Name 17 and 115
// Create DRY index function
// log only one line of results from for loops
// If typo in prompt refresh page

let nLine = ['Time Square', '34th', '28th on N', '23rd on N', 'Union Square', '8th on N'];
let lLine = ['8th on L', '6th', 'Union Square', '3rd', '1st'];
let sixthLine =['Grand Central', '33rd', '28th on 6th', '23rd on 6th', 'Union Square', 'Astor Place'];

//--------------------------------------- Prompt Selection -------------------------------------------

let startLine = [];
let startStation = [];
let stopLine = [];
let stopStation = [];

const line = function (name) {
// get name of start line
}

const userStop = function () {
    stopLine = prompt('Enter the line your trip will finish on e.g. N Line, L Line or 6th Line');
      if (stopLine === "N Line") {
         stopLine = nLine;
         stopStation = prompt(`Enter a station on the N Line e.g. ${nLine}`);
       } else if (stopLine === "L Line") {
         stopLine = lLine;
         stopStation = prompt(`Enter a station on the L Line e.g. ${lLine}`);
       } else if (stopLine === "6th Line") {
         stopLine = sixthLine;
         stopStation = prompt(`Enter a station on the 6th Line e.g. ${sixthLine}`);
       } else {
         alert('That does not exist, dont be a pest!');
       }
}

const userStart = function () {
    startLine = prompt('Enter a start line e.g. N Line, L Line or 6th Line');
      if (startLine === "N Line") {
         startLine = nLine;
         startStation = prompt(`Enter a station on the N Line e.g. ${nLine}`);
         userStop();
       } else if (startLine === "L Line") {
         startLine = lLine;
         startStation = prompt(`Enter a station on the L Line e.g. ${lLine}`);
         userStop();
       } else if (startLine === "6th Line") {
         startLine = sixthLine;
         startStation = prompt(`Enter a station on the 6th Line e.g. ${sixthLine}`);
         userStop();
       } else {
         alert('That does not exist, dont be a pest!');
       }
}
userStart();

//----------------------------------------- Trip Plan ----------------------------------------------

let indexStart = '';
let indexChange = '';
let indexChange2 = '';
let indexStop = '';
let result = '';

const planTrip = function (line1, stop1, line2, stop2){

  indexStart = line1.indexOf(stop1);            // gets index of start station
  indexChange = line1.indexOf('Union Square');  // gets index of change on start line
  indexChange2 = line2.indexOf('Union Square'); // gets index of change on stop line
  indexStop = line2.indexOf(stop2);             // gets inddex of stop line

  const calc = function () {
    const firstLeg = indexChange - indexStart;
    const secondLeg = indexStop - indexChange2;
    result = firstLeg + secondLeg;
  }

  if (indexStart < indexChange && indexStop > indexChange2) {
    indexStart = line1.indexOf(stop1);
    indexChange = line1.indexOf('Union Square');
    indexChange2 = line2.indexOf('Union Square');
    indexStop = line2.indexOf(stop2);
    calc();
    } else if (indexStart > indexChange && indexStop > indexChange2) {
    line1 = line1.reverse();
    indexStart = line1.indexOf(stop1);
    indexChange = line1.indexOf('Union Square');
    indexChange2 = line2.indexOf('Union Square');
    indexStop = line2.indexOf(stop2);
    calc();
    } else if (indexStart < indexChange && indexStop < indexChange2) {
    line1 = line1.reverse();
    line2 = line2.reverse();
    indexStart = line1.indexOf(stop1);
    indexChange = line1.indexOf('Union Square');
    indexChange2 = line2.indexOf('Union Square');
    indexStop = line2.indexOf(stop2);
    calc();
    } else if (indexStart > indexChange && indexStop < indexChange2) {
    line1 = line1.reverse();
    line2 = line2.reverse();
    indexStart = line1.indexOf(stop1);
    indexChange = line1.indexOf('Union Square');
    indexChange2 = line2.indexOf('Union Square');
    indexStop = line2.indexOf(stop2);
    calc();
    }

  let res1 = [];
    for (let i = indexStart; i < indexChange; i++) {
      res1.push(line1[i]);
      console.log(`You must travel through the following stops ${"Line Name"}: ${res1}`);
    }
    if (indexChange > 0){
      console.log("Change at Union Square!");
    }
    let res2 = '';
    for (let x = indexChange2; x <= indexStop; x++) {
      res2 += line2[x] + ', ';
      console.log(`Your journey continues through the following stops: ${res2}`);
    }
}
planTrip(startLine, startStation, stopLine, stopStation);
console.log(`${result} stops in total`);


//****************************************** The End ********************************************//
