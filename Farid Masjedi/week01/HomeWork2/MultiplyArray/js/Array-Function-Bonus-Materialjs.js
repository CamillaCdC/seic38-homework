
// Define a function multiplyArray that sums and multiplies (respectively) all-
//- and multiplyArray([1,2,3,4]) should return 24.
console.log("\nMissed one\n");

function multiplyArray(myArray){
  let m=1;
  for (i=0; i<myArray.length; i++){
    m = m*myArray[i];
  }
  console.log(`The multiply of Elements of [${myArray}] is ${m}`);
  return m;
}
console.log(multiplyArray([1,2,3,4]));
console.log(multiplyArray([-10,10]));
console.log(multiplyArray([10,-20]));
console.log(multiplyArray([0.1,0.2]));
console.log('Javascript can not give the right multiply of 0.1 and 0.2 too :))');
