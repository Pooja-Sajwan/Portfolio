var input=document.querySelectorAll("input")
var sp=document.querySelectorAll("span")
var form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    var flag=true
    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[a-zA-Z0-9~!#$@%^&*()_+-|/":]{8,15}$/

    if (input[0].value=="") { //to check whether the user name is empty
        sp[0].innerHTML="**First name required <br>"
        e.preventDefault()
        flag=false
    }
    else if(regx.test(input[0].value)){//to check whether the username is staisfying regx confition or not
        sp[0].innerHTML=""
    }
    else{
        sp[0].innerHTML="**Invalid First Name <br>"
        e.preventDefault()
        flag=false
    }

    if (input[1].value=="") { //to check whether the user name is empty
        sp[1].innerHTML="**Last Name required <br>"
        e.preventDefault()
        flag=false
    }
    else if(regx.test(input[0].value)){//to check whether the username is staisfying regx confition or not
        sp[1].innerHTML=""
    }
    else{
        sp[1].innerHTML="**Invalid Last Name <br>"
        e.preventDefault()
        flag=false
    }

    if (input[2].value=="") {
        sp[2].innerHTML="**Email Required <br>"
        e.preventDefault()
        flag=false
    }

    if (input[3].value=="") {
        sp[3].innerHTML="**Phone Number Required <br>"
        e.preventDefault()
        flag=false
    }
    else if (regx1.test(input[3].value)) {
        sp[3].innerHTML=""
    }
    else{
        sp[3].innerHTML="**Invalid Phone Number <br>"
        e.preventDefault()
        flag=false
    }
    if(flag){
        alert("Thankyou \nWill get back to you soon !")
    }
})