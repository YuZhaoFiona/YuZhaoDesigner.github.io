/**
 * @returns Document height
 */
function documentBottom() {
    return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
}

/**
 * @returns Heigth of the document outside of the screen. In other words, the distance between the bottom of the screen,
 * and the bottom of the document, according to the current scrolling position
 */
function distanceToBottom() {
    return Math.floor(documentBottom() - window.scrollY - window.innerHeight)
}


document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 768) {
        headerAnimation(0.5, 'header');
        footerAnimation(-0.5, 'footer', distanceToBottom);
    }
});

/**
 * Determine the scrolliing change in comparison with a previous state.
 * Negative when scrolling up, positive when scrolling down
 */

let oldScroll = 0

function scrollChange() {
    let scroll = window.scrollY - oldScroll;
    oldScroll = window.scrollY;
    return scroll;
}

/**
 * Header Animation.
 * It gradually hides the header when the user starts to scroll down.
 * It gradually shows the header when the user starts to scroll up.
 */
let translation = 0;
let translationChange = 0

function headerAnimation(rate, selector) {
    document.addEventListener('scroll', function() {
        const element = document.querySelector(selector);
        const elementHeight = element.clientHeight;

        // it can be a value between 0 and the header heigth
        if (translationChange >= 0 && translationChange <= elementHeight) {
            let proposedChange = translationChange + rate * scrollChange(); // calculates t
            if (proposedChange < 0) proposedChange = 0;
            if (proposedChange > elementHeight) proposedChange = elementHeight;
            translationChange = proposedChange;
        }

        translation = window.scrollY - translationChange;
        const menu = document.getElementById("menu");
        menu.style.transform = `translateY( ${translation}px)`;

    });
}

/**
 * Footer animation.
 * It displays footer with a parallax effect.
 */

function footerAnimation(rate, selector, func) {
    document.addEventListener('scroll', function() {
        const element = document.querySelector(selector);
        // Update the transform property based on the scroll position
        element.style.transform = `translateY( ${rate * func()}px)`;
    });
}