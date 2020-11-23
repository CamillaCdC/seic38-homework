function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let start = 0;
    let end = arr.length -1;
    let midpoint = Math.floor((start + end) / 2);

    while
    
}

function recursiveBinarySearch(arr, element, start=0, end=arr.length - 1, midpoint=Math.floor((start+end)/2)){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    if (arr[midpoint] === element){
      return midpoint;
    }
    if (start >= end) {
      return -1
    }
    if (element > arr[midpoint]) {
      start = midpoint + 1
    } else {
      end = midpoint -1
    }
    return recursiveBinarySearch(arr, element, start, end)
}
// function recursiveBinarySearch(arr, element){
//     let index = Math.floor(arr.length/2)
//     if (arr.length<=1 && element != arr[0]){
//       return -1
//     } else if (element === arr[index]){
//       return index
//     } else if (element > arr[index]){
//       let newArray = arr.slice(index)
//       return recursiveBinarySearch(newArray, element)
//     } else {
//       let newArray = arr.slice(0, index)
//       return recursiveBinarySearch(newArray, element)
//     }
// }

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
