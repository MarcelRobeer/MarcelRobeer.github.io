$(document).ready(function() {
    $(window).on('scroll', function() {
    
        var docHeight = $(document).height(),
            winHeight = $(window).height();
    
        var viewport = docHeight - winHeight,
            positionY = $(window).scrollTop();
    
        var indicator = ( positionY / (viewport)) * 100;
    
        $('.scroll-bar').css('width', indicator + '%');
    
    
    });
});
