 //The calculator

var squareNumber = function(x){
var result = x **2;
console.log("The result of squaring the number " + x + " is " + result);
}
squareNumber(3);
//------------------------------------------------------------------------------
var halfNum = function(a){
  var x = a/2;
  console.log( "Half of " + a + " is " + x);

}
halfNum(5)


//------------------------------------------------------------------------------

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(5, 10);

//------------------------------------------------------------------------------


var areaOfCircle = function(r){
var area = Math.PI * (r*r);
const finalResult = Math.round(area);
console.log("The area for a circle with radius " + r + " is " + finalResult)
}
areaOfCircle(2)
//------------------------------------------------------------------------------
var num = function(x){
var y = x/2;
var sqNum = y **2;
const areaOfCircle = Math.PI *(sqNum*sqNum);
console.log(areaOfCircle);
}
num(2);

//-----------------------------------------------------------------------------

const drEvil = function($){
  
}
