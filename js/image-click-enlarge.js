//get the images
let images = document.querySelectorAll(".images>img");
let enlargedImageDiv = document.getElementById("enlarged-image");

//add click event to all the images
images.forEach(image => {
    image.addEventListener("click",()=>{
        enlargedImageDiv.classList.add("visible-no-animation");
        enlargedImageDiv.classList.remove("hidden");
        enlargedImageDiv.appendChild(image.cloneNode());

        //add the alt text
        let p = document.createElement("p");
        p.innerText = image.getAttribute("alt");
        p.setAttribute("id", "enlarged-image-description");
        enlargedImageDiv.appendChild(p);
        console.log(p);
    })
});