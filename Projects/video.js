var vid = document.querySelector("video")
var play = document.querySelector(".fa-play")
var pause = document.querySelector(".fa-pause")
var back = document.querySelector(".fa-backward-step")
var next = document.querySelector(".fa-forward-step")
var skip_next = document.querySelector(".fa-rotate-right")
var skip_back = document.querySelector(".fa-rotate-left")
var album = document.querySelector("h1")
var vid_drag = document.querySelector("#timer")
var volume_btn = document.querySelector("#volume")
var full_screen = document.querySelector(".fa-expand")
var parent = document.querySelector("section")
var minimize = document.querySelector("#min_screen")
var ico = document.querySelector("#icons")
var main_ico= document.querySelector("main")
var body = document.querySelector("body")
// var section=document.querySelector("section")

var index= 0;
var realTime =0

var video_library = [{vide : "./Videos/Dandelions.mp4", name:"Dandelions"},
    {vide : "./Videos/Krishna.mp4", name:"Krishna Trance"},
    {vide : "./Videos/Infinity.mp4", name:"Infinity"},
    {vide : "./Videos/Ram.mp4", name:"Hum Katha Sunaate"},
    {vide : "./Videos/Radha.mp4", name:"Krishna-Radha Love Song"},
    {vide : "./Videos/Pranvalaya.mp4", name:"Pranvalaya Paahi (Divine Song)"},
    {vide : "./Videos/8-parche.mp4", name:"8-Parche"}]

function play_video(){
    vid.src= video_library[index].vide
    album.innerHTML = "<i>" +video_library[index].name+"</i>"
    vid.currentTime = realTime
    vid.play()

    setInterval(()=>{
        vid_drag.value= (vid.currentTime/vid.duration)*100
    },1000)

    play.style.display= "none"
    pause.style.display="inline"
}

function pausePlay(){
    
    if(vid.paused){
        play_video()
    }
    else{
        vid.pause()
        realTime=vid.currentTime
        play.style="display:inline"
        pause.style.display="none"
    }
}

play.addEventListener("click",pausePlay) //initially the video is paused
pause.addEventListener("click",pausePlay) //initially the video is playing

next.addEventListener("click",()=>{
    index = (index+1)%video_library.length
    realTime=0
    play_video()
})

back.addEventListener("click",()=>{
    index = (index-1+video_library.length)%video_library.length
    realTime=0
    play_video()
})

volume_btn.addEventListener("input",()=>{
    vid.volume = volume_btn.value 
})

vid_drag.addEventListener("input",()=>{
    
    vid.currentTime= (vid_drag.value*vid.duration)/100
    //song will start playing wherever we click on the song.
    realTime = vid.currentTime
})

vid.addEventListener("ended",()=>{
    index = (index+1)%video_library.length
    realTime=0
    play_video()
})

skip_next.addEventListener("click",()=>{
    realTime = vid.currentTime+10
    play_video()
})

skip_back.addEventListener("click",()=>{
    realTime = vid.currentTime-10
    play_video()
})

full_screen.addEventListener("click",()=>{
    // parent.style=" margin-top:2%"
    vid.style= "transform: scale(1.1)"
    // vid_drag.style = "width:82%"
    full_screen.style = "display:none"  
    ico.style = "margin-left:30%"
    main_ico.style="gap:30%"
    body.style = "overflow-y:auto; height:110vh"
    minimize.style = "display:inline"
})

minimize.addEventListener("click",()=>{
    parent.style="margin-top:5%;"
    vid.style = "width:100%; height:24rem"
    vid_drag.style = "width:56%"
    full_screen.style ="display:inline"
    ico.style="gap: 20%;"
    main_ico.style="gap: 33%;"
    body.style = "overflow-y:hidden; height:100vh"
    minimize.style="display:none"
})



    
