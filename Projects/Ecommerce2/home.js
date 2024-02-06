var login = JSON.parse(localStorage.getItem("Login"))
var username = document.querySelector("#username")
var right_div = document.querySelector("#right")
var male = document.querySelector("#male")
var cartDesign = document.querySelector("#cart")
var cross = document.querySelector("#cancel")
var cartBody = document.querySelector("#cart-body")

var men_prod = document.querySelector("#men")
var women_prod = document.querySelector("#women")
var beauty_prod = document.querySelector("#beauty")

if (login) {
    username.innerHTML = login.fname
    var logout = document.createElement("button")
    logout.innerHTML = "Logout"
    right_div.appendChild(logout)
    logout.addEventListener("click", () => {
        localStorage.removeItem("Login")

    })
}

//so that it takes time to fetch the data when the call stack is empty then only this 
//function will be loaded from callback queue to call stack for execution.

//await is used to resolve the promise so we dont have to write then and catch blocks
async function displayProduct() {
    try {
        var api = await fetch("https://www.shoppersstack.com/shopping/products/alpha")
        console.log(api)
        var apiJson = await api.json() //this will return one more promise because we converted it into json
        // to handle the promise again await is required 

        var data = apiJson.data
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
    return data
}

async function male_Data() {
    male.innerHTML = ""
    var data = await displayProduct()
    var maleData = data.filter((e) => {
        if (e.category == "men") {
            return e
        }
    })
    maleData.map((i) => {
        male.innerHTML += `<div class="cont" id="${i.productId}">
            <img src="${i.productImageURLs[0]}" alt="">
            <h2>${i.name}</h2>
            <p>${i.description}</p>
            <div>
                <h3>Price:Rs.${i.price}</h3>
                <h4>Ratings:${i.rating}</h4>
            </div>
            <button class="cart_btn">Add to Cart</button>
        </div>`
    })
    cart()

    return maleData

}

async function female_Data() {
    male.innerHTML = ""
    var data = await displayProduct()
    var female_data = data.filter((e) => {
        if (e.category == "women") {
            return e
        }
    })
    female_data.map((i) => {
        male.innerHTML += `<div class="cont" id="${i.productId}">
            <img src="${i.productImageURLs[0]}" alt="">
            <h2>${i.name}</h2>
            <p>${i.description}</p>
            <div>
                <h3>Price:Rs.${i.price}</h3>
                <h4>Ratings:${i.rating}</h4>
            </div>
            <button class="cart_btn">Add to Cart</button>
        </div>`
    })
    cart()
}

async function beauty_Data() {
    male.innerHTML = ""
    var data = await displayProduct()
    var beauty_data = data.filter((e) => {
        if (e.category == "beauty") {
            return e
        }
    })
    beauty_data.map((i) => {
        male.innerHTML += `<div class="cont" id="${i.productId}">
            <img src="${i.productImageURLs[0]}" alt="">
            <h2>${i.name}</h2>
            <p>${i.description}</p>
            <div>
                <h3>Price:Rs.${i.price}</h3>
                <h4>Ratings:${i.rating}</h4>
            </div>
            <button class="cart_btn">Add to Cart</button>
        </div>`
    })
    cart()
}


async function all_products() {
    male.innerHTML = ""
    var data = await displayProduct()
    male_Data()
    female_Data()
    beauty_Data()
    cart()
}

men_prod.addEventListener("click", (f) => {
    f.preventDefault()
    male_Data()
})

women_prod.addEventListener("click", (f) => {
    f.preventDefault()
    female_Data()
})

beauty_prod.addEventListener("click", (f) => {
    f.preventDefault()
    beauty_Data()
})

all_products()

function cart() {
    var button = document.querySelectorAll(".cart_btn")
    console.log(button)
    button.forEach((b) => {
        b.addEventListener("click", async () => {
            cartDesign.style.right = 0
            var parentEle = b.parentElement
            // console.log("Parent:"+parentEle)
            // var parentimg = parentEle.querySelector("img")
            // var pTitle = parentEle.querySelector("h2")
            // var pPrice = parentEle.querySelector("h3")

            var maleData = await male_Data()//returning a promise object

            console.log("Male:" + maleData)
            maleData.map((e) => {
                if (e.productId == parentEle.id) {
                    cartBody.innerHTML += `<div class="cart_body_design">
                    <div class="p_img">
                        <img src="${e.productImageURLs[0]}" alt="">
                    </div>
                    <div class="p_details">
                        <h3>Name: ${e.name}</h3>
                        <h4>${e.price} </h4>
                        <label>Qunatity</label>
                        <input type="number" value="1" name="" id="">
                    </div>
                    <div class="p_subtotal">
                        <p>SubTotal: </p>
                        <h2 class="sub_tot">${e.price}</h2>
                        <i class="fa-sharp fa-solid fa-square-minus" style="color:crimson ;"></i>
                    </div>
                </div>`
                }
            })
            var trash1 = document.querySelectorAll(".fa-square-minus")
            trash1.forEach((t) => {
                t.addEventListener("click", () => {
                    t.parentElement.parentElement.remove()
                    total()
                })
            })
            function subtotal() {
                var input = document.querySelectorAll("input")
                input.forEach((e) => {
                    e.addEventListener("input", () => {
                        if (e.value < 1) {
                            e.value = 1
                        }
                        var parent = e.parentElement.parentElement
                        var price = parent.querySelector("h4").innerHTML
                        var subtot = parent.querySelector("h2")
                        subtot.innerHTML = e.value * price
                        total()

                    })
                })
            }
            subtotal()
            function total() {
                var s_total = document.querySelectorAll(".sub_tot")
                var total = document.querySelector("#total")
                var sum = 0
                s_total.forEach((e) => {
                    var dummy = parseInt(e.innerHTML)
                    sum = sum + dummy
                })
                total.innerHTML = `Total: Rs. ${sum}`
            }
            total()
        })
    })
}

cross.addEventListener("click", () => {
    cartDesign.style.right = "-100%"
})


