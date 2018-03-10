$(function () {
    var index=0;
    $('.xiazaian li ').on('mouseover',function () {
        index=$(this).index();
        $(this).css('background-color','#fff');
        $('.xiazaian li a').eq(index).css('color','#000');
    });
    $('.xiazaian li ').on('mouseout',function () {
        index=$(this).index();
        $(this).css('background-color','#585858');
        $('.xiazaian li a').eq(index).css('color','#fff');
    });
    $('.xuanzexiazaian li a .dianji1').on('click',function () {
        index=$(this).index();
        $(this).eq(index).addClass('layui-anim-scale');
    }).on('animationend',function () {
        index=$(this).index()
        $('.xuanzexiazaian li a .dianji1').eq(index).removeClass('layui-anim-scale')
    });
    $('.xuanzexiazaian li a .dianji2').on('click',function () {
        index=$(this).index();
        $(this).eq(index).addClass('layui-anim-scale');
    }).on('animationend',function () {
        index=$(this).index()
        $('.xuanzexiazaian li a .dianji2').eq(index).removeClass('layui-anim-scale')
    });
});

