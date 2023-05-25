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

myDay = Math.floor(gap / 86400000)
console.log(myDay)
myHours = Math.floor((gap - myDay * 86400000) / 3600000)
console.log(myHours)
myMinuts = Math.floor((gap - myHours * 3600000) / 60000)
console.log(myMinuts)
mySeconds = Math.floor((gap - (myMinuts * 60000 + myHours * 3600000)) / 1000)
console.log(mySeconds)














