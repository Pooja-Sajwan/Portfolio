var inp = document.querySelectorAll("input")
var span = document.querySelectorAll("span")
var form = document.querySelector("form")
var storage=[]
var lstorage = JSON.parse(localStorage.getItem("lstorage"))

if(lstorage){
    storage = lstorage
}

//syntax for regular expression: /^[]{}$/ 
//first square bracket : what user can type
//curly : what is max-len and what is min-len

form.addEventListener("submit",(e)=>{
    var flag = true
    var regx = /^[a-zA-Z]{3,10}$/
    var num_regx=/^[6-9][0-9]{9}$/
    //the length is for other numbers (9 numbers)
    var psw_regx = /^[a-zA-Z0-9@#%*()^$!-?/|_+=]{8,15}$/

    if(inp[0].value==""){ //to check whether the first name is empty
        span[0].innerHTML = "First Name required <br>"
        e.preventDefault()
        flag = false
    }

    else if(regx.test(inp[0].value)) {
        //to check if given conditn is satisfied
        //if satisfied the func will return true and the else-if block will be excuted
        span[0].innerHTML = ""
        }

    else{
        span[0].innerHTML = "Invalid First Name <br>"
        e.preventDefault()
        flag = false
    }

    if (inp[1].value=="") {
        span[1].innerHTML = "Last name is required<br>"
        e.preventDefault()
        flag = false
    }

    else if(regx.test(inp[1].value)){
        span[1].innerHTML= ""
    }

    else{
        span[1].value = "Invalid Last Name<br>"
        e.preventDefault()
        flag = false
    }

    if (inp[2].value=="") {
        span[2].innerHTML = "Email is required<br>"
        e.preventDefault()
        flag = false
    }

    if (inp[3].value=="") {
        span[3].innerHTML = "Mobile Number is required<br>"
        e.preventDefault()
        flag = false
    }

    else if(num_regx.test(inp[3].value)){
        span[3].innerHTML =""
    }

    else{
        span[3].innerHTML = "Invalid Mobile number<br>"
        e.preventDefault()
        flag = false

    }

    if(inp[4].value==""){
        span[4].innerHTML = "Password is required<br>"
        e.preventDefault()
        flag = false
    }

    else if(psw_regx.test(inp[4].value)){
        span[4].innerHTML=""
    }

    else{
        span[4].innerHTML="Invalid password<br>"
        e.preventDefault()
        flag = false
    }

    if(inp[4].value!=inp[5].value){
        span[5].innerHTML="Password and confirm password does not match"
        e.preventDefault()
        flag = false
    }

    if(flag){
        var obj = {
            fname: inp[0].value,
            lname:inp[1].value,
            email: inp[2].value,
            mobile: inp[3].value,
            passw: inp[4].value
        }
       
        storage.push(obj)
        localStorage.setItem("lstorage",JSON.stringify(storage))
    }
})