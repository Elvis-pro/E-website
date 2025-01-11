const savedImageSrc = localStorage.getItem("sharedImageSrc");
const savedImageSrc1 = localStorage.getItem("sharedImageSrc1");
const savedImageSrc2 = localStorage.getItem("sharedImageSrc2");
const savedImageSrc3 = localStorage.getItem("sharedImageSrc3");
const savedImageSrc4 = localStorage.getItem("sharedImageSrc4");
const savedImageSrc5 = localStorage.getItem("sharedImageSrc5");

const savedImageSrc6 = localStorage.getItem("productimage1");
const savedImageSrc7 = localStorage.getItem("productimage2");
const savedImageSrc8 = localStorage.getItem("productimage3");
const savedImageSrc9 = localStorage.getItem("productimage4");


const img1 ="./images/sh1.webp";
const img2 ="./images/sh1-2.webp";
const img3 ="./images/sh1-3.webp";
const img4 ="./images/sh1-4.webp";
const img5 ="./images/sh1-5.webp";
const img6 ="./images/sh1-6.webp";

const img7 ="./images/L1.webp";
const img8 ="./images/L2.webp";
const img9 ="./images/L3.webp";
const img10 ="./images/L4.webp";
const img11 ="./images/L5.webp";
const img12 ="./images/L6.webp";


const img13 ="./images/f3.webp";
const img14 ="./images/f2.webp";
const img15 ="./images/f1.webp";
const img16 ="./images/f4.webp";
const img17 ="./images/f5.webp";
const img18 ="./images/f7.webp";

const img19 ="./images/T1.webp";
const img20 ="./images/T2.webp";
const img21 ="./images/T3.webp";
const img22 ="./images/T4.webp";
const img23 ="./images/T5.webp";
const img24 ="./images/T7.webp";

        
if (savedImageSrc) {
    document.querySelector(".b1").setAttribute("src", savedImageSrc); 
    document.querySelector(".b2").setAttribute("src", savedImageSrc1); 
    document.querySelector(".b3").setAttribute("src", savedImageSrc2); 
    document.querySelector(".b4").setAttribute("src", savedImageSrc3);
    document.querySelector(".b5").setAttribute("src", savedImageSrc4); 
    document.querySelector(".b6").setAttribute("src", savedImageSrc5);

    //product colours
    document.querySelector(".b7").setAttribute("src", savedImageSrc6); 
    document.querySelector(".b8").setAttribute("src", savedImageSrc7);
    document.querySelector(".b9").setAttribute("src", savedImageSrc8); 
    document.querySelector(".b10").setAttribute("src", savedImageSrc9);

} else {
    alert("No image source found. Go back to the first page and set it.");
}



document.querySelector(".P1").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img1); 
    document.querySelector(".b2").setAttribute("src", img2); 
    document.querySelector(".b3").setAttribute("src", img3); 
    document.querySelector(".b4").setAttribute("src", img4);
    document.querySelector(".b5").setAttribute("src", img5); 
    document.querySelector(".b6").setAttribute("src", img6);
})

document.querySelector(".P2").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img13); 
    document.querySelector(".b2").setAttribute("src", img14); 
    document.querySelector(".b3").setAttribute("src", img15); 
    document.querySelector(".b4").setAttribute("src", img16);
    document.querySelector(".b5").setAttribute("src", img17); 
    document.querySelector(".b6").setAttribute("src", img18);
})

document.querySelector(".P3").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img7); 
    document.querySelector(".b2").setAttribute("src", img8); 
    document.querySelector(".b3").setAttribute("src", img9); 
    document.querySelector(".b4").setAttribute("src", img10);
    document.querySelector(".b5").setAttribute("src", img11); 
    document.querySelector(".b6").setAttribute("src", img12);
})

document.querySelector(".P4").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img19); 
    document.querySelector(".b2").setAttribute("src", img20); 
    document.querySelector(".b3").setAttribute("src", img21); 
    document.querySelector(".b4").setAttribute("src", img22);
    document.querySelector(".b5").setAttribute("src", img23); 
    document.querySelector(".b6").setAttribute("src", img24);
})

