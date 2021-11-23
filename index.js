
// constants
const menu = document.querySelector("#mobileMenu");

const menuLinks = document.querySelector(".menuNav");

const navLogo = document.querySelector("#logoNav");

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

//Show active menu when scrolling
const higlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#homePage");
    const aboutMenu = document.querySelector("#aboutPage");
    const servicesMenu = document.querySelector("#servicesPage");

    let scrollPos = window.scrollY;

    //adds 'higlight' class to menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 900 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 900 && scrollPos < 2345) {
        aboutMenu.classList.remove("highlight");
        servicesMenu.classList.add("highlight");
        return;
    }

    if(elem && window.innerWidth < 960 && scrollPos <600 ) {
        elem.classList.remove("highlight");
    }

};

window.addEventListener("scroll", higlightMenu);
window.addEventListener("click", higlightMenu);

// Close Mobile Menu when clicking an item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);