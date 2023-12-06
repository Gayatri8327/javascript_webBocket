
//object:these are super important for grouping the data and functionality .so we can do a lot of thing in object of js.
//object are constructed in key and value pair ex:let mycars={name of the object}
//BMW:"series 7";
//(key) AUDI:"Q7";(value)


const jsuser={
    name:"Gayatri",
email:"Gayatri@edu.in",
"full name":"Gayatri priyadarshini",
age:21,
location:"odisha",
lastLoggedimDays:["monday","wednesday","friday"]
}
console.log(jsuser.name);
console.log(jsuser["full name"]);//for accessing the full name of user 
jsuser.email="Gayatrip@edu.in" ;//change the email by pointout the first email
//Object.freeze(jsuser);//freeze method will don't show the freezing object
jsuser.email="gift@edu.in";
console.log(jsuser.email);
//----------------------------------------------
jsuser.gretting = function(){
    console.log("Hello gayatri!!!");
}
jsuser.grettingTwo = function(){
    console.log(`hello js user ${this.name}`);
}
jsuser.gretting();
jsuser.grettingTwo();

const tinderUser={}
tinderUser.id="1234",
tinderUser.email="sony@gmail.com",
tinderUser.name="sony",
console.log(tinderUser)

const regularUser={
    email:"somalin@gmail.com",
    fullName:{
        userFullName:{
            FirstName:"somalin",
            LastName:"Ray"
        }
    }
}
console.log(regularUser.fullName.userFullName.FirstName);

const obj1= {
    1:'a',
    2:'b'
}
const obj2={
    3:'a',
    4:'b'
}
const obj3= {
    5:'a',
    6:'b'
}
const obj4={obj1,obj2,obj3}
console.log(obj4);
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)

const course = {
    courseName : "last minute placement",
    price:9999,
    courseInstucture:"rajeev"
}
const {courseInstucture:teacher} = course
console.log(teacher);

/*
json-javascript object notation to help for storing data in our local disk and we can manupulate these data also in one place to another place
API-Application programming interface :it is a mechanism that enables two software components to communicate with each other using a set 
defination and protocols
*/