(function(){'use strict';

    var skrollr = window.skrollr;
    if( skrollr && ! skrollr.init ){
        var options = skrollr;
    }

    window.addEventListener('load', function(){
        window.skrollr.init( options );
    });
})();