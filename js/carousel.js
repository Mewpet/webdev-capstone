//pictures in the carousel
let img1 = "../images/black and white forest.jpg";
let img2 = "../images/landscape papyrus undyne.jpg";
let img3 = "../images/landscape snowy forest.jpg";
let img4 = "../images/landscape youre blue now.jpg";
let img5 = "../images/portrait miya butterfly.jpg";
let img6 = "../images/splash art sans gaster blaster.jpg";

let images = [img1, img2, img3, img4, img5, img6];
let currentPos = 0;

let right = document.getElementById("carousel-right");
let left = document.getElementById("carousel-left");

let carouselImage = document.getElementById("carousel-image");

carouselImage.setAttribute("src",images[currentPos]);

right.addEventListener("click",()=>{
    currentPos++;
    currentPos=currentPos%images.length;
    console.log(currentPos);
    updateCarouselImage();
})

left.addEventListener("click", ()=>{
    currentPos--;
    if(currentPos<0)currentPos=images.length-1;
    updateCarouselImage();
})

const updateCarouselImage = ()=>{
    carouselImage.setAttribute("src", images[currentPos]);
}

