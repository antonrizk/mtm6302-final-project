
    
const navContainer = document.querySelector('.nav-container')
const settingbtn = document.getElementById('settings')
const darkMode = document.getElementById('darkMode')
const lightMode = document.getElementById('lightMode')
const clockDisplay = document.getElementById('clockDisplay')
const displayDay = document.getElementById('today-info')
let $dayInfo = document.getElementById('dayInfo')
let theClock = document.getElementById('clock')
let greeting = document.getElementById('greeting')



// api fetch need to fix it so it apears 

fetch('https://api.nasa.gov/planetary/apod?api_key=J3gluZeQZefozV6XxyZRyImJznmmoWCl1FF0iUgC&date=2021-12-13&thumbs=True')
    .then(function (response){
        return response.json()
    })
    .then(function (imageData){
        console.log(imageData)

        if (imageData.media_type === 'video'){
            document.querySelector('p').textContent = 'APOD is a video'
        } else {
            
            document.querySelector('img').setAttribute('src', imageData.hdurl)
            
            // set attribute for background?
            // document.querySelector('p').style(``) load in the image as  background it wont work so it wont be a background. 
            
            // anyway of fixing it
        }
    })
    


// ======================
// making the nav apear
// ======================
settingbtn.addEventListener('click', function(e){
   navContainer.classList.toggle('showNav')
})

// ======================================== 
// setting up the clock with todays time
// ======================================== 
function clock(){
    const now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    theClock.textContent = hour + ':' + minute + ':' + second 
    setInterval(clock, 1000)

    // adding if statment if the number is less then two digits add a 0 infront of it. 
    // ===== not sure how to actually do this======
    // if(minute > 10){
    //     theClock =  '0' + minute
    // }
}
clock()
// ============================================================
 // setting the time as a global thing to call the greeting
//======================================== =======================
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

// ===========================================
// set up event listener to display the time. 
// ============================================
displayDay.addEventListener('click', function(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()+1
    let day = now.getDate()
    $dayInfo.textContent = [year, month, day]
    // console.log(day)

   
})
// another event listener that clears the text content with if statment . if exsit dont do anything if not then clear. 
displayDay.addEventListener('click', function(e){
    // struggling to add the event listener so when button is clicked again the info disappears
})




// adddin event listener so when this is clicked in the nav this styling appears. 
clockDisplay.addEventListener('click', function(){
    theClock.classList.add('neon')
    // console.log(theClock)
    // ====this event listner is not working and wont listen
})


// setting up the click event for displaying dark mode styles. 
darkMode.addEventListener('click', function(){
    let neonColor = $dayInfo
    $dayInfo.classList.add('darkmode')
    // ==== this is not working even console log wont pick it up not sure whats happening

 })
 lightMode.addEventListener('click', function(){
    
    $dayInfo.classList.add('darkmode')
    

 })