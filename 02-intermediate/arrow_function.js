/*
Arrow function-In ES6 major update has done.It changes the old syntax of function declaration and tried to reduce the length of a code.
In arrow function we need a variable to declare it and majority used (=>) this is used to define arrow function.
*/
//old syntax
function addTwoNos (num1,num2){
    return num1+num2;
}
console.log(addTwoNos(5,5));
//arrow function
const user = {
    userName : "Gayatri",
    location :"bbsr",
    welcomeMessage : function (){
        console.log(`${this.userName}, Good Morning`);
        console.log(this)
    }
}
//console.log(user);
user.welcomeMessage();
user.userName ="sima";
user.welcomeMessage();
//----------------------------------------------------------------------------------------
const person = {
    Name : "sony",
    age : 16,
    loginDays : ["sunday","monday","tuesday","wednesday"],
    username :{
        userDetails :{
            lname:"lenka",
            fname:"sony"
        }
    }
};
console.log(person.username.userDetails.lname);
console.log(person);
//arrow function--------------------------------------------------------------------------------
const userDetails = ()=> {
    let username="gayatri"
    console.log(username);
}
userDetails(" ");
//------------------------------------------------------------------------------------------------
const addTwoNos =(num1,num2)=>{
    return num1+num2;
}
const addNos =(num1,num2)=> num1+num2;//if there is only one line code then we can remove the function body means ({}) curly braces
console.log(addTwoNos(5,9));
console.log(addNos(8,8));
const addTwo = () => ({username : "gayatri"})
console.log(addTwo());