$(".first-nav").slideDown().animate({
    Transition: "opacity .1s ",
    opacity: "0.5",
}).animate({
    top: "5.6vh",
    opacity: "30",
});
$(".box1").animate({
    left: "0",
    width: "100%",
    height: "100%",
    Transition: "1s",
});
$(".secound-div").animate({
    paddingTop: "65mm",
    Transition: "1s",
    opacity: "1"
})
$(".h6").animate({
    top: "0.5vh",
    Transition: "4s",
})
$(".card9").animate({
    width: "55vh",
    opacity: "1",
    Transition: "1s",
}
)
$(".card10").animate({
    width: "55vh",
    opacity: "1",
    Transition: "1s",
}
)
$(".card11").animate({
    width: "55vh",
    opacity: "1",
    Transition: "1s",
}
)
window.onscroll = function (){
    myfunction()
}
document.querySelectorAll("a")[2].addEventListener("mouseover", function(){
    $(".secound-nav").slideDown();
    $(".card1").fadeIn().animate({opacity: "1",Transition: "0.1s"});
    $(".card2").fadeIn().animate({opacity: "1",Transition: "0.3s"});
    $(".card3").fadeIn().animate({opacity: "1",Transition: "0.8s"});
    $(".card4").fadeIn().animate({opacity: "1",Transition: "1.2s"});
    document.querySelector(".secound-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelectorAll("a")[3].addEventListener("mouseover", function(){
        $(".secound-nav").slideUp();
        document.querySelector("h2").style.color = "black";
        document.querySelector("first-nav").style.backgroundColor = "white";
        document.querySelectorAll("a")[3].style.color = "black";
        document.querySelectorAll("a")[4].style.color = "black";
        document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    })
})

document.querySelectorAll("a")[3].addEventListener("mouseover", function(){
    $(".third-nav").slideDown();
    $(".card5").fadeIn().animate({opacity: "1",Transition: "0.1s"})
    $(".card6").fadeIn().animate({opacity: "1",Transition: "0.3s"})
    $(".card7").fadeIn().animate({opacity: "1",Transition: "0.8s"})
    $(".card8").fadeIn().animate({opacity: "1",Transition: "1.2s"})
    document.querySelector(".third-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelectorAll("a")[2].addEventListener("mouseover", function(){
        $(".third-nav").slideUp();
        document.querySelector("h2").style.color = "black";
        document.querySelector(".first-nav").style.backgroundColor = "white";
        document.querySelectorAll("a")[2].style.color = "black";
        document.querySelectorAll("a")[3].style.color = "black";
        document.querySelectorAll("a")[4].style.color = "black";
        document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    })
})

document.querySelector(".div1").addEventListener("mouseover", function(){
    $(".secound-nav").slideUp();
    $(".card1").animate({opacity: "0.01",Transition: ""});
    $(".card2").animate({opacity: "0.01",Transition: ""});
    $(".card3").animate({opacity: "0.01",Transition: ""});
    $(".card4").animate({opacity: "0.01",Transition: ""});
    document.querySelector("h2").style.color = "white";
    document.querySelector("body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    $(".third-nav").slideUp();
    $(".card5").animate({opacity: "0.01",Transition: ""});
    $(".card6").animate({opacity: "0.01",Transition: ""});
    $(".card7").animate({opacity: "0.01",Transition: ""});
    $(".card8").animate({opacity: "0.01",Transition: ""});
    document.querySelector("h2").style.color = "white";
    document.querySelector("body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    $(".fourth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = ""; 
    document.querySelector(".fourth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "white";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fourth-nav").style.backgroundColor = "";
    document.querySelector("body").style.background = "";
    $(".fifth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = ""; 
    document.querySelector(".fifth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "white";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fifth-nav").style.backgroundColor = "";
    document.querySelector("body").style.background = "";
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector("h2").style.color = "white";
    document.querySelector("body").style.background = "";
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector("h2").style.color = "white";
    document.querySelector("body").style.background = "";
})

document.querySelectorAll("li")[3].addEventListener("dblclick", function (){
    $(".fourth-nav").slideDown();
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector(".fourth-nav").classList.add("visibility");
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelector(".fourth-nav").style.backgroundColor = "white";
    document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
})

document.querySelectorAll("li")[3].addEventListener("click", function (){ 
    $(".fourth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = ""; 
    document.querySelector(".fourth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "white";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fourth-nav").style.backgroundColor = "";
    document.querySelector("body").style.background = "";
})

document.querySelectorAll("li")[4].addEventListener("dblclick", function(){
    $(".fifth-nav").slideDown();
    document.querySelector(".fifth-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
})

document.querySelectorAll("li")[4].addEventListener("click", function (){ 
    $(".fifth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = ""; 
    document.querySelector(".fifth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "white";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fifth-nav").style.backgroundColor = "";
    document.querySelector("body").style.background = "";
})

document.querySelectorAll("li")[5].addEventListener("dblclick", function(){
    $(".sixth-nav").slideDown();
    document.querySelector(".sixth-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelector("h2").style.color = "black";
    document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
})

document.querySelectorAll("li")[5].addEventListener("click", function(){
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector("h2").style.color = "";
    document.querySelector("body").style.background = "";
})

document.querySelector(".secound-nav").addEventListener("mouseleave", function(){
    $(".secound-nav").slideUp();
    $(".card1").animate({opacity: "0.01",Transition: ""});
    $(".card2").animate({opacity: "0.01",Transition: ""});
    $(".card3").animate({opacity: "0.01",Transition: ""});
    $(".card4").animate({opacity: "0.01",Transition: ""});
    document.querySelector("h2").style.color = "white";
    document.querySelector("body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
})

document.querySelector(".third-nav").addEventListener("mouseleave", function(){
    $(".third-nav").slideUp();
    $(".card5").animate({opacity: "0.01",Transition: ""});
    $(".card6").animate({opacity: "0.01",Transition: ""});
    $(".card7").animate({opacity: "0.01",Transition: ""});
    $(".card8").animate({opacity: "0.01",Transition: ""});
    document.querySelector("h2").style.color = "white";
    document.querySelector("body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
})

document.querySelector("body").addEventListener("click", function(){
    $(".fourth-nav").slideUp();
    $(".fifth-nav").slideUp();
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".fifth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.backgroundColor = ""; 
    document.querySelector(".fourth-nav").classList.remove("visibility");
    document.querySelector(".secound-nav").classList.remove("visibility")
    document.querySelector(".third-nav").classList.remove("visibility")
    document.querySelector("h2").style.color = "white";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fourth-nav").style.backgroundColor = "";
    document.querySelector("body").style.background = "";
})
function myfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.querySelector(".first-nav").style.top = "3mm";
        document.querySelector(".first-nav").style.border = "thin solid #eaeaea";
        document.querySelector(".first-nav").style.background = "linear-gradient(142deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 98%)";
        document.querySelector(".secound-nav").style.top = "22mm";
        document.querySelector(".third-nav").style.top = "22mm";
        document.querySelector(".fourth-nav").style.top = "22mm";
        document.querySelector(".fifth-nav").style.top = "22mm";
        document.querySelector(".sixth-nav").style.top = "mm";
        document.querySelectorAll("a")[2].style.color = "#595959";
        document.querySelectorAll("a")[3].style.color = "#595959";
        document.querySelectorAll("a")[4].style.color = "#595959";
        document.querySelector("h2").style.color = "black";
        document.querySelectorAll("a")[5].addEventListener("dblclick", function (){
            $(".fourth-nav").slideDown();
            document.querySelector(".first-nav").style.backgroundColor = "white";
            document.querySelector(".fourth-nav").classList.add("visibility");
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "black";
            document.querySelectorAll("a")[3].style.color = "black";
            document.querySelectorAll("a")[4].style.color = "black";
            document.querySelector(".fourth-nav").style.backgroundColor = "white";
            document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
        })
        document.querySelector("body").addEventListener("click", function(){
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "#595959";
            document.querySelectorAll("a")[3].style.color = "#595959";
            document.querySelectorAll("a")[4].style.color = "#595959";
        })
        document.querySelector(".secound-nav").addEventListener("mouseleave", function(){
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "#595959";
            document.querySelectorAll("a")[3].style.color = "#595959";
            document.querySelectorAll("a")[4].style.color = "#595959"; 
        })
        document.querySelectorAll("a")[2].addEventListener("mouseover", function(){
            document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
        })
        document.querySelectorAll("a")[3].addEventListener("mouseover", function(){
            document.querySelector("body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
        })
        document.querySelector(".third-nav").addEventListener("mouseleave", function(){
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "#595959";
            document.querySelectorAll("a")[3].style.color = "#595959";
            document.querySelectorAll("a")[4].style.color = "#595959"; 
        })
        document.querySelectorAll("li")[5].addEventListener("dblclick", function(){
            document.querySelector(".first-nav").style.background = "";
            document.querySelector(".first-nav").style.border = "";
        })
        $(".navbar").animate({
            top: "-1vh",
        })
        document.querySelector(".navbar").style.background = "linear-gradient(142deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 98%)";
        document.querySelector(".mobile-nav").style.top = "1.9vh";
        document.querySelector(".mobile-nav").style.zIndex = "3";
        document.querySelector(".MTQ").style.color = "black";
        document.querySelector(".BTQ").style.backgroundColor = "black";
        document.querySelector(".CTQ").style.color = "black";
        document.querySelector(".toggle-icon").addEventListener("click", function(){
            document.querySelector(".navbar").style.backgroundColor = "white";
        })
    }else{
        document.querySelector(".first-nav").style.top = "9mm";
        document.querySelector(".first-nav").style.background = "";
        document.querySelector(".first-nav").style.border = "";
        document.querySelectorAll("a")[2].style.color = "";
        document.querySelectorAll("a")[3].style.color = "";
        document.querySelectorAll("a")[4].style.color = "";
        document.querySelector("h2").style.color = "white";
        document.querySelector(".navbar").style.background = "";
        document.querySelector(".mobile-nav").style.top = "3vh";
        document.querySelector(".MTQ").style.color = "white";
        document.querySelector(".CTQ").style.color = "white";
        document.querySelector(".BTQ").style.backgroundColor = "";
        document.querySelector(".secound-nav").addEventListener("mouseleave", function(){
            document.querySelector("h2").style.color = "white";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = ""; 
        })
        document.querySelector(".third-nav").addEventListener("mouseleave", function(){
            document.querySelector("h2").style.color = "white";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = ""; 
        })
        document.querySelector("body").addEventListener("click", function(){
            document.querySelector("h2").style.color = "white";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = "";
        })
        document.querySelector(".toggle-icon").addEventListener("click", function(){
            document.querySelector(".navbar").style.backgroundColor = "white";
            document.querySelector(".MTQ").style.color = "black";
            document.querySelector(".BTQ").style.backgroundColor = "black";
            document.querySelector(".CTQ").style.color = "black";
        })
    }
}

document.querySelector(".fav1").addEventListener("mouseover", function(){
    $(".fv1").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv1").style.display = "block";
})
document.querySelector(".first-chev").addEventListener("mouseover", function(){
    document.querySelector(".first-chev").style.display = "none";
    document.querySelector(".bi").style.display = "block";
})
document.querySelector(".secound-chev").addEventListener("mouseover", function(){
    document.querySelector(".secound-chev").style.display = "none";
    document.querySelector(".b1").style.display = "block";
})


document.querySelector(".fav1").addEventListener("mouseleave", function(){
    $(".fv1").animate({
        opacity: "",
        Transition: "",
    })
    document.querySelector(".first-chev").style.display = "block";
    document.querySelector(".secound-chev").style.display = "block";
    document.querySelector(".bi").style.display = "none";
    document.querySelector(".b1").style.display = "none";
})

document.querySelector(".fav2").addEventListener("mouseover", function(){
    $(".fv2").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv2").style.display = "block";
})

document.querySelector(".third-chev").addEventListener("mouseover", function(){
    document.querySelector(".third-chev").style.display = "none";
    document.querySelector(".b2").style.display = "block";
})
document.querySelector(".fourth-chev").addEventListener("mouseover", function(){
    document.querySelector(".fourth-chev").style.display = "none";
    document.querySelector(".b3").style.display = "block";
})
document.querySelector(".fav2").addEventListener("mouseleave", function(){
    $(".fv2").animate({
        opacity: "0",
        Transition: "0.1s", 
    })
    document.querySelector(".third-chev").style.display = "block";
    document.querySelector(".fourth-chev").style.display = "block";
    document.querySelector(".b2").style.display = "none";
    document.querySelector(".b3").style.display = "none";
})

document.querySelector(".fav3").addEventListener("mouseover", function(){
    $(".fv3").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv3").style.display = "block";
})
document.querySelector(".fifth-chev").addEventListener("mouseover", function(){
    document.querySelector(".fifth-chev").style.display = "none";
    document.querySelector(".b4").style.display = "block";
})
document.querySelector(".sixth-chev").addEventListener("mouseover", function(){
    document.querySelector(".sixth-chev").style.display = "none";
    document.querySelector(".b5").style.display = "block";
})

document.querySelector(".fav3").addEventListener("mouseleave", function(){
    $(".fv3").animate({
        opacity: "0",
        Transition: "0.1s",
    })
    document.querySelector(".fifth-chev").style.display = "block";
    document.querySelector(".b4").style.display = "none";
    document.querySelector(".sixth-chev").style.display = "block";
    document.querySelector(".b5").style.display = "none";
})

document.querySelector(".fav4").addEventListener("mouseover", function(){
    $(".fv4").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".seventh-chev").addEventListener("mouseover", function(){
    document.querySelector(".seventh-chev").style.display = "none";
    document.querySelector(".b6").style.display = "block";
})

document.querySelector(".eight-chev").addEventListener("mouseover", function(){
    document.querySelector(".eight-chev").style.display = "none";
    document.querySelector(".b7").style.display = "block";
})

document.querySelector(".fav4").addEventListener("mouseleave", function(){
    $(".fv4").animate({
        opacity: "0",
        Transition: "0.1s"
    })
})

document.querySelector(".fav5").addEventListener("mouseover", function(){
    $(".fv5").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".nineth-chev").addEventListener("mouseover", function(){
    document.querySelector(".nineth-chev").style.display = "none";
    document.querySelector(".b8").style.display = "block";
})

document.querySelector(".tenth-chev").addEventListener("mouseover", function(){
    document.querySelector(".tenth-chev").style.display = "none";
    document.querySelector(".b9").style.display = "block";
})

document.querySelector(".fav5").addEventListener("mouseleave", function(){
    $(".fv5").animate({
        opacity: "0",
        Transition: "0.1s"
    })
    document.querySelector(".nineth-chev").style.display = "block";
    document.querySelector(".b8").style.display = "none";
    document.querySelector(".tenth-chev").style.display = "block";
    document.querySelector(".b9").style.display = "none";
})

document.querySelector(".fav6").addEventListener("mouseover", function(){
    $(".fv6").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".eleventh-chev").addEventListener("mouseover", function(){
    document.querySelector(".eleventh-chev").style.display = "none";
    document.querySelector(".b10").style.display = "block"
})

document.querySelector(".twelth-chev").addEventListener("mouseover", function(){
    document.querySelector(".twelth-chev").style.display = "none";
    document.querySelector(".b11").style.display = "block"
})

document.querySelector(".fav6").addEventListener("mouseleave", function(){
    $(".fv6").animate({
        opacity: "0",
        Transition: "0.1s"
    })
    
    document.querySelector(".eleventh-chev").style.display = "block";
    document.querySelector(".b10").style.display = "none";
    document.querySelector(".twelth-chev").style.display = "block";
    document.querySelector(".b11").style.display = "none"
})

document.querySelector(".fav7").addEventListener("mouseover", function() {
    $(".fv7").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".thirteenth-chev").addEventListener("mouseover", function(){
    document.querySelector(".thirteenth-chev").style.display = "none";
    document.querySelector(".b12").style.display = "block";
})

document.querySelector(".fourtheenth-chev").addEventListener("mouseover", function(){
    document.querySelector(".fourtheenth-chev").style.display = "none";
    document.querySelector(".b13").style.display = "block";
})

document.querySelector(".fav7").addEventListener("mouseleave", function(){
    $(".fv7").animate({
        opacity: "0",
        Transition: "0.1s"
    })
    document.querySelector(".thirteenth-chev").style.display = "block";
    document.querySelector(".b12").style.display = "none";
    document.querySelector(".fourtheenth-chev").style.display = "block";
    document.querySelector(".b13").style.display = "none";
})

document.querySelector(".fav8").addEventListener("mouseover", function (){
    $(".fv8").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".fifteen-chev").addEventListener("mouseover", function(){
    document.querySelector(".fifteen-chev").style.display = "none";
    document.querySelector(".b14").style.display = "block";
})

document.querySelector(".sixteen-chev").addEventListener("mouseover", function(){
    document.querySelector(".sixteen-chev").style.display = "none";
    document.querySelector(".b15").style.display = "block";
})

document.querySelector(".fav8").addEventListener("mouseleave", function(){
    $(".fv8").animate({
        opacity: "0",
        Transition: "0.1s"
    })
    document.querySelector(".fifteen-chev").style.display = "block";
    document.querySelector(".b14").style.display = "none";
    document.querySelector(".sixteen-chev").style.display = "block";
    document.querySelector(".b15").style.display = "none";
})

document.querySelector(".fav9").addEventListener("mouseover", function(){
    $(".fv9").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".st-chev").addEventListener("mouseover", function(){
    document.querySelector(".st-chev").style.display = "none";
    document.querySelector(".button1").style.display = "block";
})

document.querySelector(".bt-chev").addEventListener("mouseover", function(){
    document.querySelector(".bt-chev").style.display = "none";
    document.querySelector(".button2").style.display = "block";
})

document.querySelector(".fav9").addEventListener("mouseleave", function(){
    $(".fv9").animate({
        opacity: "0",
        Transition: "0.1s"
    })
    document.querySelector(".st-chev").style.display = "block";
    document.querySelector(".button1").style.display = "none";
    document.querySelector(".bt-chev").style.display = "block";
    document.querySelector(".button2").style.display = "none";
})

document.querySelector(".fav10").addEventListener("mouseover", function(){
    $(".fv10").animate({
        opacity: "1",
        Transition: "0.1s"
    })
})

document.querySelector(".jt-chev").addEventListener("mouseover", function(){
    document.querySelector(".jt-chev").style.display = "none";
    document.querySelector(".button3").style.display = "block";
})

document.querySelector(".mt-chev").addEventListener("mouseover", function(){
    document.querySelector(".mt-chev").style.display = "none";
    document.querySelector(".button4").style.display = "block";
})

document.querySelector(".fav10").addEventListener("mouseleave", function(){
    $(".fv10").animate({
        opacity: "0",
        Transition: "0.1s"
    })
    document.querySelector(".jt-chev").style.display = "block";
    document.querySelector(".button3").style.display = "none";
    document.querySelector(".mt-chev").style.display = "block";
    document.querySelector(".button4").style.display = "none";
})

const previous = document.querySelector('.Previous')
const next_bar = document.querySelector('.next-bar')
const carousel = document.querySelector('.item-list1')
const itemWidths = 390
const paddings = 10

previous.addEventListener('click',()=>{
  carousel.scrollLeft -= (itemWidth + padding)
})
next_bar.addEventListener('click',()=>{
  carousel.scrollLeft += (itemWidth + padding)
})



// mobile section
document.querySelector(".toggle-icon").addEventListener("click", function(){
    document.querySelector(".navbar").style.backgroundColor = "white";
    document.querySelector(".MTQ").style.color = "black";
    document.querySelector(".BTQ").style.backgroundColor = "black";
    document.querySelector(".CTQ").style.color = "black";
})


const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')
const list = document.querySelector('.item-list')
const itemWidth = 390
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})

