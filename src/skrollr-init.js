(function(){'use strict';

    var skrollr = window.skrollr;
    if( skrollr && !('init' in skrollr) ){
        var config = skrollr;
    }

    window.addEventListener('load', function(){
        window.skrollr.init( config );
    });
})();