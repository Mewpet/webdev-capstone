//get the images
let images = document.querySelectorAll(".images>img");
let enlargedImageDiv = document.getElementById("enlarged-image");

//add click event to all the images
images.forEach(image => {
    image.addEventListener("click",()=>{
        enlargedImageDiv.classList.add("visible");
        enlargedImageDiv.classList.remove("hidden");
        enlargedImageDiv.appendChild(image.cloneNode());
        
    })
});