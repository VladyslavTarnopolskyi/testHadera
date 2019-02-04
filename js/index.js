$(document).ready(function(){
    $('.success-msg').hide();
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navContainer: '#nav-arrow',
        dotsContainer: '#nav-dots'
    });
    $( ".owl-prev").html('<img src="img/left-arrow.png" alt="">');
    $( ".owl-next").html('<img src="img/right-arrow.png" alt="">');

    var form = $('#contact-form');

    form.submit(function (e) {

        e.preventDefault();

        $.ajax({
            type: form.attr('method'),
            url: form.attr("action"),
            data: form.serialize(),
            success: function (data) {
                console.log('Submission was successful.');
                console.log('Name: ' + $('#name').val());
                console.log('Phone: ' + $('#phone').val());
                console.log('Email: ' + $('#email').val());
                console.log('Country: ' + $('#select-country').val());
                if ($('#confirm').is(":checked")) {
                    console.log('Confirm: true');
                } else {
                    console.log('Confirm: false');
                }
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            }
        });
        form.hide();
        $('.success-msg').show();
    });


});