class FrameService {
    frame = null

    debounce = (callback, ...args) => {
        if (this.frame) this.cancel()

        this.frame = requestAnimationFrame(() => {
        this.frame = null
        callback(...args)
        })
    }

    cancel = () => {
        cancelAnimationFrame(this.frame)
    }
}

const frameService = new FrameService()

window.addEventListener('DOMContentLoaded', function() {
    elem = document.querySelector('.scroll-bar');
    window.addEventListener('scroll', (event) => {
        frameService.debounce(() => {
            var docHeight = document.documentElement.scrollHeight;
            var winHeight = document.documentElement.clientHeight;
            var scrollTop = (document.body && document.body.scrollTop) ? document.body.scrollTop : document.documentElement.scrollTop;    
            elem.style.width = (scrollTop / (docHeight - winHeight)) * 100 + '%';
        });
    });
});
