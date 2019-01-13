$('document').ready(function () {
    console.log('Powered by Li Lliam')

    // loader 2.5s    
    setTimeout(function () {
        $('.loader').css('transform', 'translateX(100%)');
    }, 2500)

    //presentacion name animation (5s)
    setTimeout(function () {
        $('.loader').css('display', 'none');
        $('.about-me .me').css('opacity', '1');
        $('.intro').addClass('go');
        setTimeout(function () {
                $('.about-me .me .subtitle').css('opacity', '1');
                $('.about-me .me .subtitle').css('transform', 'translateY(-20px)');

                setTimeout(function () {
                    $('.about-me .me .subtitle').css('transform', 'translateY(-100px)');
                    $('.about-me .me .subtitle').css('opacity', '0');
                    $('.intro.go .text-stroke').css('opacity','0')
            }, 1000)
        }, 500)
    }, 2500 + 1000)

    setTimeout(function(){
        $('.about-me .me').css('display', 'none');
        $('.about-me .resume').css('opacity', '1');
    },6000)




})
