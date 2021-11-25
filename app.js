var y =4;
let circleType = "Unknown Circle"; // Global Variable
//local Scope 

let circleType =function (r,pi = 3.14){
  var area = pi * r * r; // local variable
  return area;
}
 let CircleAreaArrow = r => pi * r * r;

 let triangleArea = (b, h) => (h * b) / 2;

var result = CircleArea(20);

if (result > 20){
    circleType = " Bigger Circle"; //It Should be a global Variable
    console.log (circleType);
} else{
    circleType ="Smaller Circle";
    console.log (circleType);
}

console.log (Result); //worked
console.log (triangleArea(10 , 20));

//console.log(Area); // undefined

 console.log(circleType); // ?
