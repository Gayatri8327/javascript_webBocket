//array is a object which can store similar type of data in a contigious memory location
//array index start from 0
const myArr=[3,4,5,6,7,8,9]
console.log(myArr[0])
//1st accessing the element
//2nd array initialize and declaring
const myNewArray=new Array(1,2,3,4);
console.log(myNewArray);
//----------------------------------------------------------------------------------------------------------------------------------
//array methods
//push:insertion in last
//pop:deletion from last
const myArray=[1,2,3,4,5,6,7];
console.log(myArray);
myArray.push(8);
console.log(myArray);
myArray.pop();
console.log(myArray);
//--------------------------------------------------------
//shift:remove a element in 1st index
//unshift:add a element in 1st index
myArray.unshift(0);
console.log(myArray);//[0,1,2,3,4,5,6,7]
myArray.shift();
console.log(myArray);
//------------------------------------------------------------------------------------
console.log(myArray.includes(9));
console.log(myArray.indexOf(19));//if the value is not present in the index the output wiil be -1
console.log(myArray);

const demoArray=myArray.join();
console.log(demoArray);
console.log(typeof demoArray);
//join basically works on converting an array to string.

console.log("A",myArray);
const myArr1=myArray.slice(1,3);//slice:it select a part of an array and give a new array
console.log(myArr1);
//splice:add/remove element from an array
console.log("B",myArray);
const myArr2=myArray.splice(1,3);
console.log(myArr2);
//super:joins two array
const cars=["maruti","alto","kwid","wagnor"];
const supercars=["BMW","audi","gwagon","lamborgini"];
cars.push(supercars);
console.log(cars);

const allcars=cars.concat(supercars);
console.log(allcars);
//spread operator used to add multiple array
const allNewcars=[...cars,...supercars];
console.log(allNewcars);
//flat:it adds all subarrays
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5[6,3[9,10]]]]];
const realAnotherArray=anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("gayatri"));//is array: it is a method to check wheather it is a array or not.
console.log(Array.from("gayatri"));//from:it is a method in which we can create that it automatically creates an array.





