// paralax jumbotron
$ (window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $ ('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'
    
    });
    $ ('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    
    });
    $ ('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/0.6 +'%)'

    });

});



