function documentBottom() {
    return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
}

function distanceToBottom() {
    return Math.floor(documentBottom() - window.scrollY - window.innerHeight)
}

function getScrollingPosition() {
    return window.scrollY;
}


document.addEventListener('DOMContentLoaded', function() {
    parallaxAnimation2(0.3, 'header', getScrollingPosition);
    parallaxAnimation(-0.5, 'footer', distanceToBottom);
});

function parallaxAnimation(rate, selector, func) {
    document.addEventListener('scroll', function() {
        const element = document.querySelector(selector);
        // Update the transform property based on the scroll position
        element.style.transform = `translateY( ${rate * func() }px)`;
    });
}


let translation = 0;

function parallaxAnimation2(rate, selector, func) {
    document.addEventListener('scroll', function() {
        const element = document.querySelector(selector);

        const offset = (1 - rate) * func();
        const elementHeight = element.clientHeight;
        if (offset >= elementHeight) {
            newValue = func();
            console.log("Translation", translation)
            console.log("Func value", newValue)
            if (translation >= newValue) { // scrolling up
                translation = newValue;
            } else {
                translation = newValue - elementHeight;
            }


        } else {
            translation = rate * func()
        }

        element.style.transform = `translateY( ${translation}px)`;

        // Update the transform property based on the scroll position

    });
}