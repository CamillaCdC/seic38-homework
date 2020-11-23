function bubbleSort(array) {
  let swapHappened = true;
  let temp;
  while (swapHappened){
    swapHappened = false
    for (i=0; i < array.length; i++){
      temp = array[i];
      if ( array[i] > array[i+1]){
        array[i] = array[i+1];
        array[i+1] = temp;
        swapHappened = true;
      }
    }
  }
    return array;
}

module.exports = bubbleSort;
