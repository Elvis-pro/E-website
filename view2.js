const saveimage1 = localStorage.getItem("secound-div1")
const saveimage2 = localStorage.getItem("secound-div2")
const saveimage3 = localStorage.getItem("secound-div3")
const saveimage4 = localStorage.getItem("secound-div4")
const saveimage5 = localStorage.getItem("secound-div5")
const saveimage6 = localStorage.getItem("secound-div6")

const savedImageSrc10 = localStorage.getItem("product-colours1");
const savedImageSrc11 = localStorage.getItem("product-colours2");
const savedImageSrc12 = localStorage.getItem("product-colours3");
const savedImageSrc13 = localStorage.getItem("product-colours4");
const savedImageSrc14 = localStorage.getItem("product-colours5");



const img1 ="./images/S1.webp";
const img2 ="./images/S2.webp";
const img3 ="./images/S3.webp";
const img4 ="./images/S4.webp";
const img5 ="./images/S5.webp";
const img6 ="./images/S6.webp";

const img7 ="./images/S9.webp";
const img8 ="./images/S10.webp";
const img9 ="./images/S12.webp";
const img10 ="./images/S13.webp";
const img11 ="./images/S14.webp";
const img12 ="./images/S15.webp";


const img13 ="./images/S17.webp";
const img14 ="./images/S23.webp";
const img15 ="./images/S19.webp";
const img16 ="./images/S20.webp";
const img17 ="./images/S21.webp";
const img18 ="./images/S22.webp";

const img19 ="./images/S25.webp";
const img20 ="./images/S26.webp";
const img21 ="./images/S27.webp";
const img22 ="./images/S28.webp";
const img23 ="./images/S29.webp";
const img24 ="./images/S30.webp";

const img25 ="./images/Sh2.webp";
const img26 ="./images/Sh2-1.webp";
const img27 ="./images/Sh2-2.webp";
const img28 ="./images/Sh2-3.webp";
const img29 ="./images/Sh3-1.webp";
const img30 ="./images/Sh3-2.webp";

if (saveimage1) {
    //secound-div
    document.querySelector(".b1").setAttribute("src", saveimage1)
    document.querySelector(".b2").setAttribute("src", saveimage2)
    document.querySelector(".b3").setAttribute("src", saveimage3)
    document.querySelector(".b4").setAttribute("src", saveimage4)
    document.querySelector(".b5").setAttribute("src", saveimage5)
    document.querySelector(".b6").setAttribute("src", saveimage6)

    //product colors
    document.querySelector(".b7").setAttribute("src", savedImageSrc10); 
    document.querySelector(".b8").setAttribute("src", savedImageSrc11);
    document.querySelector(".b9").setAttribute("src", savedImageSrc12); 
    document.querySelector(".b10").setAttribute("src", savedImageSrc13);
    document.querySelector(".b11").setAttribute("src", savedImageSrc14);


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

