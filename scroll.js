const move = (e) => {
    frameService.debounce(() => {
        follow.style.left = e.clientX + 'px';
        follow.style.top = e.clientY + 'px';
    })
};

const click = (e) => {
    frameService.debounce(() => {
        follow.classList.remove('animating');
        follow.classList.add('animating');
        setTimeout(function() { follow.classList.remove('animating')}, 1000);
    })
}

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
        })
}

let observer = new IntersectionObserver( scrolledInView, {
    root: null,
});

window.addEventListener('DOMContentLoaded', function() {
    elements = document.querySelectorAll('[data-animate]');
    elements.forEach((elem) => {observer.observe(elem)});

    follow = document.getElementById('follow');

    document.addEventListener('mousemove', (e) => { move(e); });
    document.addEventListener('mousedown', (e) => { click(e); });
});
