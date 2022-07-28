/*Object DataTypes are the datatypes which contains multiple values
Examples 
1 Array
2 String
3 Functions
*/

//Declering an object
let car={
    name:"Duggatti",
    color:"Red",
    price:1585500
}
console.log(car);
console.log(car.price);
console.log(car.name);

// Array Decleration
let arr=[1,2,3,4,5,2,1,7,5,9,2];
console.log(arr.length);
console.log(arr[4]);
// Function Decleration and Implementation
function addArray(arr){
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let s=addArray(arr);
console.log(s);
