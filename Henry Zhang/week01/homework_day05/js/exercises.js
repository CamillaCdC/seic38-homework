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

const routeN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const route6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
const routeL = ['8th', '6th', 'Union Square', '3rd', '1st'];

// solving problem in the same line
const routeSolving = function (route,a, b) {

    let stops = 0;
    let startIndex = 0;
    let endIndex =0;
    let newRoute = [];  // store stops

    for (i = 0; i < route.length; i++) {
        if (route[i] === a) {
            startIndex = i;
            console.log(route[i]);
        }
        if (route[i] === b) {
            endIndex = i;
            console.log(route[i]);
            stops = endIndex - startIndex;
            console.log(stops);
            newRoute = route.slice(startIndex + 1, endIndex + 1);
            console.log(newRoute);
        }
    }

    // return as many as you want
    return {
        stopNum: stops,
        newArr: newRoute,
        endIndex: endIndex,
        startIndex: startIndex,
        name: route,
        intersection: newRoute.indexOf('Union Square')
    };



    // console.log(`You must travel through the following stops on the ${newRoute} line: ${newRoute}`);
    //
    // console.log(`Change at Union Square.`);
    //
    // console.log(`Your journey continues through the following stops: ${secondHalfRoute}.`);
    //
    // console.log(`${stops} stops in total.`);
    // return newRoute;


}

const planTrip = function ( r1, s, r2, e ){
    let route = [];
    let obj = {};
// the same route
    if (r1 === r2) {
        route = r1;
        obj = routeSolving(route, s, e);

        console.log(`You must travel through the following stops on the ${obj.name} line: ${obj.newArr}`);
        console.log(`${obj.stopNum} stops in total.`);
// different route
    }else {
        // first part
        const intersection1 = r1.indexOf('Union Square');
        const firstHalfRoute = r1.slice(0, intersection1 + 1);
        // second part
        const intersection2 = r2.indexOf('Union Square');
        const secondHalfRoute = r2.slice(intersection2 + 1);
        // new route
        route = firstHalfRoute.concat(secondHalfRoute);

        obj = routeSolving (route, s, e);

        if (obj.newArr.length >= obj.intersection){

            console.log(`You must travel through the following stops on the ${ r1 } line: ${ obj.newArr.slice(0, obj.intersection +1)}`);

            console.log(`Change at Union Square.`);

            console.log(`Your journey continues through the following stops: ${obj.newArr.slice(obj.intersection + 1)}.`);

            console.log(`${obj.stopNum} stops in total.`);
        }
    }
}

planTrip (route6, '33rd', routeN, '8th');
planTrip (routeL, '6th', routeN, '8th');
planTrip (routeN, '34th', routeN, '8th');


// const trips = planTrip (route, '34th', routeN, '8th');
// console.log(trips);

// if there is in the same route





// if there is in different route
// if (r2 === route6){
// solving array problem
// if (r2 = route6){
//     // newRoute2 = routeN.pop();     //return the deleted element - 8th,
//
//     // newRoute2 = routeN.push('Astor Place');     //it returns 6,
//     routeN.pop();
//     newRoute2 = routeN.concat(['Astor Place']);
// }

//  split array into half
// const nIntersection = routeN.indexOf('Union Square');
// const firstHalfRouteN = routeN.slice(0,nIntersection + 1);
// const secondHalfRouteN = routeN.slice(nIntersection + 1);
//
// const intersection6 = route6.indexOf('Union Square');
// const firstHalfRoute6 = route6.slice(0,intersection6 + 1);
// const secondHalfRoute6 = route6.slice(intersection6 + 1);
//
// const lIntersection = routeL.indexOf('Union Square');
// const firstHalfRouteL = routeL.slice(0,lIntersection + 1);
// const secondHalfRouteL = routeL.slice(lIntersection + 1);

//
// let stops = 0;
// let startIndex = 0;
// let endIndex =0;
// let newRoute = [];  // store stops
// let newRoute2 = [];     // new route
// let firstHalfRoute = [];    //first half route
// let secondHalfRoute = [];   // end route
//
//
// for(i = 0; i < routeN.length; i++) {
//     if (routeN[i] === '34th') {
//         startIndex = i;
//         console.log(routeN[i]);
//     }
//     if (routeN[i] === '8th') {
//         endIndex = i;
//         console.log(routeN[i]);
//         stops = endIndex - startIndex;
//         console.log(stops);
//         newRoute = routeN.slice(startIndex + 1, endIndex + 1);
//         console.log(newRoute);
//     }
//
// }






//
// console.log(`You must travel through the following stops on the ${routeN} line: ${firstHalfRoute}`);
//
// console.log(`Change at Union Square.`);
//
// console.log(`Your journey continues through the following stops: ${secondHalfRoute}.`);
//
// console.log(`${stops} stops in total.`);



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
