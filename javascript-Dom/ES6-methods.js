//filter

const myArray =[1,2,3,4,5,6,7,8]
//const myFilterArray = myArray.filter((item) => {
   // return item >4
//})
//console.log(myFilterArray);
//filtering using forEach

const filterArray = myArray.forEach( (data) => {
    if(data>5){
        return data
        //console.log(data)
    }
})
//console.log(filterArray);

//Map method

const arrayNumbs = [2,4,6,8,10]
const changedArray = arrayNumbs.map( (value) =>{
    return value + 2;
})
console.log(changedArray);

//chaining

const chainingArray = [3,4,6,7,,8,9,10]
const updatedArray= chainingArray
                                .map((data) => data+10)
                                .map((data) => data*10)
                                .map((data) => data>150)
                                //.filter((data) => data>150)
    console.log(updatedArray);

    //reduce method
    const arrOfNum = [1,2,3,4,5]
    const reduceArray = arrOfNum.reduce(function(accumulator,currentvalue){
        console.log(`accumulator ${accumulator} and ${currentvalue}`)
        return accumulator + currentvalue
    },5)
    console.log(`our final value = ${reduceArray}`);

    //reduce method using arrow function
    const modifiedArray = arrOfNum.reduce((acc,currval) => acc + currval,0)
    console.log(`our reduced array = ${modifiedArray}`);
