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
            document.querySelector("h2").style.color = "white";
            document.querySelectorAll("a")[2].style.color = "";
            document.querySelectorAll("a")[3].style.color = "";
            document.querySelectorAll("a")[4].style.color = "";
        })
        document.querySelector(".third-nav").addEventListener("mouseleave", function () {
            document.querySelector("h2").style.color = "white";
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
