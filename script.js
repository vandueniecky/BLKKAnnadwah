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

// Contact 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyX4x7yxDJyNM3vx3YRpHz1BiC_5p87bE3k8EipBX9o9XtD7pnESR6h3hGppl237vDa/exec'
const form = document.forms['contact-from-webiste'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault();
        // ketika tombol sumbit diklik
        // tampilkan tombol loading dan hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // setelah tombol sumbit diklik
        // tampilkan tombol kirim dan hilangkan loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan alert pesan success 
        myAlert.classList.toggle('d-none');
        // reset form nya
        form.reset();

        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
});