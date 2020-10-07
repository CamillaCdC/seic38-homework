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


  //subway could be an object
  const subway = [];

  subway[0] = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
  subway[1] = ["8th", "6th", "Union Square", "3rd", "1st"];
  subway[2] = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

  const nLine = subway[0];
  const lLine = subway[1];
  const sixLine = subway[2];

  const prompting = function (userLineStartPrompt, userStartTripPrompt, userLineEndPrompt, userEndTripPrompt){

    userLineStartPrompt =  prompt("What line will you be getting on the subway at?");
    userStartTripPrompt =  prompt("Which station are you starting at?");
    userLineEndPrompt = prompt("What line is your stop on?");
    userEndTripPrompt = prompt("What stop are you getting off at?");

    let userLineStart = userLineStartPrompt ;
    let userStartTrip = userStartTripPrompt ;
    let userLineEnd = userLineEndPrompt;
    let userEndTrip = userEndTripPrompt;


//look up switch statement
          if (userLineStart === "N line"){
             userLineStart = nLine;
          };
          if (userLineStart === "L line"){
             userLineStart = lLine;
          };
          if (userLineStart === "6 line"){
             userLineStart = sixLine;
          };

          if (userLineEnd === "N line"){
            userLineEnd = nLine;
          };
          if (userLineEnd === "L line"){
             userLineEnd = lLine;
          };
          if (userLineEnd === "6 line"){
             userLineEnd = sixLine;
          };

    console.log(planTrip(userLineStart, userStartTrip, userLineEnd, userEndTrip));
  };

    const planTrip = function (lineStart, startTrip, lineEnd, endTrip){
      let i = lineStart.indexOf(startTrip);
      let j = lineEnd.indexOf(endTrip);
      let stops = 0;
      let journey = ""; //list of stops
      let stLine = "";
      let endLine = "";
      let endJourney = ""; // list of stops on end line
      let change = "";
      let endJ = "";
      let k = lineEnd.indexOf("Union Square")


      if (lineStart === nLine){
        // lineStart = nLine;
        stLine = "N line";
      };
      if (lineStart === lLine){
        stLine = "L line";
      };
      if (lineStart === sixLine){
        stLine = "6 line";
      };

      if (lineEnd === nLine){
        // lineEnd = nLine;
        endLine = "N line";
      };
      if (lineEnd === lLine){
        endLine = "L line";
      };
      if (lineEnd === sixLine){
        endLine = "6 line";
      };

      if (lineStart === lineEnd){ //on the same line

        if (i < j){ // goes through one subway line

          for (i; i <= j; i++) {
            stops = stops + 1;
            journey = journey + lineStart[i] + ", "; ////need to figure out the end full stop and it prints the first
          };

        } else {

          for (i; i >= j; i--) {
            stops = stops + 1;
            journey = journey + lineStart[i] + ", ";
          }; //reverse

        };

      } else {  //else allows stop at Union Square for the change

          change = `Change at Union Square`;

          if (i < k){

            for (i; i <= lineStart.indexOf("Union Square"); i++) {
              // - get to union then union to end. fwd then backward
              stops = stops + 1;
              journey = journey + lineStart[i] + ", ";
              //console.log(`FwdStart ${stops}`);
            }

            } else {

              for (i; i >= lineStart.indexOf("Union Square"); i--) {
                stops = stops + 1;
                journey = journey + lineStart[i] + ", ";
                //console.log(`BckStart ${stops}`);
              }; //reverse

            }; if (j > k){

              for (k; k <= j; k++) {
                stops = stops + 1;
                endJourney = endJourney + lineEnd[k] + ", ";
                //console.log(`fwdEnd ${stops}`);
                endJ = `Your journey continues through the following stops on the ${endLine}: ${endJourney}`;
            };

            } else {

              for (k; k >= j; k--) {
                stops = stops + 1;
                endJourney = endJourney + lineEnd[k] + ", ";
                //console.log(`BckEnd ${stops}`);
                endJ = `Your journey continues through the following stops on the ${endLine}: ${endJourney}`;
              };  //reverse

            }

          };

        console.log(`You must travel through the following stops on the ${stLine}: ${journey}`); //fullstop?
        console.log(change);
        console.log(endJ);// "Your journey continues through the following stops: 23rd, 28th, 33rd." - fullstop
        console.log(`${stops} stops in total`);
  };


  // console.log(planTrip(nLine, "Union Square", nLine, "28th"));
  // console.log(planTrip(sixLine, "28th", nLine, "28th"));

  console.log(prompting());
