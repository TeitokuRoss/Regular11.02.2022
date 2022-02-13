"use strict";

const regExp1 = new RegExp("");
const regExp2 = /qwerty/;

console.log("test:>>", regExp1.test("dfgfdg"));
console.log("match :>>", "qwerty".match(regExp1));

// . - любой символ

console.log("object:>>", "qwerty".match(/q...ty/));

// Квантификаторы; {1,10}
// + - {1,}
// * - {0,}
// ? - {0,1}
console.log("email:>>", "qwerty@test".match(/.{1,60}@.{1,60}/));
//pet
console.log("pet :>>", "et".match(/pets?/));
//1-5
console.log("0-9 :>>", "86".match(/[0-9][0-9]/g));
//10-9999
//'9' -       '1000' +    '10000" -
console.log("10-9999 :>>", "99999".match(/^[0-9]{2,4}$/));
