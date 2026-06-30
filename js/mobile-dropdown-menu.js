let nav = document.getElementById("nav");
let menuButton = document.getElementById("menu-icon");
let closeMenuButton = document.getElementById("close-menu-icon");

menuButton.addEventListener("click", ()=>{
    
    if (nav.classList.contains("hidden")){ //if nav list is hidden, make it visible, switch buttons to close
        nav.classList.add("visible");
        nav.classList.remove("hidden");
        menuButton.remove("visible");
        menuButton.add("hidden");
        closeMenuButton.add("visible");
        closeMenuButton.remove("hidden");
    }else{
        nav.classList.add("hidden");
        nav.classList.remove("visible");
        closeMenuButton.add("hidden");
        closeMenuButton.remove("visible");
    }
})