function bubbleSort(array) {
    let swapped = true;
    let end = array.length - 1;
    // Make some sort of loop that keeps happening if there were any swaps that happened this turn
    while (swapped === true) {
    // reset swapHappened to false each time so we can detect if a swap happened in this specific iteration.
      swapped = false;
// Make another loop (inside the first one) to go through one
// round of swapping from the start of the list to the end
      for (let i = 0; i < end; i++) {
// Inside inner loop:
// compare each pair of elements near each other
// swap them if the bigger one was at a lower index.

// Make sure to keep track of whether a swap happened!
        if (array[i] > array[i+1]) {
          [ array[i], array[i+1] ] = [ array[i+1], array[i] ];
          swapped = true;
        }
      }
      end --
    }
    // After both loops have exited, remember to return the array
    return array;
}

module.exports = bubbleSort;
