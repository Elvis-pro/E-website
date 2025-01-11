$(".first-nav").slideDown().animate({
    Transition: "opacity .4s ",
    opacity: "0.5",
}).animate({
    top: "5.6vh",
    opacity: "30",
});
  

window.onscroll = function () {
    myfunction()
}
function myfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
        document.querySelectorAll("a")[5].addEventListener("dblclick", function () {
            $(".fourth-nav").slideDown();
            document.querySelector(".first-nav").style.backgroundColor = "white";
            document.querySelector(".fourth-nav").classList.add("visibility");
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "black";
            document.querySelectorAll("a")[3].style.color = "black";
            document.querySelectorAll("a")[4].style.color = "black";
            document.querySelector(".fourth-nav").style.backgroundColor = "white";
            document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
        })
        document.querySelector(".body").addEventListener("click", function () {
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "#595959";
            document.querySelectorAll("a")[3].style.color = "#595959";
            document.querySelectorAll("a")[4].style.color = "#595959";
        })
        document.querySelector(".secound-nav").addEventListener("mouseleave", function () {
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "#595959";
            document.querySelectorAll("a")[3].style.color = "#595959";
            document.querySelectorAll("a")[4].style.color = "#595959";
        })
        document.querySelectorAll("a")[2].addEventListener("mouseover", function () {
            document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
        })
        document.querySelectorAll("a")[3].addEventListener("mouseover", function () {
            document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
        })
        document.querySelector(".third-nav").addEventListener("mouseleave", function () {
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "#595959";
            document.querySelectorAll("a")[3].style.color = "#595959";
            document.querySelectorAll("a")[4].style.color = "#595959";
        })
        document.querySelectorAll("li")[5].addEventListener("dblclick", function () {
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
        document.querySelector(".toggle-icon").addEventListener("click", function () {
            document.querySelector(".navbar").style.backgroundColor = "white";
        })
    } else {
        document.querySelector(".first-nav").style.top = "12mm";
        document.querySelector(".secound-nav").style.top = "30mm";
        document.querySelector(".third-nav").style.top = "30mm";
        document.querySelector(".first-nav").style.background = "";
        document.querySelector(".first-nav").style.border = "";
        document.querySelectorAll("a")[2].style.color = "";
        document.querySelectorAll("a")[3].style.color = "";
        document.querySelectorAll("a")[4].style.color = "";
        document.querySelector("h2").style.color = "black";
        document.querySelector(".navbar").style.background = "";
        document.querySelector(".mobile-nav").style.top = "10mm";
        document.querySelector(".MTQ").style.color = "black";
        document.querySelector(".CTQ").style.color = "black";
        document.querySelector(".BTQ").style.backgroundColor = "black";
        document.querySelector(".secound-nav").addEventListener("mouseleave", function () {
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = "";
        })
        document.querySelector(".third-nav").addEventListener("mouseleave", function () {
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = "";
        })
        document.querySelector(".body").addEventListener("click", function () {
            document.querySelector("h2").style.color = "black";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = "";
        })
        document.querySelector(".toggle-icon").addEventListener("click", function () {
            document.querySelector(".navbar").style.backgroundColor = "white";
            document.querySelector(".MTQ").style.color = "black";
            document.querySelector(".BTQ").style.backgroundColor = "black";
            document.querySelector(".CTQ").style.color = "black";
        })
    }
}
document.querySelectorAll("a")[2].addEventListener("mouseover", function () {
    $(".secound-nav").slideDown();
    $(".card1").fadeIn().animate({ opacity: "1", Transition: "0.1s" });
    $(".card2").fadeIn().animate({ opacity: "1", Transition: "0.3s" });
    $(".card3").fadeIn().animate({ opacity: "1", Transition: "0.8s" });
    $(".card4").fadeIn().animate({ opacity: "1", Transition: "1.2s" });
    document.querySelector(".secound-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelectorAll("a")[3].addEventListener("mouseover", function () {
        $(".secound-nav").slideUp();
        document.querySelector("h2").style.color = "black";
        document.querySelector("first-nav").style.backgroundColor = "white";
        document.querySelectorAll("a")[3].style.color = "black";
        document.querySelectorAll("a")[4].style.color = "black";
        document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    })
})
document.querySelectorAll("a")[3].addEventListener("mouseover", function () {
    $(".third-nav").slideDown();
    $(".card5").fadeIn().animate({ opacity: "1", Transition: "0.1s" })
    $(".card6").fadeIn().animate({ opacity: "1", Transition: "0.3s" })
    $(".card7").fadeIn().animate({ opacity: "1", Transition: "0.8s" })
    $(".card8").fadeIn().animate({ opacity: "1", Transition: "1.2s" })
    document.querySelector(".third-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelectorAll("a")[2].addEventListener("mouseover", function () {
        $(".third-nav").slideUp();
        document.querySelector("h2").style.color = "black";
        document.querySelector(".first-nav").style.backgroundColor = "white";
        document.querySelectorAll("a")[2].style.color = "black";
        document.querySelectorAll("a")[3].style.color = "black";
        document.querySelectorAll("a")[4].style.color = "black";
        document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.548), rgba(114, 111, 111, 0))";
    })
})
document.querySelector(".div1").addEventListener("mouseover", function () {
    $(".secound-nav").slideUp();
    $(".card1").animate({ opacity: "0.01", Transition: "" });
    $(".card2").animate({ opacity: "0.01", Transition: "" });
    $(".card3").animate({ opacity: "0.01", Transition: "" });
    $(".card4").animate({ opacity: "0.01", Transition: "" });
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    $(".third-nav").slideUp();
    $(".card5").animate({ opacity: "0.01", Transition: "" });
    $(".card6").animate({ opacity: "0.01", Transition: "" });
    $(".card7").animate({ opacity: "0.01", Transition: "" });
    $(".card8").animate({ opacity: "0.01", Transition: "" });
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    $(".fourth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelector(".fourth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fourth-nav").style.backgroundColor = "";
    document.querySelector(".body").style.background = "";
    $(".fifth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelector(".fifth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fifth-nav").style.backgroundColor = "";
    document.querySelector(".body").style.background = "";
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "";
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "";
})

document.querySelectorAll("li")[3].addEventListener("dblclick", function () {
    $(".fourth-nav").slideDown();
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector(".fourth-nav").classList.add("visibility");
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelector(".fourth-nav").style.backgroundColor = "white";
    document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
})

document.querySelectorAll("li")[3].addEventListener("click", function () {
    $(".fourth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelector(".fourth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fourth-nav").style.backgroundColor = "";
    document.querySelector(".body").style.background = "";
})

document.querySelectorAll("li")[4].addEventListener("dblclick", function () {
    $(".fifth-nav").slideDown();
    document.querySelector(".fifth-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "white";
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
})

document.querySelectorAll("li")[4].addEventListener("click", function () {
    $(".fifth-nav").slideUp();
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelector(".fifth-nav").classList.remove("visibility");
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fifth-nav").style.backgroundColor = "";
    document.querySelector(".body").style.background = "";
})

document.querySelectorAll("li")[5].addEventListener("dblclick", function () {
    $(".sixth-nav").slideDown();
    document.querySelector(".sixth-nav").classList.add("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "black";
    document.querySelectorAll("a")[3].style.color = "black";
    document.querySelectorAll("a")[4].style.color = "black";
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "linear-gradient(360deg, rgba(0, 0, 0, 0.1), rgba(114, 111, 111, 0))";
})

document.querySelectorAll("li")[5].addEventListener("click", function () {
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.zIndex = "2";
    document.querySelector(".sixth-nav").style.zIndex = "1";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector("h2").style.color = "";
    document.querySelector(".body").style.background = "";
})

document.querySelector(".secound-nav").addEventListener("mouseleave", function () {
    $(".secound-nav").slideUp();
    $(".card1").animate({ opacity: "0.01", Transition: "" });
    $(".card2").animate({ opacity: "0.01", Transition: "" });
    $(".card3").animate({ opacity: "0.01", Transition: "" });
    $(".card4").animate({ opacity: "0.01", Transition: "" });
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
})

document.querySelector(".third-nav").addEventListener("mouseleave", function () {
    $(".third-nav").slideUp();
    $(".card5").animate({ opacity: "0.01", Transition: "" });
    $(".card6").animate({ opacity: "0.01", Transition: "" });
    $(".card7").animate({ opacity: "0.01", Transition: "" });
    $(".card8").animate({ opacity: "0.01", Transition: "" });
    document.querySelector("h2").style.color = "black";
    document.querySelector(".body").style.background = "";
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
})

document.querySelector(".body").addEventListener("click", function () {
    $(".fourth-nav").slideUp();
    $(".fifth-nav").slideUp();
    $(".sixth-nav").slideUp();
    document.querySelector(".sixth-nav").classList.remove("visibility");
    document.querySelector(".fifth-nav").classList.remove("visibility");
    document.querySelector(".first-nav").style.backgroundColor = "";
    document.querySelector(".fourth-nav").classList.remove("visibility");
    document.querySelector(".secound-nav").classList.remove("visibility")
    document.querySelector(".third-nav").classList.remove("visibility")
    document.querySelector("h2").style.color = "black";
    document.querySelectorAll("a")[2].style.color = "";
    document.querySelectorAll("a")[3].style.color = "";
    document.querySelectorAll("a")[4].style.color = "";
    document.querySelector(".fourth-nav").style.backgroundColor = "";
    document.querySelector(".body").style.background = "";
})



document.querySelector(".fav1").addEventListener("mouseover", function () {
    $(".fv1").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv1").style.display = "block";
})
document.querySelector(".first-chev").addEventListener("mouseover", function () {
    document.querySelector(".first-chev").style.display = "none";
    document.querySelector(".bi").style.display = "block";
})
document.querySelector(".secound-chev").addEventListener("mouseover", function () {
    document.querySelector(".secound-chev").style.display = "none";
    document.querySelector(".b1").style.display = "block";
})
document.querySelector(".first-chev").addEventListener("click", function () {
    document.querySelector(".fav1").addEventListener("mouseleave", function () {
        document.querySelector(".fv1").style.display = "bllock";
    })
})
document.querySelector(".fav1").addEventListener("mouseleave", function () {
    $(".fv1").animate({
        opacity: "",
        Transition: "",
    })
    document.querySelector(".first-chev").style.display = "block";
    document.querySelector(".secound-chev").style.display = "block";
    document.querySelector(".bi").style.display = "none";
    document.querySelector(".b1").style.display = "none";
})

document.querySelector(".f-dot1").addEventListener("click", function () {
    $(".fav1").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav1").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav1").style.background = "url(./images2/E1.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/E2.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = " url(./images2/E3.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = " url(./images2/E4.jpg)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/E5.jpg)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/E6.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/E7.webp)";
    document.querySelector(".first-6").style.backgroundSize = "cover";
})

document.querySelector(".f-dot2").addEventListener("click", function () {
    $(".fav1").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav1").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav1").style.background = "url(./images2/E10.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/E11.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/E12.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/E13.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/E14.webp)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/E15.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/E16.webp)";
    document.querySelector(".first-6").style.backgroundSize = "cover";
})

document.querySelector(".f-dot3").addEventListener("click", function () {
    $(".fav1").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav1").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav1").style.background = "url(./images2/E17.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/E18.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/E19.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/E20.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/E21.jpg)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/E22.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/E23.webp)";
    document.querySelector(".first-6").style.backgroundSize = "cover";
})

document.querySelector(".f-dot4").addEventListener("click", function () {
    $(".fav1").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav1").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav1").style.background = "url(./images2/E28.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/E29.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/E30.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/E31.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/E32.webp)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/E33.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/E34.webp)";
    document.querySelector(".first-6").style.backgroundSize = "cover";
})

document.querySelector(".fav2").addEventListener("mouseover", function () {
    $(".fv2").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv2").style.display = "block";
})

document.querySelector(".third-chev").addEventListener("mouseover", function () {
    document.querySelector(".third-chev").style.display = "none";
    document.querySelector(".b2").style.display = "block";
})
document.querySelector(".fourth-chev").addEventListener("mouseover", function () {
    document.querySelector(".fourth-chev").style.display = "none";
    document.querySelector(".b3").style.display = "block";
})
document.querySelector(".fav2").addEventListener("mouseleave", function () {
    $(".fv2").animate({
        opacity: "",
        Transition: "",
    })
    document.querySelector(".third-chev").style.display = "block";
    document.querySelector(".fourth-chev").style.display = "block";
    document.querySelector(".b2").style.display = "none";
    document.querySelector(".b3").style.display = "none";
})

document.querySelector(".s-dot1").addEventListener("click", function () {
    $(".fav2").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav2").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav2").style.background = "url(./images2/E10.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/E11.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/E11.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/E13.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/E14.webp)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/E15.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/E16.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/B19.webp)";
    document.querySelector(".secound-7").style.backgroundSize = "cover";
})

document.querySelector(".s-dot2").addEventListener("click", function () {
    $(".fav2").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav2").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav2").style.background = "url(./images2/E1.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/E2.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/E3.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/E4.jpg)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/E5.jpg)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/E6.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/E7.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/E8.webp)";
    document.querySelector(".secound-7").style.backgroundSize = "cover";
})

document.querySelector(".s-dot3").addEventListener("click", function () {
    $(".fav2").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav2").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav2").style.background = "url(./images2/E17.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/E18.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/E19.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/E20.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/E21.jpg)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/E22.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/E23.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/E24.webp)";
    document.querySelector(".secound-7").style.backgroundSize = "cover";
})

document.querySelector(".s-dot4").addEventListener("click", function () {
    $(".fav2").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav2").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav2").style.background = "url(./images2/E28.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/E29.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/E30.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/E31.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/E32.webp)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/E33.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/E34.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/E35.webp)";
    document.querySelector(".secound-7").style.backgroundSize = "cover";
})


document.querySelector(".fav3").addEventListener("mouseover", function () {
    $(".fv3").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv3").style.display = "block";
})
document.querySelector(".fifth-chev").addEventListener("mouseover", function () {
    document.querySelector(".fifth-chev").style.display = "none";
    document.querySelector(".b4").style.display = "block";
})
document.querySelector(".sixth-chev").addEventListener("mouseover", function () {
    document.querySelector(".sixth-chev").style.display = "none";
    document.querySelector(".b5").style.display = "block";
})

document.querySelector(".fav3").addEventListener("mouseleave", function () {
    $(".fv3").animate({
        opacity: "",
        Transition: "0.1s",
    })
    document.querySelector(".fifth-chev").style.display = "block";
    document.querySelector(".sixth-chev").style.display = "block";
    document.querySelector(".b4").style.display = "none";
    document.querySelector(".b5").style.display = "none";
})


document.querySelector(".T-dot1").addEventListener("click", function () {
    $(".fav3").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav3").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav3").style.background = "url(./images2/E17.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/E18.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/E19.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/E20.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/E21.jpg)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/E22.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/E23.webp)";
    document.querySelector(".third-6").style.backgroundSize = "cover";
})

document.querySelector(".T-dot2").addEventListener("click", function () {
    $(".fav3").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav3").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav3").style.background = "url(./images2/E1.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/E2.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/E3.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/E4.jpg)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/E5.jpg)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/E6.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/E7.webp)";
    document.querySelector(".third-6").style.backgroundSize = "cover";
})

document.querySelector(".T-dot3").addEventListener("click", function () {
    $(".fav3").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav3").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav3").style.background = "url(./images2/E10.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/E11.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/E12.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/E13.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/E14.webp)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/E15.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/E16.webp)";
    document.querySelector(".third-6").style.backgroundSize = "cover";
})

document.querySelector(".T-dot4").addEventListener("click", function () {
    $(".fav3").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav3").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav3").style.background = "url(./images2/E28.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/E29.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/E30.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/E31.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/E32.webp)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/E33.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/E34.webp)";
    document.querySelector(".third-6").style.backgroundSize = "cover";
})

// secound layer

document.querySelector(".fav4").addEventListener("mouseover", function () {
    $(".fv4").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv4").style.display = "block";
})

document.querySelector(".seventh-chev").addEventListener("mouseover", function () {
    document.querySelector(".seventh-chev").style.display = "none";
    document.querySelector(".b6").style.display = "block";
})
document.querySelector(".eigth-chev").addEventListener("mouseover", function () {
    document.querySelector(".eigth-chev").style.display = "none";
    document.querySelector(".b7").style.display = "block";
})

document.querySelector(".fav4").addEventListener("mouseleave", function () {
    $(".fv4").animate({
        opacity: "",
        Transition: "0.1s",
    })
    document.querySelector(".seventh-chev").style.display = "block";
    document.querySelector(".b6").style.display = "none";
    document.querySelector(".eigth-chev").style.display = "block";
    document.querySelector(".b7").style.display = "none";
})

document.querySelector(".F-dot1").addEventListener("click", function () {
    $(".fav4").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav4").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav4").style.background = "url(./images2/F1.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images2/F2.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images2/F3.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images2/F4.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images2/F5.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images2/F6.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images2/F7.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images2/F8.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
})

document.querySelector(".F-dot2").addEventListener("click", function () {

    $(".fav4").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav4").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav4").style.background = "url(./images2/F9.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images2/F10.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images2/F11.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images2/F12.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images2/F13.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images2/F14.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images2/F15.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images2/F8.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
})
document.querySelector(".F-dot3").addEventListener("click", function () {

    $(".fav4").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav4").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav4").style.background = "url(./images2/F17.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images2/F18.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images2/F19.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images2/F20.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images2/F20.jpg)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images2/F21.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images2/F22.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images2/F23.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
})


document.querySelector(".F-dot4").addEventListener("click", function () {

    $(".fav4").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav4").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav4").style.background = "url(./images2/F26.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images2/F27.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images2/F28.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images2/F29.jpg)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images2/F30.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images2/F31.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images2/F32.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images2/F34.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
})

document.querySelector(".fav5").addEventListener("mouseover", function () {
    $(".fv5").animate({
        opacity: "1",
        Transition: "0.1s",
    })
    document.querySelector(".fv5").style.display = "block";
})

document.querySelector(".nineth-chev").addEventListener("mouseover", function () {
    document.querySelector(".nineth-chev").style.display = "none";
    document.querySelector(".b8").style.display = "block";
})

document.querySelector(".tenth-chev").addEventListener("mouseover", function () {
    document.querySelector(".tenth-chev").style.display = "none";
    document.querySelector(".b9").style.display = "block";
})

document.querySelector(".fav5").addEventListener("mouseleave", function () {
    $(".fv5").animate({
        opacity: "",
        Transition: "0.1s",
    })
    document.querySelector(".nineth-chev").style.display = "block";
    document.querySelector(".b8").style.display = "none";
    document.querySelector(".tenth-chev").style.display = "block";
    document.querySelector(".b9").style.display = "none";
})

document.querySelector(".D-DOT1").addEventListener("click", function () {
    $(".fav5").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav5").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav5").style.background = "url(./images2/D38.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images2/D39.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images2/D40.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images2/D41.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images2/D42.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images2/D43.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images2/D44.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
})

document.querySelector(".D-DOT2").addEventListener("click", function () {
    $(".fav5").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav5").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav5").style.background = "url(./images2/D28.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images2/D29.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images2/D30.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images2/D31.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images2/D32.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images2/D33.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images2/D34.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
})

document.querySelector(".D-DOT3").addEventListener("click", function () {
    $(".fav5").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav5").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav5").style.background = "url(./images2/D1.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images2/D2.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images2/D3.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images2/D4.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images2/D5.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images2/D6.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images2/D7.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
})

document.querySelector(".D-DOT4").addEventListener("click", function () {
    $(".fav5").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav5").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav5").style.background = "url(./images2/D10.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images2/D11.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images2/D12.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images2/D13.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images2/D14.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images2/D15.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images2/D16.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
})
