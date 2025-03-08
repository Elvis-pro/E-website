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

    document.querySelector(".fav1").style.background = "url(./images2/A1.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/A2.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/A3.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/A4.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/A5.webp)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/A6.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/A7.webp)";
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

    document.querySelector(".fav1").style.background = "url(./images2/A10.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/A11.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/A12.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/A13.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/A14.webp)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/A15.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/A16.webp)";
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

    document.querySelector(".fav1").style.background = "url(./images2/A19.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/A20.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/A21.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/A22.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/A23.webp)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/A24.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/A25.webp)";
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

    document.querySelector(".fav1").style.background = "url(./images2/A28.webp)";
    document.querySelector(".fav1").style.backgroundSize = "cover";
    document.querySelector(".first-1").style.background = "url(./images2/A29.webp)";
    document.querySelector(".first-1").style.backgroundSize = "cover";
    document.querySelector(".first-2").style.background = "url(./images2/A30.webp)";
    document.querySelector(".first-2").style.backgroundSize = "cover";
    document.querySelector(".first-3").style.background = "url(./images2/A31.webp)";
    document.querySelector(".first-3").style.backgroundSize = "cover";
    document.querySelector(".first-4").style.background = "url(./images2/A32.webp)";
    document.querySelector(".first-4").style.backgroundSize = "cover";
    document.querySelector(".first-5").style.background = "url(./images2/A33.webp)";
    document.querySelector(".first-5").style.backgroundSize = "cover";
    document.querySelector(".first-6").style.background = "url(./images2/A34.webp)";
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

    document.querySelector(".fav2").style.background = "url(./images2/B1.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/B2.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/B3.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/B4.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/B5.webp)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/B6.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/B7.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/B8.webp)";
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

    document.querySelector(".fav2").style.background = "url(./images2/B10.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/B11.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/B12.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/B13.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/B14.webp)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/B15.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/B16.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/B17.webp)";
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

    document.querySelector(".fav2").style.background = "url(./images2/B20.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/B21.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/B22.webp))";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/B23.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/B24.webp)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/B25.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/B26.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/B19.webp)";
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

    document.querySelector(".fav2").style.background = "url(./images2/B27.webp)";
    document.querySelector(".fav2").style.backgroundSize = "cover";
    document.querySelector(".secound-1").style.background = "url(./images2/B28.webp)";
    document.querySelector(".secound-1").style.backgroundSize = "cover";
    document.querySelector(".secound-2").style.background = "url(./images2/B29.webp)";
    document.querySelector(".secound-2").style.backgroundSize = "cover";
    document.querySelector(".secound-3").style.background = "url(./images2/B30.webp)";
    document.querySelector(".secound-3").style.backgroundSize = "cover";
    document.querySelector(".secound-4").style.background = "url(./images2/B31.webp)";
    document.querySelector(".secound-4").style.backgroundSize = "cover";
    document.querySelector(".secound-5").style.background = "url(./images2/B32.webp)";
    document.querySelector(".secound-5").style.backgroundSize = "cover";
    document.querySelector(".secound-6").style.background = "url(./images2/B33.webp)";
    document.querySelector(".secound-6").style.backgroundSize = "cover";
    document.querySelector(".secound-7").style.background = "url(./images2/B34.webp)";
    document.querySelector(".secound-7").style.backgroundSize = "cover";
})

// document.querySelector(".s-dot5").addEventListener("click", function () {
//     $(".fav2").animate({
//         opacity: "0",
//         Transition: "0.2s",
//     })
//     $(".fav2").animate({
//         opacity: "1",
//         Transition: "0.2s",
//     })

//     document.querySelector(".fav2").style.background = "url(./images/sh2.webp)";
//     document.querySelector(".fav2").style.backgroundSize = "cover";
//     document.querySelector(".secound-1").style.background = "url(./images/sh2.webp)";
//     document.querySelector(".secound-1").style.backgroundSize = "cover";
//     document.querySelector(".secound-2").style.background = " url(./images/sh2-1.webp);";
//     document.querySelector(".secound-2").style.backgroundSize = "cover";
//     document.querySelector(".secound-3").style.background = "url(./images/sh2-2.webp)";
//     document.querySelector(".secound-3").style.backgroundSize = "cover";
//     document.querySelector(".secound-4").style.background = "url(./images/sh2-3.webp)";
//     document.querySelector(".secound-4").style.backgroundSize = "cover";
//     document.querySelector(".secound-5").style.background = " url(./images/sh3-1.webp)";
//     document.querySelector(".secound-5").style.backgroundSize = "cover";
//     document.querySelector(".secound-6").style.background = "url(./images/sh3-2.webp)";
//     document.querySelector(".secound-6").style.backgroundSize = "cover";
//     document.querySelector(".secound-7").style.background = "url(./images/sh3-3.webp)";
//     document.querySelector(".secound-7").style.backgroundSize = "cover";
// })

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

    document.querySelector(".fav3").style.background = "url(./images2/C1.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/C2.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/C3.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/C4.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/C5.webp)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/C6.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/C7.webp)";
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

    document.querySelector(".fav3").style.background = "url(./images2/C8.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/C9.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/C10.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/C11.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/C12.webp)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/C13.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/C14.webp)";
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

    document.querySelector(".fav3").style.background = "url(./images2/C15.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/C16.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/C17.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/C18.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/C19.webp)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/C20.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/C21.webp)";
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

    document.querySelector(".fav3").style.background = "url(./images2/A1.webp)";
    document.querySelector(".fav3").style.backgroundSize = "cover";
    document.querySelector(".third-1").style.background = "url(./images2/A2.webp)";
    document.querySelector(".third-1").style.backgroundSize = "cover";
    document.querySelector(".third-2").style.background = "url(./images2/A3.webp)";
    document.querySelector(".third-2").style.backgroundSize = "cover";
    document.querySelector(".third-3").style.background = "url(./images2/A4.webp)";
    document.querySelector(".third-3").style.backgroundSize = "cover";
    document.querySelector(".third-4").style.background = "url(./images2/A5.webp)";
    document.querySelector(".third-4").style.backgroundSize = "cover";
    document.querySelector(".third-5").style.background = "url(./images2/A6.webp)";
    document.querySelector(".third-5").style.backgroundSize = "cover";
    document.querySelector(".third-6").style.background = "url(./images2/A7.webp)";
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

    document.querySelector(".fav4").style.background = "url(./images/sb10.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images/sb11.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images/sb12.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images/sb13.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images/sb14.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images/sb15.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images/sb16.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images/sb17.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
    document.querySelector(".fourth-8").style.background = "url(./images/sb18.webp)";
    document.querySelector(".fourth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav4").style.background = "url(./images/sb1.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images/sb2.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images/sb3.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images/sb4.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images/sb5.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images/sb6.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images/sb7.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images/sb8.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
    document.querySelector(".fourth-8").style.background = "url(./images/sb9.webp)";
    document.querySelector(".fourth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav4").style.background = "url(./images/sb1.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images/sb2.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images/sb3.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images/sb4.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images/sb5.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images/sb6.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images/sb7.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images/sb8.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
    document.querySelector(".fourth-8").style.background = "url(./images/sb9.webp)";
    document.querySelector(".fourth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav4").style.background = "url(./images/sb20.webp)";
    document.querySelector(".fav4").style.backgroundSize = "cover";
    document.querySelector(".fourth-1").style.background = "url(./images/sb21.webp)";
    document.querySelector(".fourth-1").style.backgroundSize = "cover";
    document.querySelector(".fourth-2").style.background = "url(./images/sb22.webp)";
    document.querySelector(".fourth-2").style.backgroundSize = "cover";
    document.querySelector(".fourth-3").style.background = "url(./images/sb23.webp)";
    document.querySelector(".fourth-3").style.backgroundSize = "cover";
    document.querySelector(".fourth-4").style.background = "url(./images/sb24.webp)";
    document.querySelector(".fourth-4").style.backgroundSize = "cover";
    document.querySelector(".fourth-5").style.background = "url(./images/sb25.webp)";
    document.querySelector(".fourth-5").style.backgroundSize = "cover";
    document.querySelector(".fourth-6").style.background = "url(./images/sb26.webp)";
    document.querySelector(".fourth-6").style.backgroundSize = "cover";
    document.querySelector(".fourth-7").style.background = "url(./images/sb27.webp)";
    document.querySelector(".fourth-7").style.backgroundSize = "cover";
    document.querySelector(".fourth-8").style.background = "url(./images/sb8.webp)";
    document.querySelector(".fourth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav5").style.background = "url(./images/AG1.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images/AG2.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images/AG3.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images/AG1.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images/AG5.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images/AG6.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images/AG7.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
    document.querySelector(".fifth-7").style.background = "url(./images/AG8.webp)";
    document.querySelector(".fifth-7").style.backgroundSize = "cover";
    document.querySelector(".fifth-8").style.background = "url(./images/AG9.webp)";
    document.querySelector(".fifth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav5").style.background = "url(./images/AG11.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images/AG12.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images/AG13.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images/AG14.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images/AG15.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images/AG16.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images/AG17.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
    document.querySelector(".fifth-7").style.background = "url(./images/AG18.webp)";
    document.querySelector(".fifth-7").style.backgroundSize = "cover";
    document.querySelector(".fifth-8").style.background = "url(./images/AG19.webp)";
    document.querySelector(".fifth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav5").style.background = "url(./images/AG20.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images/AG21.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images/AG29.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images/AG23.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images/AG24.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images/AG28.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images/AG26.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
    document.querySelector(".fifth-7").style.background = "url(./images/AG27.webp)";
    document.querySelector(".fifth-7").style.backgroundSize = "cover";
    document.querySelector(".fifth-8").style.background = "url(./images/AG28.webp)";
    document.querySelector(".fifth-8").style.backgroundSize = "cover";
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

    document.querySelector(".fav5").style.background = "url(./images/AG31.webp)";
    document.querySelector(".fav5").style.backgroundSize = "cover";
    document.querySelector(".fifth-1").style.background = "url(./images/AG32.webp)";
    document.querySelector(".fifth-1").style.backgroundSize = "cover";
    document.querySelector(".fifth-2").style.background = "url(./images/AG33.webp)";
    document.querySelector(".fifth-2").style.backgroundSize = "cover";
    document.querySelector(".fifth-3").style.background = "url(./images/AG34.webp)";
    document.querySelector(".fifth-3").style.backgroundSize = "cover";
    document.querySelector(".fifth-4").style.background = "url(./images/AG35.webp)";
    document.querySelector(".fifth-4").style.backgroundSize = "cover";
    document.querySelector(".fifth-5").style.background = "url(./images/AG36.webp)";
    document.querySelector(".fifth-5").style.backgroundSize = "cover";
    document.querySelector(".fifth-6").style.background = "url(./images/AG37.webp)";
    document.querySelector(".fifth-6").style.backgroundSize = "cover";
    document.querySelector(".fifth-7").style.background = "url(./images/AG38.webp)";
    document.querySelector(".fifth-7").style.backgroundSize = "cover";
    document.querySelector(".fifth-8").style.background = "url(./images/AG39.webp)";
    document.querySelector(".fifth-8").style.backgroundSize = "cover";
})

document.querySelector(".fav6").addEventListener("mouseover", function () {
    $(".fv6").animate({
        opacity: "1",
        Transition: "0.1s",
    })
})

document.querySelector(".eleventh-chev").addEventListener("mouseover", function () {
    document.querySelector(".eleventh-chev").style.display = "none";
    document.querySelector(".b10").style.display = "block";
})

document.querySelector(".twelth-chev").addEventListener("mouseover", function () {
    document.querySelector(".twelth-chev").style.display = "none";
    document.querySelector(".b11").style.display = "block";
})

document.querySelector(".fav6").addEventListener("mouseleave", function () {
    $(".fv6").animate({
        opacity: "0",
        Transition: "0.1s",
    })

    document.querySelector(".eleventh-chev").style.display = "bllock";
    document.querySelector(".b10").style.display = "none";
    document.querySelector(".eleventh-chev").style.display = "block";
    document.querySelector(".b10").style.display = "none";
})

document.querySelector(".R-DOT1").addEventListener("click", function () {
    $(".fav6").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav6").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav6").style.background = "url(./images/RS1.webp)";
    document.querySelector(".fav6").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-1").style.background = "url(./images/RS2.webp)";
    document.querySelector(".SIXTH-1").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-2").style.background = "url(./images/RS3.webp)";
    document.querySelector(".SIXTH-2").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-3").style.background = "url(./images/RS4.webp)";
    document.querySelector(".SIXTH-3").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-4").style.background = "url(./images/RS5.webp)";
    document.querySelector(".SIXTH-4").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-5").style.background = "url(./images/RS6.webp)";
    document.querySelector(".SIXTH-5").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-6").style.background = "url(./images/RS7.webp)";
    document.querySelector(".SIXTH-6").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-7").style.background = "url(./images/RS8.webp)";
    document.querySelector(".SIXTH-7").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-8").style.background = "url(./images/RS9.webp)";
    document.querySelector(".SIXTH-8").style.backgroundSize = "cover";
})

document.querySelector(".R-DOT2").addEventListener("click", function () {
    $(".fav6").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav6").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav6").style.background = "url(./images/RS11.webp)";
    document.querySelector(".fav6").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-1").style.background = "url(./images/RS12.webp)";
    document.querySelector(".SIXTH-1").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-2").style.background = "url(./images/RS13.webp)";
    document.querySelector(".SIXTH-2").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-3").style.background = "url(./images/RS14.webp)";
    document.querySelector(".SIXTH-3").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-4").style.background = "url(./images/RS15.webp)";
    document.querySelector(".SIXTH-4").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-5").style.background = "url(./images/RS16.webp)";
    document.querySelector(".SIXTH-5").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-6").style.background = "url(./images/RS17.webp)";
    document.querySelector(".SIXTH-6").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-7").style.background = "url(./images/RS18.webp)";
    document.querySelector(".SIXTH-7").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-8").style.background = "url(./images/RS19.webp)";
    document.querySelector(".SIXTH-8").style.backgroundSize = "cover";
})


document.querySelector(".R-DOT3").addEventListener("click", function () {
    $(".fav6").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav6").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav6").style.background = "url(./images/RS20.webp)";
    document.querySelector(".fav6").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-1").style.background = "url(./images/RS21.webp)";
    document.querySelector(".SIXTH-1").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-2").style.background = "url(./images/RS23.webp)";
    document.querySelector(".SIXTH-2").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-3").style.background = "url(./images/RS24.webp)";
    document.querySelector(".SIXTH-3").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-4").style.background = "url(./images/RS25.webp)";
    document.querySelector(".SIXTH-4").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-5").style.background = "url(./images/RS26.webp)";
    document.querySelector(".SIXTH-5").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-6").style.background = "url(./images/RS27.webp)";
    document.querySelector(".SIXTH-6").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-7").style.background = "url(./images/RS28.webp)";
    document.querySelector(".SIXTH-7").style.backgroundSize = "cover";
    document.querySelector(".SIXTH-8").style.background = "url(./images/RS29.webp)";
    document.querySelector(".SIXTH-8").style.backgroundSize = "cover";
})

document.querySelector(".fav7").addEventListener("mouseover", function () {
    $(".fv7").animate({
        opacity: "1",
        Transition: "0.1s",
    })
})

document.querySelector(".chevron-1").addEventListener("mouseover", function () {
    document.querySelector(".chevron-1").style.display = "none";
    document.querySelector(".b12").style.display = "block";
})
document.querySelector(".chevron-2").addEventListener("mouseover", function () {
    document.querySelector(".chevron-2").style.display = "none";
    document.querySelector(".b13").style.display = "block";
})

document.querySelector(".fav7").addEventListener("mouseleave", function () {
    $(".fv7").animate({
        opacity: "0",
        Transition: "0.1s",
    })

    document.querySelector(".chevron-1").style.display = "block";
    document.querySelector(".b12").style.display = "none";
    document.querySelector(".chevron-2").style.display = "block";
    document.querySelector(".b13").style.display = "none";
})

document.querySelector(".M-DOT5").addEventListener("click", function () {
    $(".fav7").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav7").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav7").style.background = " url(./images/RS047.webp)";
    document.querySelector(".fav7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-1").style.background = "url(./images/RS048.webp)";
    document.querySelector(".SEVENTH-1").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-2").style.background = "url(./images/RS049.webp)";
    document.querySelector(".SEVENTH-2").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-3").style.background = "url(./images/RS050.webp)";
    document.querySelector(".SEVENTH-3").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-4").style.background = "url(./images/RS051.webp)";
    document.querySelector(".SEVENTH-4").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-5").style.background = "url(./images/RS052.webp)";
    document.querySelector(".SEVENTH-5").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-6").style.background = "url(./images/RS053.webp)";
    document.querySelector(".SEVENTH-6").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-7").style.background = "url(./images/RS054.webp)";
    document.querySelector(".SEVENTH-7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-8").style.background = "url(./images/RS055.webp)";
    document.querySelector(".SEVENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".M-DOT1").addEventListener("click", function () {
    $(".fav7").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav7").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav7").style.background = " url(./images/RS010.webp)";
    document.querySelector(".fav7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-1").style.background = "url(./images/RS011.webp)";
    document.querySelector(".SEVENTH-1").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-2").style.background = "url(./images/RS012.webp)";
    document.querySelector(".SEVENTH-2").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-3").style.background = "url(./images/RS012.webp)";
    document.querySelector(".SEVENTH-3").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-4").style.background = "url(./images/RS013.webp)";
    document.querySelector(".SEVENTH-4").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-5").style.background = "url(./images/RS014.webp)";
    document.querySelector(".SEVENTH-5").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-6").style.background = "url(./images/RS015.webp)";
    document.querySelector(".SEVENTH-6").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-7").style.background = "url(./images/RS016.webp)";
    document.querySelector(".SEVENTH-7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-8").style.background = "url(./images/RS017.webp)";
    document.querySelector(".SEVENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".M-DOT2").addEventListener("click", function () {
    $(".fav7").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav7").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav7").style.background = " url(./images/RS019.webp)";
    document.querySelector(".fav7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-1").style.background = "url(./images/RS020.webp)";
    document.querySelector(".SEVENTH-1").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-2").style.background = "url(./images/RS021.webp)";
    document.querySelector(".SEVENTH-2").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-3").style.background = "url(./images/RS022.webp)";
    document.querySelector(".SEVENTH-3").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-4").style.background = "url(./images/RS023.webp)";
    document.querySelector(".SEVENTH-4").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-5").style.background = "url(./images/RS024.webp)";
    document.querySelector(".SEVENTH-5").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-6").style.background = "url(./images/RS025.webp)";
    document.querySelector(".SEVENTH-6").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-7").style.background = "url(./images/RS026.webp)";
    document.querySelector(".SEVENTH-7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-8").style.background = "url(./images/RS027.webp)";
    document.querySelector(".SEVENTH-8").style.backgroundSize = "cover";
})


document.querySelector(".M-DOT3").addEventListener("click", function () {
    $(".fav7").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav7").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav7").style.background = " url(./images/RS028.webp)";
    document.querySelector(".fav7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-1").style.background = "url(./images/RS029.webp)";
    document.querySelector(".SEVENTH-1").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-2").style.background = "url(./images/RS030.webp)";
    document.querySelector(".SEVENTH-2").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-3").style.background = "url(./images/RS031.webp)";
    document.querySelector(".SEVENTH-3").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-4").style.background = "url(./images/RS032.webp)";
    document.querySelector(".SEVENTH-4").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-5").style.background = "url(./images/RS033.webp)";
    document.querySelector(".SEVENTH-5").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-6").style.background = "url(./images/RS034.webp)";
    document.querySelector(".SEVENTH-6").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-7").style.background = "url(./images/RS035.webp)";
    document.querySelector(".SEVENTH-7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-8").style.background = "url(./images/RS036.webp)";
    document.querySelector(".SEVENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".M-DOT3").addEventListener("click", function () {
    $(".fav7").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav7").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav7").style.background = " url(./images/RS028.webp)";
    document.querySelector(".fav7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-1").style.background = "url(./images/RS029.webp)";
    document.querySelector(".SEVENTH-1").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-2").style.background = "url(./images/RS030.webp)";
    document.querySelector(".SEVENTH-2").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-3").style.background = "url(./images/RS031.webp)";
    document.querySelector(".SEVENTH-3").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-4").style.background = "url(./images/RS032.webp)";
    document.querySelector(".SEVENTH-4").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-5").style.background = "url(./images/RS033.webp)";
    document.querySelector(".SEVENTH-5").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-6").style.background = "url(./images/RS034.webp)";
    document.querySelector(".SEVENTH-6").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-7").style.background = "url(./images/RS035.webp)";
    document.querySelector(".SEVENTH-7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-8").style.background = "url(./images/RS036.webp)";
    document.querySelector(".SEVENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".M-DOT4").addEventListener("click", function () {
    $(".fav7").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".fav7").animate({
        opacity: "1",
        Transition: "0.2s",
    })
    document.querySelector(".fav7").style.background = " url(./images/RS037.webp)";
    document.querySelector(".fav7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-1").style.background = "url(./images/RS038.webp)";
    document.querySelector(".SEVENTH-1").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-2").style.background = "url(./images/RS039.webp)";
    document.querySelector(".SEVENTH-2").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-3").style.background = "url(./images/RS040.webp)";
    document.querySelector(".SEVENTH-3").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-4").style.background = "url(./images/RS041.webp)";
    document.querySelector(".SEVENTH-4").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-5").style.background = "url(./images/RS042.webp)";
    document.querySelector(".SEVENTH-5").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-6").style.background = "url(./images/RS043.webp)";
    document.querySelector(".SEVENTH-6").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-7").style.background = "url(./images/RS044.webp)";
    document.querySelector(".SEVENTH-7").style.backgroundSize = "cover";
    document.querySelector(".SEVENTH-8").style.background = "url(./images/RS045.webp)";
    document.querySelector(".SEVENTH-8").style.backgroundSize = "cover";
})


// first-div

document.querySelector(".fv8").addEventListener("mouseover", function () {
    $(".fv8").animate({
        opacity: "1",
        Transition: "0.1s",
    })

})

document.querySelector(".chevron-3").addEventListener("mouseover", function() {
    document.querySelector(".chevron-3").style.display = "none";
    document.querySelector(".b-13").style.display = "block";
})

document.querySelector(".chevron-4").addEventListener("mouseover", function(e) {
    document.querySelector(".chevron-4").style.display = "none";
    document.querySelector(".b-14").style.display = "block";
})


document.querySelector(".fv8").addEventListener("mouseleave", function(){
    $(".fv8").animate({
        opacity: "0",
        Transition: "0.1s",
    })
    document.querySelector(".chevron-3").style.display = "block";
    document.querySelector(".b-13").style.display = "none";
    document.querySelector(".chevron-4").style.display = "block";
    document.querySelector(".b-14").style.display = "none";
})

// secoud-div
document.querySelector(".fv9").addEventListener("mouseover", function (){
    $(".fv9").animate({
        opacity: "1",
        Transition: "0.1s",
    })
})

document.querySelector(".chevron-5").addEventListener("mouseover", function() {
    document.querySelector(".chevron-5").style.display = "none";
    document.querySelector(".b-15").style.display = "block";
})

document.querySelector(".chevron-6").addEventListener("mouseover", function() {
    document.querySelector(".chevron-6").style.display = "none";
    document.querySelector(".b-16").style.display = "block";
})

document.querySelector(".fv9").addEventListener("mouseleave", function(){
    $(".fv9").animate({
        opacity: "0",
        Transition: "0.1s",
    })
    document.querySelector(".chevron-5").style.display = "block";
    document.querySelector(".b-15").style.display = "none";
    document.querySelector(".chevron-6").style.display = "block";
    document.querySelector(".b-16").style.display = "none";
})

// third-div

document.querySelector(".fv10").addEventListener("mouseover", function (){
    $(".fv10").animate({
        opacity: "1",
        Transition: "0.1s",
    })
})

document.querySelector(".chevron-7").addEventListener("mouseover", function(){
    document.querySelector(".chevron-7").style.display = "none";
    document.querySelector(".b-17").style.display = "block";
})

document.querySelector(".chevron-8").addEventListener("mouseover", function(){
    document.querySelector(".chevron-8").style.display = "none";
    document.querySelector(".b-18").style.display = "block";
})

document.querySelector(".fv10").addEventListener("mouseleave", function (){
    $(".fv10").animate({
        opacity: "0",
        Transition: "0.1s",
    })

    document.querySelector(".chevron-7").style.display = "block";
    document.querySelector(".b-17").style.display = "none";
    document.querySelector(".chevron-8").style.display = "block";
    document.querySelector(".b-18").style.display = "none";
});


document.querySelector(".Q-DOT1").addEventListener("click", function(){
    $(".elvis9").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis9").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav8").style.background = " url(./images/MT01.webp)";
    document.querySelector(".fav8").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-1").style.background = "url(./images/MT02.webp)";
    document.querySelector(".EIGHT-1").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-2").style.background = "url(./images/MT03.webp)";
    document.querySelector(".EIGHT-2").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-3").style.background = "url(./images/MT04.webp)";
    document.querySelector(".EIGHT-3").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-4").style.background = "url(./images/MT05.webp)";
    document.querySelector(".EIGHT-4").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-5").style.background = "url(./images/MT06.webp)";
    document.querySelector(".EIGHT-5").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-6").style.background = "url(./images/MT07.webp)";
    document.querySelector(".EIGHT-6").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-7").style.background = "url(./images/MT08.web)";
    document.querySelector(".EIGHT-7").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-8").style.background = "url(./images/MT035.webp)";
    document.querySelector(".EIGHT-8").style.backgroundSize = "cover";
})

document.querySelector(".Q-DOT2").addEventListener("click", function(){
    $(".elvis9").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis9").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav8").style.background = " url(./images/MT09.webp)";
    document.querySelector(".fav8").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-1").style.background = "url(./images/MT010.webp)";
    document.querySelector(".EIGHT-1").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-2").style.background = "url(./images/MT015.webp)";
    document.querySelector(".EIGHT-2").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-3").style.background = "url(./images/MT012.webp)";
    document.querySelector(".EIGHT-3").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-4").style.background = "url(./images/MT013.webp)";
    document.querySelector(".EIGHT-4").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-5").style.background = "url(./images/MT014.webp)";
    document.querySelector(".EIGHT-5").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-6").style.background = "url(./images/MT011.webp)";
    document.querySelector(".EIGHT-6").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-7").style.background = "url(./images/MT016.web)";
    document.querySelector(".EIGHT-7").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-8").style.background = "url(./images/MT035.webp)";
    document.querySelector(".EIGHT-8").style.backgroundSize = "cover";
})

document.querySelector(".Q-DOT3").addEventListener("click", function(){
    $(".elvis9").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis9").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav8").style.background = " url(./images/MT017.webp)";
    document.querySelector(".fav8").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-1").style.background = "url(./images/MT018.webp)";
    document.querySelector(".EIGHT-1").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-2").style.background = "url(./images/MT019.webp)";
    document.querySelector(".EIGHT-2").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-3").style.background = "url(./images/MT020.webp)";
    document.querySelector(".EIGHT-3").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-4").style.background = "url(./images/MT021.webp)";
    document.querySelector(".EIGHT-4").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-5").style.background = "url(./images/MT022.webp)";
    document.querySelector(".EIGHT-5").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-6").style.background = "url(./images/MT023.webp)";
    document.querySelector(".EIGHT-6").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-7").style.background = "url(./images/MT024.web)";
    document.querySelector(".EIGHT-7").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-8").style.background = "url(./images/MT025.webp)";
    document.querySelector(".EIGHT-8").style.backgroundSize = "cover";
})

document.querySelector(".Q-DOT4").addEventListener("click", function(){
    $(".elvis9").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis9").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav8").style.background = " url(./images/MT026.webp)";
    document.querySelector(".fav8").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-1").style.background = "url(./images/MT027.webp)";
    document.querySelector(".EIGHT-1").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-2").style.background = "url(./images/MT028.webp)";
    document.querySelector(".EIGHT-2").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-3").style.background = "url(./images/MT029.webp)";
    document.querySelector(".EIGHT-3").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-4").style.background = "url(./images/MT030.webp)";
    document.querySelector(".EIGHT-4").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-5").style.background = "url(./images/MT031.webp)";
    document.querySelector(".EIGHT-5").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-6").style.background = "url(./images/MT032.webp)";
    document.querySelector(".EIGHT-6").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-7").style.background = "url(./images/MT033.web)";
    document.querySelector(".EIGHT-7").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-8").style.background = "url(./images/MT034.webp)";
    document.querySelector(".EIGHT-8").style.backgroundSize = "cover";
})

document.querySelector(".Q-DOT5").addEventListener("click", function(){
    $(".elvis9").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis9").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav8").style.background = " url(./images/MT036.webp)";
    document.querySelector(".fav8").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-1").style.background = "url(./images/MT037.webp)";
    document.querySelector(".EIGHT-1").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-2").style.background = "url(./images/MT038.webp)";
    document.querySelector(".EIGHT-2").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-3").style.background = "url(./images/MT039.webp)";
    document.querySelector(".EIGHT-3").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-4").style.background = "url(./images/MT040.webp)";
    document.querySelector(".EIGHT-4").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-5").style.background = "url(./images/MT042.webp)";
    document.querySelector(".EIGHT-5").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-6").style.background = "url(./images/MT044.webp)";
    document.querySelector(".EIGHT-6").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-7").style.background = "url(./images/MT046.web)";
    document.querySelector(".EIGHT-7").style.backgroundSize = "cover";
    document.querySelector(".EIGHT-8").style.background = "url(./images/MT048.webp)";
    document.querySelector(".EIGHT-8").style.backgroundSize = "cover";
})

document.querySelector(".K-DOT1").addEventListener("click", function(){
    $(".elvis10").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis10").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav9").style.background = " url(./images/LT01.webp)";
    document.querySelector(".fav9").style.backgroundSize = "cover";
    document.querySelector(".NINETH-1").style.background = "url(./images/LT02.jpg)";
    document.querySelector(".NINETH-1").style.backgroundSize = "cover";
    document.querySelector(".NINETH-2").style.background = "url(./images/LT03.webp)";
    document.querySelector(".NINETH-2").style.backgroundSize = "cover";
    document.querySelector(".NINETH-3").style.background = "url(./images/LT04.webp)";
    document.querySelector(".NINETH-3").style.backgroundSize = "cover";
    document.querySelector(".NINETH-4").style.background = "url(./images/LT05.webp)";
    document.querySelector(".NINETH-4").style.backgroundSize = "cover";
    document.querySelector(".NINETH-5").style.background = "url(./images/LT06.webp)";
    document.querySelector(".NINETH-5").style.backgroundSize = "cover";
    document.querySelector(".NINETH-6").style.background = "url(./images/LT07.webp)";
    document.querySelector(".NINETH-6").style.backgroundSize = "cover";
    document.querySelector(".NINETH-7").style.background = "url(./images/LT08.webp)";
    document.querySelector(".NINETH-7").style.backgroundSize = "cover";
    document.querySelector(".NINETH-9").style.background = "url(./images/LT09.webp)";
    document.querySelector(".NINETH-9").style.backgroundSize = "cover";
})

document.querySelector(".K-DOT2").addEventListener("click", function(){
    $(".elvis10").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis10").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav9").style.background = " url(./images/LT033.webp)";
    document.querySelector(".fav9").style.backgroundSize = "cover";
    document.querySelector(".NINETH-1").style.background = "url(./images/LT012.webp)";
    document.querySelector(".NINETH-1").style.backgroundSize = "cover";
    document.querySelector(".NINETH-2").style.background = "url(./images/LT013.webp)";
    document.querySelector(".NINETH-2").style.backgroundSize = "cover";
    document.querySelector(".NINETH-3").style.background = "url(./images/LT014.webp)";
    document.querySelector(".NINETH-3").style.backgroundSize = "cover";
    document.querySelector(".NINETH-4").style.background = "url(./images/LT015.webp)";
    document.querySelector(".NINETH-4").style.backgroundSize = "cover";
    document.querySelector(".NINETH-5").style.background = "url(./images/LT016.webp)";
    document.querySelector(".NINETH-5").style.backgroundSize = "cover";
    document.querySelector(".NINETH-6").style.background = "url(./images/LT017.webp)";
    document.querySelector(".NINETH-6").style.backgroundSize = "cover";
    document.querySelector(".NINETH-7").style.background = "url(./images/LT018.webp)";
    document.querySelector(".NINETH-7").style.backgroundSize = "cover";
    document.querySelector(".NINETH-8").style.background = "url(./images/LT019.webp)";
    document.querySelector(".NINETH-8").style.backgroundSize = "cover";
})

document.querySelector(".K-DOT3").addEventListener("click", function(){
    $(".elvis10").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis10").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav9").style.background = " url(./images/LT022.webp)";
    document.querySelector(".fav9").style.backgroundSize = "cover";
    document.querySelector(".NINETH-1").style.background = "url(./images/LT023.webp)";
    document.querySelector(".NINETH-1").style.backgroundSize = "cover";
    document.querySelector(".NINETH-2").style.background = "url(./images/LT024.jpg)";
    document.querySelector(".NINETH-2").style.backgroundSize = "cover";
    document.querySelector(".NINETH-3").style.background = "url(./images/LT025.webp)";
    document.querySelector(".NINETH-3").style.backgroundSize = "cover";
    document.querySelector(".NINETH-4").style.background = "url(./images/LT026.webp)";
    document.querySelector(".NINETH-4").style.backgroundSize = "cover";
    document.querySelector(".NINETH-5").style.background = "url(./images/LT027.webp)";
    document.querySelector(".NINETH-5").style.backgroundSize = "cover";
    document.querySelector(".NINETH-6").style.background = "url(./images/LT028.webp)";
    document.querySelector(".NINETH-6").style.backgroundSize = "cover";
    document.querySelector(".NINETH-7").style.background = "url(./images/LT029.webp)";
    document.querySelector(".NINETH-7").style.backgroundSize = "cover";
    document.querySelector(".NINETH-8").style.background = "url(./images/LT031.webp)";
    document.querySelector(".NINETH-8").style.backgroundSize = "cover";
})

document.querySelector(".K-DOT4").addEventListener("click", function(){
    $(".elvis10").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis10").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav9").style.background = " url(./images/LT033.webp)";
    document.querySelector(".fav9").style.backgroundSize = "cover";
    document.querySelector(".NINETH-1").style.background = "url(./images/LT034.webp)";
    document.querySelector(".NINETH-1").style.backgroundSize = "cover";
    document.querySelector(".NINETH-2").style.background = "url(./images/LT035.jpg)";
    document.querySelector(".NINETH-2").style.backgroundSize = "cover";
    document.querySelector(".NINETH-3").style.background = "url(./images/LT036.webp)";
    document.querySelector(".NINETH-3").style.backgroundSize = "cover";
    document.querySelector(".NINETH-4").style.background = "url(./images/LT037.webp)";
    document.querySelector(".NINETH-4").style.backgroundSize = "cover";
    document.querySelector(".NINETH-5").style.background = "url(./images/LT038.webp)";
    document.querySelector(".NINETH-5").style.backgroundSize = "cover";
    document.querySelector(".NINETH-6").style.background = "url(./images/LT039.webp)";
    document.querySelector(".NINETH-6").style.backgroundSize = "cover";
    document.querySelector(".NINETH-7").style.background = "url(./images/LT041.webp)";
    document.querySelector(".NINETH-7").style.backgroundSize = "cover";
    document.querySelector(".NINETH-8").style.background = "url(./images/LT042.webp)";
    document.querySelector(".NINETH-8").style.backgroundSize = "cover";
})

document.querySelector(".N-DOT1").addEventListener("click", function(){
    $(".elvis11").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis11").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav10").style.background = " url(./images/NG1.webp)";
    document.querySelector(".fav10").style.backgroundSize = "cover";
    document.querySelector(".TENTH-1").style.background = "url(./images/NG2.webp)";
    document.querySelector(".TENTH-1").style.backgroundSize = "cover";
    document.querySelector(".TENTH-2").style.background = "url(./images/NG3.webp)";
    document.querySelector(".TENTH-2").style.backgroundSize = "cover";
    document.querySelector(".TENTH-3").style.background = "url(./images/NG4.webp)";
    document.querySelector(".TENTH-3").style.backgroundSize = "cover";
    document.querySelector(".TENTH-4").style.background = "url(./images/NG5.webp)";
    document.querySelector(".TENTH-4").style.backgroundSize = "cover";
    document.querySelector(".TENTH-5").style.background = "url(./images/NG6.webp)";
    document.querySelector(".TENTH-5").style.backgroundSize = "cover";
    document.querySelector(".TENTH-6").style.background = "url(./images/NG7.webp)";
    document.querySelector(".TENTH-6").style.backgroundSize = "cover";
    document.querySelector(".TENTH-7").style.background = "url(./images/NG8.webp)";
    document.querySelector(".TENTH-7").style.backgroundSize = "cover";
    document.querySelector(".TENTH-8").style.background = "url(./images/NG9.webp)";
    document.querySelector(".TENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".N-DOT2").addEventListener("click", function(){
    $(".elvis11").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis11").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav10").style.background = " url(./images/NG12.webp)";
    document.querySelector(".fav10").style.backgroundSize = "cover";
    document.querySelector(".TENTH-1").style.background = "url(./images/NG13.webp)";
    document.querySelector(".TENTH-1").style.backgroundSize = "cover";
    document.querySelector(".TENTH-2").style.background = "url(./images/NG14.webp)";
    document.querySelector(".TENTH-2").style.backgroundSize = "cover";
    document.querySelector(".TENTH-3").style.background = "url(./images/NG15.webp)";
    document.querySelector(".TENTH-3").style.backgroundSize = "cover";
    document.querySelector(".TENTH-4").style.background = "url(./images/NG16.webp)";
    document.querySelector(".TENTH-4").style.backgroundSize = "cover";
    document.querySelector(".TENTH-5").style.background = "url(./images/NG17.webp)";
    document.querySelector(".TENTH-5").style.backgroundSize = "cover";
    document.querySelector(".TENTH-6").style.background = "url(./images/NG18.webp)";
    document.querySelector(".TENTH-6").style.backgroundSize = "cover";
    document.querySelector(".TENTH-7").style.background = "url(./images/NG19.webp)";
    document.querySelector(".TENTH-7").style.backgroundSize = "cover";
    document.querySelector(".TENTH-8").style.background = "url(./images/NG21.webp)";
    document.querySelector(".TENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".N-DOT3").addEventListener("click", function(){
    $(".elvis11").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis11").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav10").style.background = " url(./images/NG22.webp)";
    document.querySelector(".fav10").style.backgroundSize = "cover";
    document.querySelector(".TENTH-1").style.background = "url(./images/NG23.webp)";
    document.querySelector(".TENTH-1").style.backgroundSize = "cover";
    document.querySelector(".TENTH-2").style.background = "url(./images/NG24.webp)";
    document.querySelector(".TENTH-2").style.backgroundSize = "cover";
    document.querySelector(".TENTH-3").style.background = "url(./images/NG25.webp)";
    document.querySelector(".TENTH-3").style.backgroundSize = "cover";
    document.querySelector(".TENTH-4").style.background = "url(./images/NG26.webp)";
    document.querySelector(".TENTH-4").style.backgroundSize = "cover";
    document.querySelector(".TENTH-5").style.background = "url(./images/NG27.webp)";
    document.querySelector(".TENTH-5").style.backgroundSize = "cover";
    document.querySelector(".TENTH-6").style.background = "url(./images/NG28.webp)";
    document.querySelector(".TENTH-6").style.backgroundSize = "cover";
    document.querySelector(".TENTH-7").style.background = "url(./images/NG29.webp)";
    document.querySelector(".TENTH-7").style.backgroundSize = "cover";
    document.querySelector(".TENTH-8").style.background = "url(./images/NG31.webp)";
    document.querySelector(".TENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".fav11").addEventListener("mouseover", function(){
    $(".fv12").animate({ 
        opacity: "1",
        transition: "0.1s",
    })
})

document.querySelector(".chevron-9").addEventListener("mouseover", function(){
    document.querySelector(".chevron-9").style.display = "none";
    document.querySelector(".b-19").style.display = "block";
})

document.querySelector(".chevron-10").addEventListener("mouseover", function(){
    document.querySelector(".chevron-10").style.display = "none";
    document.querySelector(".b-20").style.display = "block";
});

document.querySelector(".fav11").addEventListener("mouseleave", function(){
    $(".fv12").animate({
        opacity: "0",
        transition: "0.1s",
    })

    document.querySelector(".chevron-9").style.display = "block";
    document.querySelector(".b-19").style.display = "none";
    document.querySelector(".chevron-10").style.display = "block";
    document.querySelector(".b-20").style.display = "none";
})

document.querySelector(".B-DOT1").addEventListener("click", function(){
    $(".elvis12").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis12").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav11").style.background = " url(./images/QT01.webp)";
    document.querySelector(".fav11").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-1").style.background = "url(./images/QT02.webp)";
    document.querySelector(".ELENTH-1").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-2").style.background = "url(./images/QT03.webp)";
    document.querySelector(".ELENTH-2").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-3").style.background = "url(./images/QT04.webp)";
    document.querySelector(".ELENTH-3").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-4").style.background = "url(./images/QT05.webp)";
    document.querySelector(".ELENTH-4").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-5").style.background = "url(./images/QT06.webp)";
    document.querySelector(".ELENTH-5").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-6").style.background = "url(./images/QT07.webp)";
    document.querySelector(".ELENTH-6").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-7").style.background = "url(./images/QT08.webp)";
    document.querySelector(".ELENTH-7").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-8").style.background = "url(./images/QT09.webp)";
    document.querySelector(".ELENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".B-DOT2").addEventListener("click", function(){
    $(".elvis12").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis12").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav11").style.background = " url(./images/QT010.webp)";
    document.querySelector(".fav11").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-1").style.background = "url(./images/QT012.webp)";
    document.querySelector(".ELENTH-1").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-2").style.background = "url(./images/QT013.webp)";
    document.querySelector(".ELENTH-2").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-3").style.background = "url(./images/QT014.webp)";
    document.querySelector(".ELENTH-3").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-4").style.background = "url(./images/QT015.webp)";
    document.querySelector(".ELENTH-4").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-5").style.background = "url(./images/QT016.webp)";
    document.querySelector(".ELENTH-5").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-6").style.background = "url(./images/QT017.webp)";
    document.querySelector(".ELENTH-6").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-7").style.background = "url(./images/QT013.webp)";
    document.querySelector(".ELENTH-7").style.backgroundSize = "cover";
    document.querySelector(".ELENTH-8").style.background = "url(./images/QT09.webp)";
    document.querySelector(".ELENTH-8").style.backgroundSize = "cover";
})

document.querySelector(".fav12").addEventListener("mouseover", function(){
    $(".fv13").animate({ 
        opacity: "1",
        transition: "0.1s",
    })
})

document.querySelector(".chevron-11").addEventListener("mouseover", function(){
    document.querySelector(".chevron-11").style.display = "none";
    document.querySelector(".b-21").style.display = "block";
})

document.querySelector(".chevron-12").addEventListener("mouseover", function(){
    document.querySelector(".chevron-12").style.display = "none";
    document.querySelector(".b-22").style.display = "block";
})

document.querySelector(".fav12").addEventListener("mouseleave", function(){
    $(".fv13").animate({
        opacity: "0",
        transition: "0.1s",
    })
    document.querySelector(".chevron-11").style.display = "block";
    document.querySelector(".b-21").style.display = "none";
    document.querySelector(".chevron-12").style.display = "block";
    document.querySelector(".b-22").style.display = "none";
})

document.querySelector(".P-DOT1").addEventListener("click", function(){
    $(".elvis13").animate({
        opacity: "0",
        Transition: "0.1s",
    })
    $(".elvis13").animate({
        opacity: "1",
        Transition: "0.1s",
    })

    document.querySelector(".fav12").style.background = " url(./images/PS1.webp)";
    document.querySelector(".fav12").style.backgroundSize = "cover";
    document.querySelector(".PS-1").style.background = "url(./images/PS2.webp)";
    document.querySelector(".PS-1").style.backgroundSize = "cover";
    document.querySelector(".PS-2").style.background = "url(./images/PS3.webp)";
    document.querySelector(".PS-2").style.backgroundSize = "cover";
    document.querySelector(".PS-3").style.background = "url(./images/PS4.webp)";
    document.querySelector(".PS-3").style.backgroundSize = "cover";
    document.querySelector(".PS-4").style.background = "url(./images/PS5.webp)";
    document.querySelector(".PS-4").style.backgroundSize = "cover";
    document.querySelector(".PS-5").style.background = "url(./images/PS6.webp)";
    document.querySelector(".PS-5").style.backgroundSize = "cover";
    document.querySelector(".PS-6").style.background = "url(./images/PS7.webp)";
    document.querySelector(".PS-6").style.backgroundSize = "cover";
    document.querySelector(".PS-7").style.background = "url(./images/PS8.webp)";
    document.querySelector(".PS-7").style.backgroundSize = "cover";
    document.querySelector(".PS-8").style.background = "url(./images/PS9.webp)";
    document.querySelector(".PS-8").style.backgroundSize = "cover";
})

document.querySelector(".P-DOT2").addEventListener("click", function(){
    $(".elvis13").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis13").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav12").style.background = " url(./images/PS10.webp)";
    document.querySelector(".fav12").style.backgroundSize = "cover";
    document.querySelector(".PS-1").style.background = "url(./images/PS12.webp)";
    document.querySelector(".PS-1").style.backgroundSize = "cover";
    document.querySelector(".PS-2").style.background = "url(./images/PS13.webp)";
    document.querySelector(".PS-2").style.backgroundSize = "cover";
    document.querySelector(".PS-3").style.background = "url(./images/PS14.webp)";
    document.querySelector(".PS-3").style.backgroundSize = "cover";
    document.querySelector(".PS-4").style.background = "url(./images/PS15.webp)";
    document.querySelector(".PS-4").style.backgroundSize = "cover";
    document.querySelector(".PS-5").style.background = "url(./images/PS16.webp)";
    document.querySelector(".PS-5").style.backgroundSize = "cover";
    document.querySelector(".PS-6").style.background = "url(./images/PS17.webp)";
    document.querySelector(".PS-6").style.backgroundSize = "cover";
    document.querySelector(".PS-7").style.background = "url(./images/PS18.webp)";
    document.querySelector(".PS-7").style.backgroundSize = "cover";
    document.querySelector(".PS-8").style.background = "url(./images/PS19.webp)";
    document.querySelector(".PS-8").style.backgroundSize = "cover";
})

document.querySelector(".P-DOT3").addEventListener("click", function(){
    $(".elvis13").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis13").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav12").style.background = " url(./images/PS10.webp)";
    document.querySelector(".fav12").style.backgroundSize = "cover";
    document.querySelector(".PS-1").style.background = "url(./images/PS12.webp)";
    document.querySelector(".PS-1").style.backgroundSize = "cover";
    document.querySelector(".PS-2").style.background = "url(./images/PS13.webp)";
    document.querySelector(".PS-2").style.backgroundSize = "cover";
    document.querySelector(".PS-3").style.background = "url(./images/PS14.webp)";
    document.querySelector(".PS-3").style.backgroundSize = "cover";
    document.querySelector(".PS-4").style.background = "url(./images/PS15.webp)";
    document.querySelector(".PS-4").style.backgroundSize = "cover";
    document.querySelector(".PS-5").style.background = "url(./images/PS16.webp)";
    document.querySelector(".PS-5").style.backgroundSize = "cover";
    document.querySelector(".PS-6").style.background = "url(./images/PS17.webp)";
    document.querySelector(".PS-6").style.backgroundSize = "cover";
    document.querySelector(".PS-7").style.background = "url(./images/PS18.webp)";
    document.querySelector(".PS-7").style.backgroundSize = "cover";
    document.querySelector(".PS-8").style.background = "url(./images/PS19.webp)";
    document.querySelector(".PS-8").style.backgroundSize = "cover";
})

document.querySelector(".P-DOT4").addEventListener("click", function(){
    $(".elvis13").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis13").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav12").style.background = " url(./images/PS20.webp)";
    document.querySelector(".fav12").style.backgroundSize = "cover";
    document.querySelector(".PS-1").style.background = "url(./images/PS21.webp)";
    document.querySelector(".PS-1").style.backgroundSize = "cover";
    document.querySelector(".PS-2").style.background = "url(./images/PS22.webp)";
    document.querySelector(".PS-2").style.backgroundSize = "cover";
    document.querySelector(".PS-3").style.background = "url(./images/PS23.webp)";
    document.querySelector(".PS-3").style.backgroundSize = "cover";
    document.querySelector(".PS-4").style.background = "url(./images/PS24.webp)";
    document.querySelector(".PS-4").style.backgroundSize = "cover";
    document.querySelector(".PS-5").style.background = "url(./images/PS25.webp)";
    document.querySelector(".PS-5").style.backgroundSize = "cover";
    document.querySelector(".PS-6").style.background = "url(./images/PS26.webp)";
    document.querySelector(".PS-6").style.backgroundSize = "cover";
    document.querySelector(".PS-7").style.background = "url(./images/PS27.webp)";
    document.querySelector(".PS-7").style.backgroundSize = "cover";
    document.querySelector(".PS-8").style.background = "url(./images/PS28.webp)";
    document.querySelector(".PS-8").style.backgroundSize = "cover";
})

document.querySelector(".fav14").addEventListener("mouseover", function(){
    $(".fv14").animate({
        opacity: "1",
        Transition: "0.1s",
    })
})

document.querySelector(".chevron-13").addEventListener("mouseover", function(){
    document.querySelector(".chevron-13").style.display = "none";
    document.querySelector(".b-23").style.display = "block";
})

document.querySelector(".chevron-14").addEventListener("mouseover", function(){
    document.querySelector(".chevron-14").style.display = "none";
    document.querySelector(".b-24").style.display = "block";
})

document.querySelector(".fav14").addEventListener("mouseleave", function(){
    $(".fv14").animate({
        opacity: "0",
        Transition: "0.1s",
    })

    document.querySelector(".chevron-13").style.display = "block";
    document.querySelector(".b-23").style.display = "none";
    document.querySelector(".chevron-14").style.display = "block";
    document.querySelector(".b-24").style.display = "none";
})

document.querySelector(".XB-DOT1").addEventListener("click", function(){
    $(".elvis14").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis14").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav14").style.background = " url(./images/XB10.webp)";
    document.querySelector(".fav14").style.backgroundSize = "cover";
    document.querySelector(".XB1").style.background = "url(./images/XB11.webp)";
    document.querySelector(".XB1").style.backgroundSize = "cover";
    document.querySelector(".XB2").style.background = "url(./images/XB12.webp)";
    document.querySelector(".XB2").style.backgroundSize = "cover";
    document.querySelector(".XB3").style.background = "url(./images/XB13.webp)";
    document.querySelector(".XB3").style.backgroundSize = "cover";
    document.querySelector(".XB4").style.background = "url(./images/XB14.jpg)";
    document.querySelector(".XB4").style.backgroundSize = "cover";
    document.querySelector(".XB5").style.background = "url(./images/XB15.webp)";
    document.querySelector(".XB5").style.backgroundSize = "cover";
    document.querySelector(".XB6").style.background = "url(./images/XB16.webp)";
    document.querySelector(".XB6").style.backgroundSize = "cover";
    document.querySelector(".XB7").style.background = "url(./images/XB17.webp)";
    document.querySelector(".XB7").style.backgroundSize = "cover";
    document.querySelector(".XB8").style.background = "url(./images/XB18.webp)";
    document.querySelector(".XB8").style.backgroundSize = "cover";
})

document.querySelector(".XB-DOT2").addEventListener("click", function(){
    $(".elvis14").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis14").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav14").style.background = " url(./images/XB20.webp)";
    document.querySelector(".fav14").style.backgroundSize = "cover";
    document.querySelector(".XB1").style.background = "url(./images/XB21.webp)";
    document.querySelector(".XB1").style.backgroundSize = "cover";
    document.querySelector(".XB2").style.background = "url(./images/XB22.webp)";
    document.querySelector(".XB2").style.backgroundSize = "cover";
    document.querySelector(".XB3").style.background = "url(./images/XB23.webp)";
    document.querySelector(".XB3").style.backgroundSize = "cover";
    document.querySelector(".XB4").style.background = "url(./images/XB24.webp)";
    document.querySelector(".XB4").style.backgroundSize = "cover";
    document.querySelector(".XB5").style.background = "url(./images/XB25.webp)";
    document.querySelector(".XB5").style.backgroundSize = "cover";
    document.querySelector(".XB6").style.background = "url(./images/XB26.webp)";
    document.querySelector(".XB6").style.backgroundSize = "cover";
    document.querySelector(".XB7").style.background = "url(./images/XB27.webp)";
    document.querySelector(".XB7").style.backgroundSize = "cover";
    document.querySelector(".XB8").style.background = "url(./images/XB28.webp)";
    document.querySelector(".XB8").style.backgroundSize = "cover";
})

document.querySelector(".XB-DOT3").addEventListener("click", function(){
    $(".elvis14").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis14").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav14").style.background = " url(./images/XB1.webp)";
    document.querySelector(".fav14").style.backgroundSize = "cover";
    document.querySelector(".XB1").style.background = "url(./images/XB2.webp)";
    document.querySelector(".XB1").style.backgroundSize = "cover";
    document.querySelector(".XB2").style.background = "url(./images/XB3.webp)";
    document.querySelector(".XB2").style.backgroundSize = "cover";
    document.querySelector(".XB3").style.background = "url(./images/XB4.jpg)";
    document.querySelector(".XB3").style.backgroundSize = "cover";
    document.querySelector(".XB4").style.background = "url(./images/XB5.webp)";
    document.querySelector(".XB4").style.backgroundSize = "cover";
    document.querySelector(".XB5").style.background = "url(./images/XB6.webp)";
    document.querySelector(".XB5").style.backgroundSize = "cover";
    document.querySelector(".XB6").style.background = "url(./images/XB7.webp)";
    document.querySelector(".XB6").style.backgroundSize = "cover";
    document.querySelector(".XB7").style.background = "url(./images/XB8.webp)";
    document.querySelector(".XB7").style.backgroundSize = "cover";
    document.querySelector(".XB8").style.background = "url(./images/XB9.webp)";
    document.querySelector(".XB8").style.backgroundSize = "cover";
})

document.querySelector(".fav16").addEventListener("mouseover", function(){
    $(".fv16").animate({
        opacity: "1",
        transition: "0.1s"
    })
})

document.querySelector(".chevron-15").addEventListener("mouseover", function (){
    document.querySelector(".chevron-15").style.display = "none";
    document.querySelector(".b-25").style.display = "block";
})

document.querySelector(".chevron-16").addEventListener("mouseover", function(){
    document.querySelector(".chevron-16").style.display = "none";
    document.querySelector(".b-26").style.display = "block";
})

document.querySelector(".fav16").addEventListener("mouseleave", function(){
    $(".fv16").animate({
        opacity: "0",
        transition: "0.1s"
    })

    document.querySelector(".chevron-15").style.display = "block";
    document.querySelector(".b-25").style.display = "none";
    document.querySelector(".chevron-16").style.display = "block";
    document.querySelector(".b-26").style.display = "none";
})

document.querySelector(".RB-DOT1").addEventListener("click", function(){
    $(".elvis15").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis15").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav16").style.background = " url(./images/RAB8.webp)";
    document.querySelector(".fav16").style.backgroundSize = "cover";
    document.querySelector(".XB9").style.background = "url(./images/RAB9.webp)";
    document.querySelector(".XB9").style.backgroundSize = "cover";
    document.querySelector(".XB10").style.background = "url(./images/RAB10.webp)";
    document.querySelector(".XB10").style.backgroundSize = "cover";
    document.querySelector(".XB11").style.background = "url(./images/RAB11.webp)";
    document.querySelector(".XB11").style.backgroundSize = "cover";
    document.querySelector(".XB12").style.background = "url(./images/RAB12.webp)";
    document.querySelector(".XB12").style.backgroundSize = "cover";
    document.querySelector(".XB13").style.background = "url(./images/RAB13.webp)";
    document.querySelector(".XB13").style.backgroundSize = "cover";
    document.querySelector(".XB14").style.background = "url(./images/RAB14.webp)";
    document.querySelector(".XB14").style.backgroundSize = "cover";
})

document.querySelector(".RB-DOT2").addEventListener("click", function(){
    $(".elvis15").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis15").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav16").style.background = " url(./images/RAB15.webp)";
    document.querySelector(".fav16").style.backgroundSize = "cover";
    document.querySelector(".XB9").style.background = "url(./images/RAB16.webp)";
    document.querySelector(".XB9").style.backgroundSize = "cover";
    document.querySelector(".XB10").style.background = "url(./images/RAB17.JPG)";
    document.querySelector(".XB10").style.backgroundSize = "cover";
    document.querySelector(".XB11").style.background = "url(./images/RAB18.webp)";
    document.querySelector(".XB11").style.backgroundSize = "cover";
    document.querySelector(".XB12").style.background = "url(./images/RAB19.webp)";
    document.querySelector(".XB12").style.backgroundSize = "cover";
    document.querySelector(".XB13").style.background = "url(./images/RAB20.webp)";
    document.querySelector(".XB13").style.backgroundSize = "cover";
    document.querySelector(".XB14").style.background = "url(./images/RAB21.webp)";
    document.querySelector(".XB14").style.backgroundSize = "cover";
})

document.querySelector(".RB-DOT3").addEventListener("click", function(){
    $(".elvis15").animate({
        opacity: "0",
        Transition: "0.2s",
    })
    $(".elvis15").animate({
        opacity: "1",
        Transition: "0.2s",
    })

    document.querySelector(".fav16").style.background = " url(./images/RAB1.webp)";
    document.querySelector(".fav16").style.backgroundSize = "cover";
    document.querySelector(".XB9").style.background = "url(./images/RAB2.webp)";
    document.querySelector(".XB9").style.backgroundSize = "cover";
    document.querySelector(".XB10").style.background = "url(./images/RAB3.webp)";
    document.querySelector(".XB10").style.backgroundSize = "cover";
    document.querySelector(".XB11").style.background = "url(./images/RAB4.webp)";
    document.querySelector(".XB11").style.backgroundSize = "cover";
    document.querySelector(".XB12").style.background = "url(./images/RAB5.webp)";
    document.querySelector(".XB12").style.backgroundSize = "cover";
    document.querySelector(".XB13").style.background = "url(./images/RAB6.webp)";
    document.querySelector(".XB13").style.backgroundSize = "cover";
    document.querySelector(".XB14").style.background = "url(./images/RAB7.webp)";
    document.querySelector(".XB14").style.backgroundSize = "cover";
})