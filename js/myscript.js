let today = new Date();
today=(today[Symbol.toPrimitive]('number'));

let date1 = new Date('26 May 2023 09:30');
date1=(date1[Symbol.toPrimitive]('number'));

let gap = date1 - today;
console.log(gap)

let myDays = document.getElementById("days")
let myHours = document.getElementById("hours")
let myMinuts = document.getElementById("minuts")
let mySeconds = document.getElementById("seconds")

let appDay = Math.floor(gap / 86400000)
console.log(appDay)

let appHours = Math.floor((gap - appDay * 86400000) / 3600000)
console.log(appHours)

let appMinuts = Math.floor((gap - appHours * 3600000) / 60000)
console.log(appMinuts)

let appSeconds = Math.floor((gap - (appMinuts * 60000 + appHours * 3600000)) / 1000)
console.log(appSeconds)

myDays.innerHTML = appDay
myHours.innerHTML = appHours
myMinuts.innerHTML = appMinuts
mySeconds.innerHTML = appSeconds














