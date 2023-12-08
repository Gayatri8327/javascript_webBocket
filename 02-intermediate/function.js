/*function-A javascript function is a block code designed to perform a particular task
          A javascript function is executed when something invokes it (calls it).
*/

function sayName(){
    console.log("G");
    console.log("I");
    console.log("F");
    console.log("T");
}
sayName();
//here sayName-reference
//()-execution
//-------------------------------------------------------------------------------
function addTwoNumber (num1,num2){
    console.log("Addition is :",num1+num2);
}
addTwoNumber(3,4);//arguments
//(num1,num2)-parameters
//--------------------------------------------------------------------------
function addTwoNumber1(num1,num2){
    let result = num1 +num2;
    return result;
}
const result = addTwoNumber1(3,5);
console.log("result:",result);
//--------------------------------------------------------------------------------------------
function loginUserMessage(username){
    return `${username} just logged in.`
}
console.log(loginUserMessage());
//--------------------------------------------------------------------------------------------
function loginUserMessage(username){
    if(username===undefined)
    {
        console.log("please enter your username");
    }
    return `${username} just logged in .`
}
loginUserMessage();
//-------------------------------------------------------------------------------------------
function loginUserMessage(username="gayatri"){
    if(!username)
    {
        console.log("please enter your username");
        return
    }
    return `${username} just logged in.`  //if we give parameter in this funtion call it override the funtion.
}
console.log(loginUserMessage("sam"));
console.log(loginUserMessage("ram"));