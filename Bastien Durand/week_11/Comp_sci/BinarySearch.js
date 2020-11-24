function binarySearch (haystack, needle) {
  let start = 0;
  let end = haystack.length - 1;
  let midpoint = Math.floor((start + end) / 2); // Bug

  // not found AND elements still to search through
  while (haystack[midpoint] !== needle && start < end) {
    if (needle < haystack[midpoint]) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }

    midpoint = Math.floor((start + end) / 2);
  }

  return (haystack[midpoint] === needle) ? midpoint : -1;
}

function recursiveBinarySearch (arr,
                                element,
                                start=0,
                                end=arr.length - 1,
                                midpoint=Math.floor((start+end) / 2)) {
  if (arr[midpoint] === element) {
    return midpoint; // base case: success
  }

  if (start >= end) {
    return -1; // base case: unsuccess
  }

  if (element > arr[midpoint]) {
    start = midpoint + 1;
  } else {
    end = midpoint - 1;
  }

  return recursiveBinarySearch(arr, element, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
