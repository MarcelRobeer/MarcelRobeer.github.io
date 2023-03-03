function scrolledInView( entries ) {
    var itemLoad = 0;

    entries.forEach( entry => {
        if ( entry.isIntersecting ) {
            entry.target.classList.add('in-view');
            entry.target.classList.add('in-view-first');
            entry.target.setAttribute('data-delay', (itemLoad * 120).toString() + "ms");
            entry.target.style.transitionDelay = entry.target.getAttribute('data-delay');
            itemLoad++;
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}

let observer = new IntersectionObserver( scrolledInView, {
    root: null,
});

window.addEventListener('DOMContentLoaded', function() {
    elements = document.querySelectorAll('[data-animate]');
    elements.forEach((elem) => {observer.observe(elem)});
});
