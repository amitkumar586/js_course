
let score = "33";
console.log(typeof(score));

//change string into number
let changeNum = Number(score);
console.log(typeof changeNum);

// check NaN value
let score1 = "33Ami";
let changeNum1 = Number(score1);
console.log(typeof changeNum1);
console.log(changeNum1);  

// check NaN value
let score2 = undefined;
let changeNum2 = Number(score2);
console.log(typeof changeNum2);
console.log(changeNum2);

// check NaN value
let score3 = true;
let changeNum3 = Number(score3);
console.log(typeof changeNum3);
console.log(changeNum3);


// "33" ===> 33 
// "33abc" ==> NaN
// "true" ==> 1
// "false" ==> 0

// convert number into boolean

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);   

// "1" ==> true
// "0" ==> false
// "" ==> false
// "Amit" ==> true

let someNumber = 33;
stringNumber = String(someNumber);
console.log( typeof stringNumber);
console.log(stringNumber);




