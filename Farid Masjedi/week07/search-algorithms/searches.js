function quickSort( arr, result=[] ) {

  for ( i=0; i<arr.length; i++ ) {

    let s = 0;

    for ( j=0; j<arr.length; j++ ) {
      if ( ( arr[i]>arr[j] ) || ( ( arr[i]===arr[j] ) && ( j>i ) ) ) {
        s = s+1 ;
      }
    }

    result[s] = arr[i];

  }

  return result;
}


function binarySearch( arr, target,  targetIndex=0, indexMid = -1 ) {

  arr = quickSort(arr);

  while ( arr.length >= 1 ) {

    // if ( arr.length % 2 === 0 ) {
    //   indexMid = Math.floor( arr.length/2 ) - 1;
    // } else {
    //   indexMid = Math.floor( arr.length/2 );
    // }

    indexMid = (arr.length%2 === 0) ? Math.floor(arr.length/2)-1 : Math.floor(arr.length/2);

    // (arr[indexMid]>target) ? (arr = arr.slice(0, indexMid)) : ((arr[indexMid]<target) ? (arr = arr.slice(indexMid+1, arr.length)) : (return targetIndex + indexMid)
    if ( arr[indexMid] === target ) {
      return targetIndex + indexMid;

    } else if ( arr[indexMid] > target ) {
      arr = arr.slice(0, indexMid);

    } else {
      targetIndex = targetIndex + indexMid + 1;
      arr = arr.slice(indexMid+1, arr.length);
    }
  }

  return -1;
}

function recursiveBinarySearch(arr, target,  targetIndex=0){
  arr = quickSort(arr);

  if (arr.length<=1) {return (arr[0]===target) ? targetIndex : -1;}
  indexMid = (arr.length%2 === 0) ? Math.floor(arr.length/2)-1 : Math.floor(arr.length/2);

  if ( arr[indexMid] === target ) {
    return targetIndex + indexMid;

  } else if ( arr[indexMid] > target ) {
    arr = arr.slice(0, indexMid);

  } else {
    targetIndex = targetIndex + indexMid + 1;
    arr = arr.slice(indexMid+1, arr.length);
  }

  return recursiveBinarySearch(arr, target, targetIndex)

}


module.exports = {
    binarySearch,
    recursiveBinarySearch
}
