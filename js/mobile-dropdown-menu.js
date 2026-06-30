let nav = document.getElementById("nav");
let menuButton = document.getElementById("menu-icon");
let closeMenuButton = document.getElementById("close-menu-icon");

menuButton.addEventListener("click", ()=>{
    
    if (nav.classList.contains("hidden")){ //if nav list is hidden, make it visible, switch buttons to close
        nav.classList.add("visible");
        nav.classList.remove("hidden");
        menuButton.innerHTML="Ⓧ";
    }else{
        nav.classList.add("hidden");
        nav.classList.remove("visible");
        menuButton.innerHTML="≡";
    }
})