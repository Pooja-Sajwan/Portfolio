// Mobile version

var menu = document.querySelector("#bar")
var mob_head = document.querySelector("#mob_head")
var links = document.querySelector("#links")
var a_tags = document.querySelectorAll(".mob_a")

menu.addEventListener("click",()=>{
    if($('#mob_head').css("display")=="none"){
    mob_head.style="display:inline"
    links.style = "display:flex; flex-direction:column"
    }
    else if($('#mob_head').css("display")=="inline"){
        mob_head.style="display:none"
    }
})


