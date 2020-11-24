function quickSort(arr){
  if (arr.length <= 1) {
    return arr; // base case
  }

  // O(2N)
  const pivot = arr.pop(); // get this value from anywhere but do it consistently
  const lessThan = arr.filter(item => item < pivot);
  const greaterThan = arr.filter(item => item >= pivot);
  // TODO: use reduce

  // O(N)
  // const lessThan = [];
  // const greaterThan = [];
  // arr.forEach(function (element) {
  //   if (element < pivot) {
  //     lessThan.push(element)
  //   } else {
  //     greaterThan.push(element);
  //   }
  // });

  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
  // return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

module.exports = quickSort;
