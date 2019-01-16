// $('#pagination').find('a').eq(0).addClass('active');
slidePage.navigationHolder = $("#pagination");
slidePage.init({
    /*'index': 1,*/
    before: function (index, direction, target) {
        var animate_index = 0;
        if (direction == 'next') {
            if (target == 1) {
                slidePage.fire(2)
            }
            animate_index = index;
            $('#pagination').find('a').removeClass('active').eq(index).addClass('active')
            // console.log(slidePage.currentItem());
        } else if (direction == 'prev') {
            animate_index = index - 1;
            // console.log(slidePage.currentItem());
            $('#pagination').find('a').removeClass('active').eq(target - 1).addClass('active')
        }
        setTimeout(function () {
            $('.slide').eq(animate_index).find('h1').addClass('wow fadeIn animated');
        }, 500);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.mokup-holder .slide_img').addClass('wow fadeIn animated');
        }, 1300);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.cricle-steps.orange').addClass('wow fadeIn animated');
        }, 1700);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.cricle-steps.red').addClass('wow fadeIn animated');
        }, 2100);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.cricle-steps.green').addClass('wow fadeIn animated');
        }, 2500);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.cricle-steps.purple').addClass('wow fadeIn animated');
        }, 2900);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.fade-left').addClass('wow fadeInLeft animated');
        }, 700);
        setTimeout(function () {
            $('.slide').eq(animate_index).find('.fade-right').addClass('wow fadeInRight animated');
        }, 700);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('h1').addClass('wow fadeInUp animated');
        // }, 500);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('h1').addClass('wow fadeInRight animated');
        // }, 300);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('h1').addClass('wow fadeInLeft animated');
        // }, 400);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.customer_field p').addClass('wow fadeInUp animated');
        // }, 500);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p1').addClass('wow fadeInUp animated');
        // }, 1000);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p2').addClass('wow fadeInUp animated');
        // }, 1050);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p3').addClass('wow fadeInUp animated');
        // }, 1100);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p4').addClass('wow fadeInUp animated');
        // }, 1150);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p5').addClass('wow fadeInUp animated');
        // }, 1200);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p6').addClass('wow fadeInUp animated');
        // }, 1250);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p7').addClass('wow fadeInUp animated');
        // }, 1300);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.p8').addClass('wow fadeInUp animated');
        // }, 1350);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.contact_field img').addClass('wow fadeInUp animated');
        // }, 200);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.contact_address div').addClass('wow fadeInDown animated');
        // }, 500);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.contact_form').addClass('wow fadeInUp animated');
        // }, 800);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.product_information').addClass('wow fadeInLeft animated');
        // }, 500);
        // setTimeout(function () {
        //     $('.slide').eq(animate_index).find('.product_view img').addClass('wow fadeInRight animated');
        // }, 700);
    },
    after: function (index, direction, target) {
    },
    'useAnimation': true,
    'refresh': true,
    'speed': false,
});