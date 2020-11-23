function quickSort(arr,result=[]){
  for (i=0; i<arr.length; i++){

    let s = 0;
    for (j=0; j<arr.length; j++){
      if ( ( arr[i]>arr[j] ) || ( (arr[i]===arr[j]) && (j>i) ) ){
        s=s+1;
      }
    }

    result[s]=arr[i];

  }

  return result;

}}

module.exports = quickSort;
