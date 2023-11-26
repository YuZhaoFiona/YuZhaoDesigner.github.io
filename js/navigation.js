document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 768) return; // Don't do anything on larger screens

    const burger = document.getElementById("nav-icon")
    burger.onclick = function() {
        console.log("click")
        const navSection = document.getElementById("menu-mobile")
        navSection.classList.contains("nav-open") ?
            closeMenu(burger, navSection) :
            openMenu(burger, navSection)
    }
});

function openMenu(burger, menu) {
    menu.classList.add("nav-open")
    menu.classList.remove("nav-closed")
    burger.classList.add("fa-xmark")
    burger.classList.remove("fa-bars")
    document.body.classList.add("no-scroll");
}

function closeMenu(burger, menu) {
    menu.classList.add("nav-closed")
    menu.classList.remove("nav-open")
    burger.classList.remove("fa-xmark")
    burger.classList.add("fa-bars")
    document.body.classList.remove("no-scroll");
}