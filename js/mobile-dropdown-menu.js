let nav = document.getElementById("nav");
let menuButton = document.getElementById("menu-icon");
let closeMenuButton = document.getElementById("close-menu-icon");

const toggleNavBar = ()=>{
    if (nav.classList.contains("hidden")){ //if nav list is hidden, make it visible, switch buttons to close
        nav.classList.add("visible");
        nav.classList.remove("hidden");
        menuButton.innerHTML="ᚷ";
    }else{
        nav.classList.add("hidden");
        nav.classList.remove("visible");
        menuButton.innerHTML="≡";
    }
}

menuButton.addEventListener("click", ()=>{
    toggleNavBar();
})

menuButton.addEventListener("keydown", (event)=>{
    if(event.key=="Tab")return; //stop from opening on tab press
    toggleNavBar();
})