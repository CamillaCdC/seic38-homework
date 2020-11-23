function insertionSort (array) {

  for ( i=1; i<array.length; i++ ) {
    for( j=i; j>0; j-- ) {
      if( array[j-1] > array[j] ) {
        s = array[j-1];
        array[j-1] = array[j];
        array[j] = s;
      }else{
        break;
      }
    }
  }
  return array;
}

module.exports = insertionSort;
