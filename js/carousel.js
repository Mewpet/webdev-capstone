//pictures
let img1 = "images/black and white forest.jpg";
let img2 = "images/landscape papyrus undyne.jpg";
let img3 = "images/landscape snowy forest.jpg";
let img4 = "images/landscape youre blue now.jpg";
let img5 = "images/portrait miya butterfly.jpg";
let img6 = "images/splash art sans gaster blaster.jpg";

//pictures the carousel rotates through
let images = [img2, img3, img4, img6];
let currentPos = 0;

let right = document.getElementById("carousel-right");
let left = document.getElementById("carousel-left");

let carouselImage = document.getElementById("carousel-image");

let isAutomatic = true;
let carouselTimeout = 7500;
let carouselTimer;

//accesibility
//prefers reduced motion
//aria tags to open and close in here

carouselImage.setAttribute("src",images[currentPos]);

right.addEventListener("click",()=>{
    clearTimeout(carouselTimer);
    carouselRight();
})

left.addEventListener("click", ()=>{
    clearTimeout(carouselTimer);
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
    carouselImage.classList.remove("fade-in");
    carouselImage.classList.add("fade-out");
    //wait 1 second
    setTimeout(()=>{carouselImage.setAttribute("src", images[currentPos]);
    carouselImage.classList.remove("fade-out");
    carouselImage.classList.add("fade-in");},600);
    
}

const startCarouselTimer = ()=>{
    if (!isAutomatic)return;
    carouselTimer = setTimeout(()=>{
        carouselRight();
        startCarouselTimer();
    }, carouselTimeout);
}
startCarouselTimer();

