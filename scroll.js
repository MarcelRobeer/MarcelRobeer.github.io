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
        setTimeout(function() { follow.classList.remove('animating')}, 600);
    })
}

function scrolledInView( entries ) {
    var itemLoad = 0;

    entries.forEach( entry => {
            if ( entry.isIntersecting ) {
                entry.target.classList.add('in-view');
                entry.target.classList.add('in-view-first');
                if ( entry.target.hasAttribute('data-delaytime') ) {
                    delayTime = parseInt(entry.target.getAttribute('data-delaytime'));
                } else {
                    delayTime = 120;
                }
                entry.target.setAttribute('data-delay', (itemLoad * delayTime).toString() + "ms");
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
    follow.style.left = window.innerWidth / 2 + 'px';
    follow.style.top = window.innerHeight / 2 + 'px';

    document.addEventListener('mousemove', (e) => { move(e); });
    document.addEventListener('mousedown', (e) => { click(e); });
});
