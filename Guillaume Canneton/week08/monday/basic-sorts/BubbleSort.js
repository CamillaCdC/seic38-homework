function bubbleSort(array) {
  let swapHappened = true;
  let end = array.length-1;
  while (swapHappened){
    swapHappened = false
    for (i=0; i < end; i++){
      temp = array[i];
      if ( array[i] > array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]];
        swapHappened = true;
      }
    }
    end--
  }
    return array;
}

module.exports = bubbleSort;
