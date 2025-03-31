//Creating Named Functions

function userProfile(name) {
    console.log(`Hello ${name} !`);
}
userProfile("Suganya");

//Creating Arrow Function

let double = (number) => number*2
{
    console.log("The Double Value is : "+ double(5));
    double();
}

//Creating Anonymous Function

let delayTime = function () {

    setTimeout(() => {

        console.log("This message is delayed by 2 seconds");
    }, 2000)
}

delayTime();

//Creating Callback function

function getUserData(callback) {
    console.log("Calling Callback function");
    setTimeout(() => {
        let user={name :"Test",age :26};
        callback(user);
    }, 3000);
}

//Setting the Values for Callback function
/*function Data(username, age) {
    console.log(`The username ${username}`);
    console.log(`The Age is ${age}`);
}*/




//getUserData(Data);
//Data("Test", 25);
getUserData((user)=>{
console.log (`${user.name},${user.age}`);
})


function getUserData1(callback) {
    console.log("Calling Callback function");
    setTimeout(() => {
        callback("Suganya",29);
    }, 3000);
}

function Data(username, age) {
    console.log(`The username ${username}`);
    console.log(`The Age is ${age}`);
}

getUserData1(Data);

const letConst=(a,b) => a*b 
console.log("The Value is "+ letConst(2,2));


