// Jquery part
$(document).ready(function () {
    
    $(window).scroll(function () {
        $('html').css('scroll-behaviour', 'smooth')
        $('html').css('scroll-padding', '10rem')
        $('#cards1').fadeIn(5000);

    });
    $("#card").slideDown(2000)
    $(window).scroll(function () {
        $('html').css('scroll-behaviour', 'smooth')
        $('html').css('scroll-padding', '10rem')
        $(".content").fadeIn(2000)
        $('.fa-building-columns').fadeIn(2000);
        $('.fa-school-flag').fadeIn(2000);
        $('.fa-building').fadeIn(2000); 
    });

});

//Javascript code
var btn1 = document.querySelector("#b1")
var btn2 = document.querySelector("#b2")
var btn3 = document.querySelector("#b3")
var btn4 = document.querySelector("#b4")




var a = null
var b = null
var cards= ["div0","div1","div2","div3","div4","div5","div6","div7"]
var disp = document.querySelector("#display")
var div = "<div class='dis "+cards[0]+"'>"
var count = 0

function loadDoc(a) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this, a);
        }
    };
    request.open("GET", "projects.xml", true);
    request.send();
}
function myFunction(xml, b) {
    var i;
    var xmlDoc = xml.responseXML;
    if (b == "All") {
        count=0
        disp.innerHTML = ""
        div = " "
        div += "<div class='dis "+cards[2]+"'>"
        var x = xmlDoc.getElementsByTagName("project");
        for (i = 0; i < x.length; i++) {

            div += "<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>"+"<img src='" + x[i].getElementsByTagName("image-path")[0].childNodes[0].nodeValue + "'></a>" + "<p><b>Languages : </b>" + x[i].getElementsByTagName("languages")[0].childNodes[0].nodeValue + "</p>"
                + "<p><b>Project Name : </b>"+"<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</a></p></div>"
            count++;
            if (count < x.length) {
                div += "<div class='dis "+cards[count]+"'>"
            }
        }
        disp.innerHTML = div;
        console.log(div)
        $('.dis').fadeIn(3000);
    }

    else if (b == "Landing Projects") {
        count=0
        disp.innerHTML = ""
        div = " "
        div += "<div class='dis "+cards[2]+"'>"
        var x = xmlDoc.getElementsByTagName("project");
        for (i = 0; i < x.length; i++) {
            if (i==2 || i==3) {
                div += "<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>"+"<img src='" + x[i].getElementsByTagName("image-path")[0].childNodes[0].nodeValue + "'></a>" + "<p><b>Languages : </b>" + x[i].getElementsByTagName("languages")[0].childNodes[0].nodeValue + "</p>"
                    + "<p><b>Project Name : </b>" +"<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</a></p></div>"
                count++;
                if (count < 2) {
                    div += "<div class='dis "+cards[i]+"'>"
                }
            }
        }
        disp.innerHTML = div;
        console.log(div)
        $('.dis').fadeIn(3000);
    }

    else if (b == "Responsive Projects") {
        count=0
        disp.innerHTML = ""
        div = " "
        div += "<div class='dis "+cards[2]+"'>"
        var x = xmlDoc.getElementsByTagName("project");
        for (i = 0; i < x.length; i++) {
            if (i==0 || i==1 || i==7) {
                div += "<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>"+"<img src='" + x[i].getElementsByTagName("image-path")[0].childNodes[0].nodeValue + "'></a>" + "<p><b>Languages : </b>" + x[i].getElementsByTagName("languages")[0].childNodes[0].nodeValue + "</p>"
                    + "<p><b>Project Name : </b>" +"<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</a></p></div>"
                count++;
                if (count < 3) {
                    div += "<div class='dis "+cards[i]+"'>"
                }
            }
        }
        disp.innerHTML = div;
        console.log(div)
        $('.dis').fadeIn(3000);
    }
    else if (b == "Player Projects") {
        count=0
        disp.innerHTML = ""
        div = " "
        div += "<div class='dis "+cards[0]+"'>"
        var x = xmlDoc.getElementsByTagName("project");
        for (i = 0; i < x.length; i++) {
            if (i == 4 || i == 5) {
                div += "<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>"+"<img src='" + x[i].getElementsByTagName("image-path")[0].childNodes[0].nodeValue + "'></a>" + "<p><b>Langauges : </b>" + x[i].getElementsByTagName("languages")[0].childNodes[0].nodeValue + "</p>"
                    + "<p><b>Project Name : </b>"+"<a href='"+x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue+"'>"  + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</a></p></div>"
                count++;
                if (count < 2) {
                    div += "<div class='dis "+cards[i]+"'>"
                }
            }
        }
        disp.innerHTML = div;
        console.log(div)
        $('.dis').fadeIn(3000);
    }
   
}

function change(btn5){
    btn5.style = "background-color:rgb(233, 233, 233); color: grey;"
}

loadDoc(btn1.innerHTML)
//<a href="./Projects/canva.html" style="color: white;"></a>
btn1.addEventListener("click", () => {
    loadDoc(btn1.innerHTML)
    change(btn2);
    change(btn3);
    change(btn4);
    btn1.style = "background-color:greenyellow; color: black;"
})
btn2.addEventListener("click", () => {
    loadDoc(btn2.innerHTML)
    btn2.style = "background-color:greenyellow; color: black;"
    change(btn1);
    change(btn3);
    change(btn4);
})
btn3.addEventListener("click", () => {
    loadDoc(btn3.innerHTML)
    btn3.style = "background-color:greenyellow ; color: black;"
    change(btn1);
    change(btn2);
    change(btn4);
})
btn4.addEventListener("click", () => {
    loadDoc(btn4.innerHTML)
    btn4.style = "background-color:greenyellow ; color: black;"
    change(btn1);
    change(btn2);
    change(btn3);
})














