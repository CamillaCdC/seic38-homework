function bubbleSort(array) {
  let swapped = true; // Assume the worst
  let end = array.length - 1;

  while (swapped === true) {
    swapped = false; // We haven't swapped anything in THIS iteration.
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i+1]) {
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ]; // ES6 destructuring for parallel assignment
        swapped = true;
      }
    }

    end--;
  }

  return array;
}

module.exports = bubbleSort;
