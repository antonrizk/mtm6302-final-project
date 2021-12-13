
    
const navContainer = document.querySelector('.nav-container')
const settingbtn = document.getElementById('settings')
const darkMode = document.getElementById('darkMode')
const clockDisplay = document.getElementById('clockDisplay')
const displayDay = document.getElementById('today-info')
let $dayInfo = document.getElementById('dayInfo')
let theClock = document.getElementById('clock')
let greeting = document.getElementById('greeting')



// api fetch 

// fetch('https://api.nasa.gov/planetary/apod?api_key=J3gluZeQZefozV6XxyZRyImJznmmoWCl1FF0iUgC')
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (imageData){
//         console.log(imageData)

//         if (imageData.media_type === 'video'){
//             document.querySelector('p').textContent = 'APOD is a video'
//         } else {
//             document.style.background = "url('https://api.nasa.gov/planetary/apod?api_key=J3gluZeQZefozV6XxyZRyImJznmmoWCl1FF0iUgC') no-repeat ";

//             // document.querySelector('img').setAttribute('src', imageData.hdurl)
            

//         }
//     })
    



// making the nav apear
settingbtn.addEventListener('click', function(e){
   navContainer.classList.toggle('showNav')
        })

    
    
    
    
    
    
// setting up the clock with todays time
function clock(){
    const now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    theClock.textContent = hour + ':' + minute + ':' + second 
    setInterval(clock, 1000)
}
clock()
    
 // setting the time as a global thing to call the greeting
const now = new Date()
let hour = now.getHours()
function greetings(){

    
    if(hour <= 12){
        greeting.innerHTML = 'Good morning'
    }
     if(hour >= 12){
        greeting.innerHTML = 'Good afternoon'
    }
    if(hour >= 20){
        greeting.innerHTML = 'Good Evening'
    }
   
}
greetings()


// set up event listener to display the time. 
displayDay.addEventListener('click', function(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()+1
    let day = now.getDate()
    $dayInfo.textContent = [year, month, day]
    // console.log(day)
})





clockDisplay.addEventListener('click', function(){
    theClock.setAttribute('style', 'color:yellow;')
})


// setting up the click event for displaying dark mode styles. 
    darkMode.addEventListener('click', function(){
        // document.getElementById('clock').textContent.style.color = 'white'
        theClock.textContent.add = 'neon'
        


    })