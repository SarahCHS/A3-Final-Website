console.log("Javascript is working!");

// for custom cursor
const cursorDot = document.querySelector('[data-cursor-dot]'); 
const cursorOutline = document.querySelector('[data-cursor-outline]');

//for background sound
let mySong = document.querySelector('#mysong');
let soundIcon = document.querySelector('#sound-icon');

//for dog sound
let dogSound =document.getElementById('dog-sound');
let dogImage = document.querySelector('.dog-container img');

//for bat sound
let batSound = document.getElementById('bat-sound');
let batImage = document.querySelector('.bat img');

// get buttons and different divs
let discoverBtn = document.querySelector('.discover');
let skullImg = document.querySelector('#skull');
let welcomeInfo = document.querySelector('.welcome-info');
let ink1 = document.querySelector('#ink1');
let fullWebsite = document.querySelector('#web-content');
let myNav = document.querySelector('nav');

let startingScreen = document.querySelector('#starting-screen');
let statScreen = document.querySelector('#statistic');



// ================================== FOR CUSTOM CURSOR ================================================

// To animate the custom cursor
window.addEventListener('mousemove', function (e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = posX + 'px';
    cursorDot.style.top = posY + 'px';


    cursorOutline.animate({
        left: posX + 'px',
        top: posY + 'px',
    }, {duration:500, fill: "forwards"});
});



// ================================== FOR BACKGROUND MUSIC ================================================
// switching the audio on/off when the sound icon is clicked on
soundIcon.onclick = function (){

    if (mySong.paused) { 
        mySong.play();  // if background audio is playing, chang the sound img to sound on
        soundIcon.src = 'images/soundon.png';
    } else {
        mySong.pause(); // else if background audio is paused, chang the sound img to sound off 
        soundIcon.src = 'images/soundoff.png';
    }
};



// ================================== FOR DOG SOUND ================================================
function playDogHoverSound() {
    dogSound.currentTime = 0;
    dogSound.play();
}

dogImage.addEventListener('mouseenter', playDogHoverSound); // plays the dog audio when the dog gif is hovered over




// ================================== FOR BAT SOUND ================================================
function playBatHoverSound() {
    batSound.currentTime = 0;
    batSound.play();
    batSound.volume = 0.6;
}

batImage.addEventListener('mouseenter', playBatHoverSound), // plays the bat audio when the dog gif is hovered over











// ================================== FOR STARTING SCREEN ANIMATION ================================================
discoverBtn.addEventListener ('click', function(){  //add a click event
    console.log('You clicked discover button!');
    skullImg.style.transition = 'right 1.4s ease-out 0s'; // when the discover button is clicked, create the fade-out animation of the elements on the website
    skullImg.style.right = '100%';

    welcomeInfo.style.transition = 'right 3s ease-out 0s';
    welcomeInfo.style.right = '-100%';

    ink1.style.transition = 'right 3s ease-in 0.6s'; // make the ink background slide to the rights
    ink1.style.right = '-30%';



    // Runs the animation for the statistic screen after a certain period of time
    setTimeout (statAnimate,3280);  
    function statAnimate () {

        statScreen.style.display = 'block';
        console.log('Success display of statistic screen!');

        console.log ('check animate');  

        // Include anime.js text animation  
        var textWrapper = document.querySelector('#statistic-p');  // Wrap every letter in a span
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        /* global anime */
        anime.timeline({loop: false})
        .add({
        targets: '#statistic-p .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 5000,
        delay: function(el, i) {
            return 5* (i+1);
        }})
        .add({
        targets: '#statistic-p',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
        });

        startingScreen.style.display = 'none';  // Once the text animation is done, display starting screen to none
        document.body.style.background = '#1c1911'; // change background to darker brown colour
        console.log('Success fade out of starting screen!');
    }

    setTimeout (disappearStat,10000);  // Give a certain amout of time to remove Statistic screen and display id web-content 
    function disappearStat () {
        statScreen.style.display = 'none';

        fullWebsite.style.display = 'block';

        myNav.style.transition = 'top 2s ease-out 0s';  // Animates the nav bar into the webpage 
        myNav.style.top = '0';
    }
});










// =========================================== FOR ALL THE ANIMATION IN WEB CONTENT DIV ================================================

fullWebsite.addEventListener('animationend', function(){ // Waits for the previous animation to end first

    // Change the colour of the background when the main contents of the websites are being displayed
    if (fullWebsite.style.display === 'block') {
        document.body.style.background = '#D2D1C6';
    }

    /* global gsap */
    gsap.registerPlugin(ScrollTrigger); /* global ScrollTrigger */
    

    // IN CAUSES SCREEN
    // For the animation of the texts in the CAUSES SCREEN that will make them appear with gsap scroll trigger  
    gsap.to('.causes-text p, .causes-text h4, br', {
        x: '100vw',
        duration: 2,
        scrollTrigger: {
            trigger: '.spacer1',
            start: 'top 75%',
            end: 'top 35%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });
    
    // For the animation of the dog gif that will make it appear with gsap scroll trigger  
    gsap.to('.dog', {
        x: '-87vw',
        duration: 2,
        scrollTrigger: {
            trigger: '#causes-screen',
            start: 'top 75%',
            end: 'top 35%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });






    // ================================================ IN EXPOSURE SCREEN ================================================

    // For the animation of ink3 that will make it appear with gsap scroll trigger  
    gsap.to('#ink3', {   
        x: '150vw',
        duration: 2,
        scrollTrigger: {
            trigger: '#ink3-container',
            start: 'top 90%',
            end: 'top 10%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });

    // For the animation of the contents inside exposure-screen that will make it appear with gsap scroll trigger  
    gsap.set('.exposure-text, .exposure-images, .line-container', {y: '150%'});  // place the elements further down the page before the animation

    gsap.to('.exposure-text, .exposure-images, .line-container', {   
        y: '0',
        duration: 2,
        scrollTrigger: {
            trigger: '.spacer2' ,
            start: 'top 50%',
            end: 'top 50%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });


    // For the animation of SVG line  
    gsap.to('#line', {   
        x: '100%',
        duration: 2,
        scrollTrigger: {
            trigger: '#line-container',
            start: 'top 90%',
            end: 'top 10%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });




    // ================================================ IN PREVENT SCREEN ================================================

    // For the animation of the bat gif that will make it appear with gsap scroll trigger  
    gsap.to('.bat', {
        x: '55%',
        duration: 2,
        scrollTrigger: {
            trigger: '#prevent-screen',
            start: 'top 75%',
            end: 'top 25%',
            scrub: false,
            toggleActions: 'play none none none',   
        }
    });
    

    // For the animation of the texts in the PREVENT SCREEN that will make them appear with gsap scroll trigger   
    gsap.to('.prevent-text h4, .prevent-text p', {
        x: '-100%',
        duration: 2,
        scrollTrigger: {
            trigger: '#prevent-screen',
            start: 'top 75%',
            end: 'top 25%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });

    // ================================================ IN END SCREEN ================================================

    // For the animation of ink4 that will make it appear with gsap scroll trigger  
    gsap.set('#ink4', {y: '100%'});

    gsap.to('#ink4', {   
        y: '0',
        duration: 2,
        scrollTrigger: {
            trigger: '#end-screen',
            start: 'top 90%',
            end: 'top 10%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });

    // For the animation of end-info that will make it appear with gsap scroll trigger  
    gsap.set('#end-info', {y: '150%'});

    gsap.to('#end-info', {   
        y: '35%',
        duration: 2,
        scrollTrigger: {
            trigger: '#end-screen',
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            toggleActions: 'play none none none',
        }
    });

});