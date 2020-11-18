function quickSort( arr, result=[] ) {

  for ( i=0; i<arr.length; i++ ) {

    let s = 0;
    for ( j=0; j<arr.length; j++ ) {

      if ( arr[i]>arr[j] || ( ( arr[i]===arr[j] ) &&( j>i ) ) ) {
        s=s+1;
      }

    }

    result[s]=arr[i];

  }

  return result;

}

function bucketSort( arr, result=[], nBucket = Math.ceil( Math.sqrt(arr.length) ) ) {

  let maxArr = Math.max.apply(Math,arr);
  let minArr = Math.min.apply(Math,arr);

  let nLength = Math.ceil( (maxArr - minArr) / nBucket );

  for ( n=1; n<nBucket+1; n++ ) {
    let s =[];
    let s2 = minArr + nLength * n + (n-1);
    let s1 = minArr + nLength * (n-1) + (n-1);

    for ( j=0; j<arr.length; j++ ) {

      if ( arr[j]<=s2 && arr[j]>=s1 ) {
        s.push(arr[j]);
      }

    }

    s = quickSort(s);

    for ( t=0; t<s.length; t++ ) {
      result.push(s[t]);
    }

  }

  return result;
}

module.exports = bucketSort;
