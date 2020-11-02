function bubbleSort(array,a=[]) {
  let flag = false;

  while (!flag) {
    let arr = [...array];

    for (i=1; i<array.length; i++){
      if ( array[i] < array[i-1] ){
        let changePosition = array[i];
        array[i] = array[i-1];
        array[i-1] = changePosition;
      }
    }

    if (arr.length === array.length){
      flag = true;

      for(i=0; i<arr.length; i++){
        if ( arr[i] !== array[i] ){
          flag = false;
          break;
        }
      }
    }
  }

  return array;
}

module.exports = bubbleSort;
