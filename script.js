// wScroll
$ (window).scroll(function(){

    // navbar transparant to color on scrollTop
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 350);

    // jumbotron
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

    // About

    
    // Facility timeline
    if( wScroll > $ ('.facility').offset().top -350) {
        $('.facility .timeline ul li').each(function(i){
            setTimeout(function() {

                $('.facility .timeline ul li').eq(i).addClass('fade');

            }, 300 * (i+1));
        });

    }


});

// Click Scroll Trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

$('.close-trigger').click(function() {
    $('span.navbar-toggler-icon').toggleClass('close');
});





