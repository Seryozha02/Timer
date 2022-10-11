const hours = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

setInterval(() => { 
    
        const date = new Date()

        const sec = (date.getSeconds() / 60 * 360) - 90;
        const min = (date.getMinutes() / 60 * 360) - 90;
        const hour = (date.getHours() / 12 * 360) - 90

        hours.style.transform = `rotate(${hour}deg)`
        minutes.style.transform = `rotate(${min}deg)`
        seconds.style.transform = `rotate(${sec}deg)`

},1000)


