let today = new Date();
today=(today[Symbol.toPrimitive]('number'));

let date1 = new Date('26 May 2023 09:30');
date1=(date1[Symbol.toPrimitive]('number'));

let gap = date1 - today;
console.log(gap)

let myDay = document.getElementById("days")
let myHours = document.getElementById("hours")
let myMinuts = document.getElementById("minuts")
let mySeconds = document.getElementById("seconds")











