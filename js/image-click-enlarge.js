//get the images
let images = document.querySelectorAll(".images>img");
let enlargedImageDiv = document.getElementById("enlarged-image");


//add click event to all the images
images.forEach(image => {
    image.setAttribute("tabindex","0");
    image.addEventListener("click",()=>{
        openEnlargedImage(image);
    })
    image.addEventListener("keypress",(event)=>{
        if(event.key=="Enter" || event.key==" "){
            if(enlargedImageDiv.classList.contains("hidden")){
                openEnlargedImage(image);
                image.focus();
            }else{
                closeEnlargedImage();
            }
            
        }
        
    })
});

enlargedImageDiv.addEventListener("click", ()=>{
    closeEnlargedImage();
})
enlargedImageDiv.addEventListener("keypress", (event)=>{
    //closeEnlargedImage();
})

const openEnlargedImage = (image)=>{
        enlargedImageDiv.classList.add("enlarged-image");
        enlargedImageDiv.classList.remove("hidden");
        enlargedImageDiv.appendChild(image.cloneNode());

        //add the alt text
        let p = document.createElement("p");
        p.innerText = image.getAttribute("description");
        p.setAttribute("id", "enlarged-image-description");
        enlargedImageDiv.appendChild(p);
}
const closeEnlargedImage = (image)=>{
    enlargedImageDiv.classList.add("hidden");
    enlargedImageDiv.classList.remove("enlarged-image");
    enlargedImageDiv.innerHTML="";
}