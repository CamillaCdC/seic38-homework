function insertionSort (items) {
  // for (i=1; i<items.length; i++) {
  //   for( j = i-1; j >= 0; j--) {
  //     let temp = items[j]
  //     if (items[j] > items[i]) {
  //       items[j] = items[i]
  //       items[i] = temp
  //     }
  //   }
  // }
  for (var i = 0; i < items.length; i++) {
  let temp = items[i]
  for (var j = i - 1; j > -1 && items[j] > temp; j--) {
    items[j + 1] = items[j]
  }
  items[j + 1] = temp
}
  return items;
}

module.exports = insertionSort;
