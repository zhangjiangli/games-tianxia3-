/**
 * Created by Administrator on 2017/12/8.
 */

$(function () {
    $("#demo1").logosDistort();
    //��Ƶ
    $("video").mouseover(function () {
        $("video").attr("controls","true");
    });
    $(".controlBtn").click(function () {
        $(".controlBtn").hide();
        $(".video").show();
        $(".bigHiddenBox").css("display","block");
        $(".closeBtn").show();
        $(".closeBtn").click(function () {
            $(".controlBtn").show();
            $(this).hide();
            $(".video").hide();
            $(".bigHiddenBox").css("display","none");
        });
    });


    /*�ֲ�ͼ*/
    /*SmartCrop.crop($("#img1"), {width: 100, height: 100}, function(result){console.log(result);});*/
    //��������ֲ�����ʱ����ÿ��li�����ʽ����ʾ��Ӧ��ul
    $("#ul_item li").on("mouseover", function () {
        $(".hoverStyle").removeClass("hoverStyle");
        $(this).addClass("hoverStyle");
        var index = $(this).index();
        $(".carousel_Img").eq(index).show(20);
        $(".carousel_Img").eq(index).parent().siblings(".carousel_ImgBox").children().hide(20);
    });

    //�ֲ�Ч��
    var index = 0;
    $("#carouselItem div").on("mouseover", function () {
        $(".current").removeClass("current");
        $(this).addClass("current");
        index = $(this).index();
        var target = index * $(".carousel").width() * -1;
        $(".carousel_Img").animate({left: target}, 300, 'swing');
    });
    var timer = setInterval(moving, 2500);

    //����ƽ�ȥʱ��ֹͣ�ֲ�
    $(".carousel").on("mouseover", function () {
        clearInterval(timer);
    });
    $(".carousel").on("mouseout", function () {
        timer = setInterval(moving, 2500);
    });
    function moving() {
        if (index == 3) {
            index = 0;
            $(".carousel_Img").css('left', '0');
        }
        index++;
        if (index == 3) {
            $(".current").removeClass("current");
            $("#carouselItem div").eq(0).addClass("current");
        } else {
            $(".current").removeClass("current");
            $("#carouselItem div").eq(index).addClass("current");
        }
        var target = index * $(".carousel").width() * -1;
        $(".carousel_Img").animate({left: target}, 300, 'swing');
    }

    /*tab��*/
    $(".tabItem ul li").on("mouseover", function () {
        $(this).addClass("newStyle").siblings().removeClass("newStyle");
        var itemIndex = $(this).index();
        $(".tabImg .img_box").eq(itemIndex).stop().animate({opacity: 1}, 500).siblings().stop().animate({opacity: 0}, 500);
    });

    //�ڸǲ�
    $(".moreJXBox .knowMore").on("mouseover", function () {
        $(".style").removeClass("style");
        $(this).addClass("style");
         //�����ڸǲ�ͱ���
        $(this).on("click", function () {
            var btnIndex=$(".moreJXBox .knowMore").index($(this));
            $(".layui-this").removeClass("layui-this");
            $(".nav_item").eq(btnIndex+1).addClass("layui-this");
            $(".content").eq(btnIndex+1).show().siblings(".content").hide();
            //tabЧ��
            $(".nav_item").on("mouseover", function () {
                var liIndex=$(this).index();
                $(".layui-this").removeClass("layui-this");
                $(".content").eq(liIndex).show().siblings(".content").hide();
            });

            $(".hiddenBox").show();
            $(".bigHiddenBox").css("display","block");

        });
        //�رհ�ť �رյ������ڸǲ�
        $("#closeBtn").click(function () {
            $(".hiddenBox").hide();
            $(".bigHiddenBox").css("display","none");
        });
        //tab��Ч��

    });
    $(".moreJXBox .knowMore").on("mouseout", function () {
        $(".style").removeClass("style");
    });

    //11������
    var currentIndex=0;
    $("#people_item li").on("mouseover", function () {
        $(this).addClass("borderStyle").siblings().removeClass("borderStyle");
        currentIndex = $(this).index();
        $(".peopleImg").eq(currentIndex).stop().animate({opacity: '1'}, 300).siblings(".peopleImg").stop().animate({opacity: '0'}, 300);
    });

    //

    var timer2 = setInterval(toggleFunc, 2000);
    function toggleFunc(){
        if (currentIndex == 10) {
            currentIndex = 0;
            /*$(".carousel_Img").css('left', '0');*/
        }else{
            currentIndex++;
        }
        /*currentIndex++;*/
        $("#people_item li").eq(currentIndex).addClass("borderStyle").siblings().removeClass("borderStyle");
        //var currentIndex = $(this).index();
        $(".peopleImg").eq(currentIndex).stop().animate({opacity: '1'}, 300).siblings(".peopleImg").stop().animate({opacity: '0'}, 300);
    }
    $(".tabPeople").on("mouseover", function () {
        clearInterval(timer2);
    });
    $(".tabPeople").on("mouseout", function () {
        timer2 = setInterval(toggleFunc, 2000);
    });

    //�������
    layui.use('element', function(){
        var element = layui.element;
        //��
    });

});