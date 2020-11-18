function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let index = -1;
    for(i=0;i<arr.length;i++){
      if (arr[i] === element){
        index = i
        break
      }
    }
    return index
}

function recursiveBinarySearch(arr, element){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let index = Math.floor(arr.length/2)
    if (arr.length<=1 && element != arr[0]){
      return -1
    } else if (element === arr[index]){
      return index
    } else if (element > arr[index]){
      let newArray = arr.slice(index)
      return recursiveBinarySearch(newArray, element)
    } else {
      let newArray = arr.slice(0, index)
      return recursiveBinarySearch(newArray, element)
    }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
