// # MTA Lab
mtaLab = {
   lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
   lineL: ['8th','6th','Union Square','3rd','1st'],
   line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

const lineN = mtaLab.lineN;
const lineL = mtaLab.lineL;
const line6 = mtaLab.line6;

const stopsOnLine = function (stop1, stop2, line) {
  const s1 = line.indexOf(stop1);
  const s2 = line.indexOf(stop2);
  stops = [];
  if (s1 < s2){
    for ( i = s1; i <= s2; i++) {
      stops.push(line[i])
    }
  } else {
    for ( i = s1; i >= s2; i--) {
      stops.push(line[i])
    }
  }
  return stops;
};

const allStops = function (line1, stop1, line2, stop2) {
  if (line1 === line2) {
    const singleLine = stopsOnLine(stop1, stop2, line1);
    singleLine.shift(); //shift removes the first element of the array as the departure spot is not counted
    return `You must travel through the following stops: ${ singleLine }. ${ singleLine.length } stops in total.`;
  } else {
    const arr1 = stopsOnLine(stop1, 'Union Square', line1);
    const arr2 = stopsOnLine('Union Square', stop2, line2);
    arr1.shift();
    arr2.shift();
    const numOfStops = arr1.length + arr2.length;
    return `You must travel through the following stops:\n${ arr1 }.\nChange at Union Square. Your journey continues through the \nfollowing stops:\n${ arr2 }.\n${ numOfStops } stops in total.`;
  }
};
