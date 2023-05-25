const clock = setInterval(getMyDate,1000)

console.log(clock)



//FUNCTION//

/**
 * function that returns the current date
 * 
 * @returns current date,hours,minuts ... 
 */
function getMyDate(){
    const date = new Date () 
    return date
}