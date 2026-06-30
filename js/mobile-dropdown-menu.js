let nav = document.getElementById("nav");
let menuButton = document.getElementById("menu-icon");

menuButton.addEventListener("click", ()=>{
    //if(menu.style.display=="")
    //nav.style.display = "none";
    if (nav.classList.contains("hidden")){
        nav.classList.add("visible");
        nav.classList.remove("hidden");
    }else{
        nav.classList.add("hidden");
        nav.classList.remove("visible");
    }
})