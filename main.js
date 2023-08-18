// burger menu
const burger = document.getElementById("nav-burger")
burger.onclick = function() {
    console.log("click")
    const navMenu = document.getElementById("nav-list")
    navMenu.classList.contains("nav-open") ?
        closeMenu(burger, navMenu) :
        openMenu(burger, navMenu)
}

function openMenu(burger, menu) {
    menu.classList.add("nav-open")
    menu.classList.remove("nav-close")
    burger.classList.add("fa-xmark")
    burger.classList.remove("fa-bars")
}

function closeMenu(burger, menu) {
    menu.classList.add("nav-close")
    menu.classList.remove("nav-open")
    burger.classList.remove("fa-xmark")
    burger.classList.add("fa-bars")
}



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const h1Tags = document.querySelectorAll('h1.indicator_lists');

h1Tags.forEach((h1, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const text = document.createTextNode(h1.innerText);

    a.appendChild(text);
    a.href = `#section-${index + 1}`;

    li.appendChild(a);
    document.querySelector('#indicator-list').appendChild(li);
});






(function() {

    const cursor = document.querySelector('.cursor');

    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    window.addEventListener('mousemove', editCursor);

})();

(function() {


    let mouseCursor = document.querySelector('.cursor');
    let links = document.querySelectorAll('.hover-this');

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        gsap.to(mouseCursor, 0.4, {
            x: e.clientX,
            y: e.clientY
        });
    }

    links.forEach(link => {
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            gsap.to(mouseCursor, 0.4, {
                scale: 1
            });
        });

        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            gsap.to(mouseCursor, 0.4, {
                scale: 2
            });
        });
    });

})();