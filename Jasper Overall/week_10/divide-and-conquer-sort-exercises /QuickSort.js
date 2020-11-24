function quickSort(arr){
  function quickSort(arr){
  if(arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const lesserArray = [];
  const greaterArray = [];

  for ( i = 1; i < arr.length; i++) {
    if ( arr[i] > pivot ) {
      greaterArray.push(arr[i]);
    } else {
      lesserArray.push(arr[i]);
    }
  }

  return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
}

module.exports = quickSort;
