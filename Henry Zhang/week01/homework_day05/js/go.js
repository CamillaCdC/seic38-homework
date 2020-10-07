

const rou = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

for( i = 0; i < rou.length; i++ ){
    let stops = 0;
    let startIndex = 0;
    let endIndex =0;

    if( rou[i] === '34th' ){
        startIndex = i;
        console.log(rou[startIndex]);
    }
    if (rou[i] === '23rd') {
        endIndex = i;
        console.log(rou[endIndex]);
        stops = endIndex - startIndex;
        console.log(stops);
    }
}
