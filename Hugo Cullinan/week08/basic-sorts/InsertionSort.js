function insertionSort (items) {
// Loop through each element
  for (let i = 0; i < items.length; i++) {
// store the current item value so it can be placed correctly
// in the sorted portion of the array
    const item = items[i];
// Loop backward through the sorted portion of the array
// and scoot everything over until you find the right place to
// insert the value you're working with
// Copy each item to the next slot over, as long as the value is smaller
// than the item in the sorted array we're looking at (items[j] > value)
    for (var j = i-1; j >= 0 && items[j] > item; j--) {
      items[j+1] = items[j];
    }
  // We can now insert the item in its sorted location
    items[j + 1] = item;
  }






  // Remember to return the list!
  return items;
}

module.exports = insertionSort;
