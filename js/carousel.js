//pictures
let img1 = "../images/black and white forest.jpg";
let img2 = "../images/landscape papyrus undyne.jpg";
let img3 = "../images/landscape snowy forest.jpg";
let img4 = "../images/landscape youre blue now.jpg";
let img5 = "../images/portrait miya butterfly.jpg";
let img6 = "../images/splash art sans gaster blaster.jpg";

//pictures the carousel rotates through
let images = [img2, img3, img4, img6];
let currentPos = 0;

let right = document.getElementById("carousel-right");
let left = document.getElementById("carousel-left");

let carouselImage = document.getElementById("carousel-image");

let carouselTimeout = 5000;

carouselImage.setAttribute("src",images[currentPos]);

right.addEventListener("click",()=>{
    carouselRight();
})

left.addEventListener("click", ()=>{
    carouselLeft();
})

const carouselLeft = ()=>{
    currentPos--;
    if(currentPos<0)currentPos=images.length-1;
    updateCarouselImage();
}

const carouselRight = ()=>{
    currentPos++;
    currentPos=currentPos%images.length;
    updateCarouselImage();
}

const updateCarouselImage = ()=>{
    carouselImage.setAttribute("src", images[currentPos]);
}

const startCarouselTimer = ()=>{
    courselTimer = setTimeout(()=>{
        carouselRight();
        startCarouselTimer();
    }, carouselTimeout);
}
startCarouselTimer();

