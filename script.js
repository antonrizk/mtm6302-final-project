const navContainer = document.querySelector('.nav-container')
const settingbtn = document.getElementById('settings')
const darkMode = document.getElementById('darkMode')
const lightMode = document.getElementById('lightMode')
const clockDisplay = document.getElementById('clockDisplay')
const displayDay = document.getElementById('today-info')
let $dayInfo = document.getElementById('dayInfo')
let theClock = document.getElementById('clock')
let greeting = document.getElementById('greeting')

const apod_explanation = document.getElementById('explanation');
const apod_title = document.getElementById('title');
const apod_copyright = document.getElementById('copyright')
const apod_date = document.getElementById('date')




// ==========================================
// double click js
// ==========================================

const loveMe = document.querySelector('.api-img')
const times = document.querySelector('#times')

let clickTime = 0

loveMe.addEventListener('click', function(e){
    if(clickTime === 0 ){
        clickTime = new Date().getTime()
    }
    else {
        if((new Date().getTime() - clickTime) < 800){
            // console.log(123)
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
}

// ===================================================
//  setting up the greeting based on time of the day
// ===================================================

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


// ================================================================================================
// api fetch need to fix it so it apears (could not figure out how to make it apear on todays date)
// =================================================================================================


fetch(`https://api.nasa.gov/planetary/apod?api_key=J3gluZeQZefozV6XxyZRyImJznmmoWCl1FF0iUgC&date&thumbs=True`)
    .then(function (response){
        return response.json()
    })
    .then(function (imageData){
        
        console.log(imageData)

        if (imageData.media_type === 'video'){
            document.querySelector('p').textContent = 'APOD is a video'
        } else {
            
           
            document.querySelector('.api-img').setAttribute('style', `background-image: url(${imageData.hdurl});`)
       
        }
        
        apod_title.innerHTML = imageData.title
        apod_explanation.innerHTML = imageData.explanation
        apod_copyright.innerHTML = imageData.copyright
        apod_date.innerHTML = imageData.date
        
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
}
clock()

setInterval(function() {
    clock()
}, 1000);



// ===========================================
// set up event listener to display the time. 
// ============================================
displayDay.addEventListener('click', function(e){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()+1
    let day = now.getDate()
    if($dayInfo.textContent = []){
        $dayInfo.textContent = [year, month, day]
    }
    
   

   
})

// ================================================================================
// adddin event listener so when this is clicked in the nav this styling appears. 
// ================================================================================
clockDisplay.addEventListener('click', function(e){
    localStorage.setItem('neon', clockDisplay)
   if(e.target = 'clockDisplay'){
       theClock.classList.toggle('neon') 
       
   }  
})


// ================================================================================
// setting up the click event for displaying dark mode styles. 
// ================================================================================
darkMode.addEventListener('click', function(){
    localStorage.setItem('darkmode', darkMode)
    $dayInfo.classList.toggle('darkmode')
    
    
})
// ================================================================================
// setting up the click event for displaying light mode styles. 
// ================================================================================
lightMode.addEventListener('click', function(){
    localStorage.setItem('lightmode', lightMode)
    $dayInfo.classList.toggle('lightmode')
    

})



