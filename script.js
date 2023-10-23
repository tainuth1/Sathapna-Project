const clickIcon = document.getElementById("search-icon");
const showSearch = document.getElementById("show-input");

clickIcon.addEventListener("click", function(){
    showSearch.style.display = showSearch.style.display === "block" ? "none" : "block";
});


// const barIcon = document.getElementById("bar-menu");
// const menuShow = document.getElementById("menu-show");

// barIcon.addEventListener("click", function(){
//     menuShow.style.display = menuShow.style.display === "block" ? "none" : "block";
// });



// window.addEventListener("scroll", () => {
//     const navbar = document.getElementById("navbar");
//     if (window.scrollY > 0) {
//         navbar.style.backgroundColor = "white";
//         navbar.style.hover = "white";
//     } else {
//         navbar.style.backgroundColor = "transparent";
//     }
// });
// window.addEventListener("scroll", () => {
//     const navbar = document.getElementById("navbar");
//     if (window.scrollY > 0) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });