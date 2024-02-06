var img1 = document.querySelector("img")
var audi= document.querySelector("audio")
var back= document.querySelector(".fa-backward")
var pause = document.querySelector(".fa-pause")
var play = document.querySelector(".fa-play")
var next = document.querySelector(".fa-forward")
var shuffle = document.querySelector(".fa-shuffle")
var volume_btn = document.querySelector("#volume")
var audi_drag = document.getElementById("audi_range")
var n = document.querySelector("#audi_name")
var singer = document.querySelector("#singer")


//object inside array
var storage = [{a_src: "./Audio/fitoor.mp3", i_src:"./Music_Images/fitoor.webp",n:"Fitoor",
                    sing: "Arijit Singh & Neeti Mohan"},
            {a_src: "./Audio/haseen.mp3", i_src:"./Music_Images/roja.jpg",n:"Haseen Vaadiyaan",
            sing: "A.R.Rehman, K.Chitra & S.P.Balasubramanyam"},
            {a_src: "./Audio/jhumta.mp3", i_src:"./Music_Images/mausam.jpg",n:"Jhumta Mausam",
            sing: "Lata Mangeshkar & Manna Dey"},
            {a_src: "./Audio/leja-re.mp3", i_src:"./Music_Images/leja.jpg",n:"Leja-Re",
            sing: "Dhvani Bhanushali"},
            {a_src: "./Audio/Pranavalaya.mp3", i_src:"./Music_Images/pranavalaya.avif",n:"Pranavalaya",
            sing: "Anurag Kulkarni"},
            {a_src: "./Audio/radha.mp3", i_src:"./Music_Images/radha.webp",n:"Radha",
            sing: "Dhvani Bhanushali"}
        ]

var index =0
var realTime=0

function play1(){
    img1.src=storage[index].i_src  
    audi.src = storage[index].a_src
    n.innerHTML= `<i> ${storage[index].n} </i>`
    singer.innerHTML= storage[index].sing
    audi.currentTime = realTime;
    audi.play()

    setInterval(()=>{
        audi_drag.value= (audi.currentTime/audi.duration)*100
        // if the input is between 0-100 then value will be between 0-100
        // duration : total time of the song 
        //if current time is 60s and total duration is 300s(5 min) then to get value between
        //0-100 the answer will be 20% 
    },1000)

    
    //song is playing so pause btn should appear
    play.style.display= "none"
    pause.style.display="inline"
}

function pausePlay(){
    if(audi.paused){
        play1();
    }
    else{
        audi.pause();
        realTime=audi.currentTime
        play.style.display="inline"
        pause.style.display="none"
    }
}

play.addEventListener("click",pausePlay)
pause.addEventListener("click",pausePlay)

next.addEventListener("click",()=>{
    index = (index+1)%storage.length
    realTime=0
    play1()
})

back.addEventListener("click",()=>{
    index = (index-1+storage.length)%storage.length
    realTime=0
    play1()
})

shuffle.addEventListener("click",()=>{
    index = Math.floor(Math.random()*storage.length)
    play1()
})

volume_btn.addEventListener("input",()=>{
    audi.volume = volume_btn.value 
})

audi_drag.addEventListener("input",()=>{
    
    audi.currentTime= (audi_drag.value*audi.duration)/100
    //song will start playing wherever we click on the song.
    realTime = audi.currentTime
})

audi.addEventListener("ended",()=>{
    index = (index+1)%storage.length
    realTime=0
    play1()
})







