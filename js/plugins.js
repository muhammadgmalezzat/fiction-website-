// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    
    // scrollButton

    var scrollButton = $("#scroll-top");

    $(window).scroll(function()
    {
        if($(this).scrollTop() >= 700)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop :0},600);
    });
    var nice = false;
    $(function() {  
        nice = $("body").niceScroll();
    });

}());

// Place any jQuery/helper plugins in here.
