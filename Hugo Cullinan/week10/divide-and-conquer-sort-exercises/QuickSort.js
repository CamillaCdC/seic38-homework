function quickSort(arr){
  if (arr.length <= 1) {
    return arr; // base case
  }

  // O(2N)
  const pivot = arr.pop(); // get this value from anywhere but do it consistently
  const lessThan = arr.filter(item => item < pivot);
  const greaterThan = arr.filter(item => item >= pivot);

  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));

}

module.exports = quickSort;
