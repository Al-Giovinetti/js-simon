const clock = setInterval(countdown,1000)

function countdown(){
    let now = new Date ()
    const dayWeek = now.getDay()
    now = now.valueOf()

    let appointment = new Date ('05 Jun 2023 09:30:00')
    appointment = appointment.valueOf()
        
    let gap = appointment - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24 

    if(gap < 0){
        if(dayWeek == 6){
            gap =  (appointment + day * 2)  - now 
        }else if(dayWeek == 5 ){
            gap = gap =  (appointment + day * 3)  - now 
        }else{
            gap = gap =  (appointment + day )  - now 
        }
    } 

    console.log(gap)


    const daysCountdown = document.getElementById("days")
    const hoursCountdown = document.getElementById("hours")
    const minuteCountdown = document.getElementById("minutes")
    const secondCountdown = document.getElementById("seconds")

    daysCountdown.innerHTML = Math.floor((gap / day) % 24);
    hoursCountdown.innerHTML = Math.floor((gap / hour ) % 60);
    minuteCountdown.innerHTML = Math.floor (( gap / minute) % 60);
    secondCountdown.innerHTML = Math.floor (( gap /second) % 60);
}


