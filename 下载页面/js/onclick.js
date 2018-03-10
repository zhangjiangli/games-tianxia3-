$(function () {
    $('.zhaohaizi li a').on('mouseover', function () {
        $(this).css('background-position-y','48px');
    });
    $('.zhaohaizi li a').on('mouseout',function () {
        $('.zhaohaizi li a').css('background-position-y','1px')
    });
});