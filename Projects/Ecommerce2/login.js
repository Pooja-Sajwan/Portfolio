var input = document.querySelectorAll("input")
var btn = document.querySelectorAll("button")[0]
var form = document.querySelector("form")
var span = document.querySelectorAll("span")
var lstore = JSON.parse(localStorage.getItem("lstorage"))
var navigate = document.querySelector("#navi")
console.log(navigate)
console.log(lstore)

form.addEventListener("submit", (e) => {
    var flag = true

    span.forEach((e)=>{
        e.innerHTML=""
    })

    var matching = lstore.find((e)=>{
        if ((input[0].value==e.email || input[0].value==e.mobile) && input[1].value==e.passw) {
            return e
        }
    })

    if (input[0].value == "" && input[1].value == "") {
        span[0].innerHTML = "User name is required"
        span[1].innerHTML = "Password is required"
        e.preventDefault()
        flag=false
    }
    else if (input[0].value == "") {
        span[0].innerHTML = "User name is required"
        e.preventDefault()
        flag=false
    }
    else if (input[1].value == "") {
        span[1].innerHTML = "Password is required"
        e.preventDefault()
        flag=false
    }
    else if (matching) {
        alert("Boss welcome to the page")   
    }
    else {
        span[2].innerHTML="Wrong Creditinals"
        e.preventDefault()
        flag=false
    }
    if (flag) {
        localStorage.setItem("Login",JSON.stringify(matching))
        navigate.href= "./home.html"
        //to convert into JSON

        
    }

})




