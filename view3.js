const saveimage1 = localStorage.getItem("third-images")
const saveimage2 = localStorage.getItem("third-image1")
const saveimage3 = localStorage.getItem("third-image2")
const saveimage4 = localStorage.getItem("third-image3")
const saveimage5 = localStorage.getItem("third-image4")
const saveimage6 = localStorage.getItem("third-image5")

const savedImageSrc10 = localStorage.getItem("image-color1");
const savedImageSrc11 = localStorage.getItem("image-color2");
const savedImageSrc12 = localStorage.getItem("image-color3");
const savedImageSrc13 = localStorage.getItem("image-color4");
const savedImageSrc14 = localStorage.getItem("image-color5");
const savedImageSrc15 = localStorage.getItem("image-color6");
const savedImageSrc16 = localStorage.getItem("image-color7");


const img1 ="./images/K1.webp";
const img2 ="./images/K2.webp";
const img3 ="./images/K4.webp";
const img4 ="./images/k5.webp";
const img5 ="./images/k6.webp";
const img6 ="./images/k7.webp";

const img7 ="./images/k9.webp";
const img8 ="./images/k10.webp";
const img9 ="./images/k11.webp";
const img10 ="./images/k12.webp";
const img11 ="./images/k13.webp";
const img12 ="./images/k14.webp";


const img13 ="./images/k17.webp";
const img14 ="./images/k23.webp";
const img15 ="./images/k19.webp";
const img16 ="./images/k20.webp";
const img17 ="./images/k21.webp";
const img18 ="./images/k22.webp";

const img19 ="./images/k25.webp";
const img20 ="./images/k26.webp";
const img21 ="./images/k27.webp";
const img22 ="./images/k28.webp";
const img23 ="./images/k29.webp";
const img24 ="./images/k30.webp";

const img25 ="./images/K33.webp";
const img26 ="./images/K34.webp";
const img27 ="./images/K35.webp";
const img28 ="./images/K36.webp";
const img29 ="./images/K37.webp";
const img30 ="./images/K38.webp";

const img32 ="./images/sh5.webp";
const img33 ="./images/sh4-8.webp";
const img34 ="./images/sh4-3.webp";
const img35 ="./images/sh4-4.webp";
const img36 ="./images/sh4-5.webp";
const img37 ="./images/sh4-6.jpg";

const img38 ="./images/D1.webp";
const img39 ="./images/D2.webp";
const img40 ="./images/D3.webp";
const img41 ="./images/D4.webp";
const img42 ="./images/D5.webp";
const img43 ="./images/D6.webp";


if (saveimage1) {
    //secound-div
    document.querySelector(".a11").setAttribute("src", saveimage1)
    document.querySelector(".a12").setAttribute("src", saveimage2)
    document.querySelector(".a13").setAttribute("src", saveimage3)
    document.querySelector(".a14").setAttribute("src", saveimage4)
    document.querySelector(".a15").setAttribute("src", saveimage5)
    document.querySelector(".a16").setAttribute("src", saveimage6)

    //product colors
    document.querySelector(".b7").setAttribute("src", savedImageSrc10); 
    document.querySelector(".b8").setAttribute("src", savedImageSrc11);
    document.querySelector(".b9").setAttribute("src", savedImageSrc12); 
    document.querySelector(".b10").setAttribute("src", savedImageSrc13);
    document.querySelector(".b11").setAttribute("src", savedImageSrc14);
    document.querySelector(".b12").setAttribute("src", savedImageSrc15);
    document.querySelector(".b13").setAttribute("src", savedImageSrc16);

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
    document.querySelector(".b1").setAttribute("src", img7); 
    document.querySelector(".b2").setAttribute("src", img8); 
    document.querySelector(".b3").setAttribute("src", img9); 
    document.querySelector(".b4").setAttribute("src", img10);
    document.querySelector(".b5").setAttribute("src", img11); 
    document.querySelector(".b6").setAttribute("src", img12);
})

document.querySelector(".P3").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img13); 
    document.querySelector(".b2").setAttribute("src", img14); 
    document.querySelector(".b3").setAttribute("src", img15); 
    document.querySelector(".b4").setAttribute("src", img16);
    document.querySelector(".b5").setAttribute("src", img17); 
    document.querySelector(".b6").setAttribute("src", img18);
})

document.querySelector(".P4").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img19); 
    document.querySelector(".b2").setAttribute("src", img20); 
    document.querySelector(".b3").setAttribute("src", img21); 
    document.querySelector(".b4").setAttribute("src", img22);
    document.querySelector(".b5").setAttribute("src", img23); 
    document.querySelector(".b6").setAttribute("src", img24);
})

document.querySelector(".P5").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img25); 
    document.querySelector(".b2").setAttribute("src", img26); 
    document.querySelector(".b3").setAttribute("src", img27); 
    document.querySelector(".b4").setAttribute("src", img28);
    document.querySelector(".b5").setAttribute("src", img29); 
    document.querySelector(".b6").setAttribute("src", img30);
})

document.querySelector(".P6").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img32); 
    document.querySelector(".b2").setAttribute("src", img33); 
    document.querySelector(".b3").setAttribute("src", img34); 
    document.querySelector(".b4").setAttribute("src", img35);
    document.querySelector(".b5").setAttribute("src", img36); 
    document.querySelector(".b6").setAttribute("src", img37);
})

document.querySelector(".P7").addEventListener("click", function (){
    document.querySelector(".b1").setAttribute("src", img38); 
    document.querySelector(".b2").setAttribute("src", img39); 
    document.querySelector(".b3").setAttribute("src", img40); 
    document.querySelector(".b4").setAttribute("src", img41);
    document.querySelector(".b5").setAttribute("src", img42); 
    document.querySelector(".b6").setAttribute("src", img43);
})

