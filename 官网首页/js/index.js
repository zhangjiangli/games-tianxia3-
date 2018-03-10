$(function () {

    // 鼠标星星
    //     $(".w").jstars({
    //         image_path:"images",
    //         style:"blue",
    //         frequency:19,
    //         width:22,
    //         height:22
    //     });


    // banner  轮播图

            var index = 0;
            $(".dahe-mid .list i").on("mouseover",function () {
                index = $(this).index();
                var target = -index * $(".dahe-mid li").width();
                console.log(index);
                console.log(target);

                $(".dahe-mid #imglist").stop().animate({"left":target},1000);

                $(".dahe-mid .list i").removeAttr("class");
                $(this).addClass("current")

            });

            setInterval(function () {
                if(index==4){
                    index=0;
                    $(".dahe-mid #imglist").css("left",0);
                    // $(".dahe-mid .list i").eq(1).addClass("current")
                }
                    index++;
                    var target = -index * $(".dahe-mid li").width();

                    $(".dahe-mid #imglist").stop().animate({"left":target},1000);
                    $(".dahe-mid .list i").removeAttr("class");
                    $(".dahe-mid .list i").eq(index).addClass("current")





            },2000);

//角色动画  banner
    $(function () {

        var index = 0;
        $(".smimg li").on("mouseover", function () {
            index = $(".smimg li").index(this);
            // console.log(index);

            $(".left").stop().animate({"left": "-50px", "opacity": "0"}, 1000);
            $(".juese .left").eq(index).stop().animate({"left": "50px", "opacity": "1"}, 1000);

            $(".right").stop().animate({"right":"-100px","opacity":"0"},1000);
            $(".juese .right").eq(index).stop().animate({"right": "0", "opacity": "1"}, 1000);

            $(this).css({"border":"3px double #FFFF00","outline":"1px solid #FFFF00"}).siblings().css({
                "border":"3px double rgba(0,0,0,0)","outline":"none"
            })



        })

        setInterval(function () {
            if(index==11){
                index=0;

            }
            index++;
            $(".left").stop().animate({"left": "-50px", "opacity": "0"}, 1000);
            $(".juese .left").eq(index).stop().animate({"left": "50px", "opacity": "1"}, 1000);

            $(".right").stop().animate({"right":"-100px","opacity":"0"},1000);
            $(".juese .right").eq(index).stop().animate({"right": "0", "opacity": "1"}, 1000);
            $(".smimg li").eq(index).css({"border":"3px double #FFFF00","outline":"1px solid #FFFF00"}).siblings().css({
                "border":"3px double rgba(0,0,0,0)","outline":"none"
            })

        },3000)



    })


        //logo 动画
        var logotime = setInterval(function () {
            $("h1").stop().hide(300).show(300).animate({"padding-top": "-10px"}, 100)


        }, 700);


        // 背景动画  -----没效果
        // setInterval(function () {
        //     $(".banner").animate({"background":"url(../images/nav_bg_cff582c.png) repeat-x,url(../picture/banner_a364386.jpg) no-repeat top center"},1000,function () {
        //
        //         animate({"background":"url(../images/nav_bg_cff582c.png) repeat-x,url(../picture/banner_3f96762.jpg) no-repeat top center"},1000)
        //     })
        // },4000);


        // 音乐模式

        $(window).on("keydown", function (e) {
            if ($("#nav_stop").prop("checked")) {
                // var colorArr=['#B9D329','#C0EBF7','#B9D329','#69BCF3','#79D9F3','#FA5F94','#ACD180','#FAB4CC','#FFAE5B'];  //这组色谈了,换下面组
                var colorArr = ['#fff', '#ff0', '#f0f', '#f00', '#0ff', "#0f0", '#00f', '#00'];
                var i = Math.floor((colorArr.length) * Math.random());
                var code = e.keyCode;
                switch (code) {
                    case 65:
                        $("audio")[0].currentTime = 0;
                        $("audio")[0].play();
                        $(".smul").eq(0).stop().slideDown(100);
                        $(".smul").eq(0).css("backgroundColor", colorArr[i]);
                        break;
                    case 83:
                        $("audio")[1].currentTime = 0;
                        $("audio")[1].play();
                        $(".smul").eq(1).slideDown(100);
                        $(".smul").eq(1).css("backgroundColor", colorArr[i]);
                        break;
                    case 68:
                        $("audio")[2].currentTime = 0;
                        $("audio")[2].play();
                        $(".smul").eq(2).slideDown(100);
                        $(".smul").eq(2).css("backgroundColor", colorArr[i]);

                        break;
                    case 70:
                        $("audio")[3].currentTime = 0;
                        $("audio")[3].play();
                        $(".smul").eq(3).slideDown(100);
                        $(".smul").eq(3).css("backgroundColor", colorArr[i]);

                        break;
                    case 74:
                        $("audio")[4].currentTime = 0;
                        $("audio")[4].play();
                        $(".smul").eq(4).slideDown(100);
                        $(".smul").eq(4).css("backgroundColor", colorArr[i]);

                        break;
                    case 75:
                        $("audio")[5].currentTime = 0;
                        $("audio")[5].play();
                        $(".smul").eq(5).slideDown(100);
                        $(".smul").eq(5).css("backgroundColor", colorArr[i]);

                        break;
                    case 76:
                        $("audio")[6].currentTime = 0;
                        $("audio")[6].play();
                        $(".smul").eq(6).slideDown(100);
                        $(".smul").eq(6).css("backgroundColor", colorArr[i]);


                        break;
                    case 186:
                        $("audio")[7].currentTime = 0;
                        $("audio")[7].play();
                        $(".smul").eq(7).slideDown(100);
                        $(".smul").eq(7).css("backgroundColor", colorArr[i]);

                        break;

                }
            }

        });
        $(window).on("keyup", function (e) {
            if ($("#nav_stop").prop("checked")) {
                var code = e.keyCode;
                switch (code) {
                    case 65:

                        $(".smul").eq(0).slideUp(100);
                        break;
                    case 83:
                        $(".smul").eq(1).slideUp(100);
                        break;
                    case 68:
                        $(".smul").eq(2).slideUp(100);
                        break;
                    case 70:
                        $(".smul").eq(3).slideUp(100);

                        break;
                    case 74:
                        $(".smul").eq(4).slideUp(100);

                        break;
                    case 75:
                        $(".smul").eq(5).slideUp(100);

                        break;
                    case 76:
                        $(".smul").eq(6).slideUp(100);

                        break;
                    case 186:
                        $(".smul").eq(7).slideUp(100);

                        break;

                }
            }
        });

        $(".bigul>li").on("mouseover", function () {
            $(this).css("backgroundColor", "rgba(0,0,0,0.5");
            $(this).children().children(".bottom").children(".smul").stop().slideDown(100).css("backgroundColor", "rgba(0,0,0,0.5");
            $(this).children().children(".top").children("a").css("color", "#ff0")

        });
        $(".bigul>li").on("mouseout", function () {
            $(this).css("backgroundColor", "rgba(0,0,0,0");
            $(this).children().children(".bottom").children(".smul").stop().slideUp(100);
            $(this).children().children(".top").children("a").css("color", "#eee")

        })



    //百度搜索栏


    // $("#baidusubmit").onclick(function () {
    //     location = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd="
    //
    // });


    // 广告  5S后出现广告;
    var timer = setTimeout(function () {
        //
        $(".ad").slideDown(1200)
    }, 3000);
    $(".close").on("click", function () {
        $(".ad").animate({"left": "500%"}, 800, function () {
            $(".ad").animate({"left": "-2200px"}, 15000)

        });

    });

    // 广告可拖动   未完工


    // $(".ad h4").on("mousedown", function (e) {
    //     var px = e.pageX;
    //     var py = e.pageY;
    //     var bx = px - $(".ad").offset().left;
    //     var by = py - $(".ad").offset().top;
    //     $("html,body").on("mousemove", function (e) {
    //         var px = e.pageX;
    //         var py = e.pageY;
    //         var x = px - bx;
    //         var y = py - by;
    //         $(".ad").css("left",x);
    //         $(".ad").css("top",y);
    //
    //
    //
    //     })
    // });
    // $("html,body").on("mouseout",function () {
    //     $("html,body").off("mousemove",$(".ad"))
    //
    // });

    //一键换肤   白天与黑夜
    var flag = true;
    $("#huanfu").on("click", function () {
        if (flag) {
            $("body").css("background", "#000")
            $("#huanfu").text("日间模式");
            $("#huanfu").css("background", "#fff")
            $("#huanfu").css("color", "#000")

        } else {
            $("body").css("background", "#fff")
            $("#huanfu").text("夜间模式")
            $("#huanfu").css("background", "#000")
            $("#huanfu").css("color", "#fff");
        }
        flag = !flag

    });


    // 随机换肤;

    $("#beijing").on("click", function () {
        var colorArr = ['#B9D329', '#C0EBF7', '#B9D329', '#69BCF3', '#79D9F3', '#FA5F94', '#ACD180', '#FAB4CC', '#FFAE5B','#0f1653','#0f1653','#0f1653'];
        // var colorArr = [];
        var i = Math.floor((colorArr.length) * Math.random());
        $("body").css("background", colorArr[i]).css("transition","all,2s");
        $("#beijing").css("color",colorArr[i]);


    });

//         滚动时显示  和回到顶部
//         侧边导航
    $(window).scroll(function () {

            if ($(window).scrollTop() > 0) {
                $(".backTop").css("display", "block");
                // $(".sidenav").show(300)

            } else {
                $(".backTop").css("display", "none");
            }
        }
    );

//           回到顶部
    $(".backTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 200)
    });


//       电梯导航

    // hover 开关显示

    var daohangLis = $(".sidenav li");
    var daohang = $(".daohang");
    daohangLis.click(function () {
        var index = $(this).index();
        console.log(index);
        var top = daohang.eq(index).offset().top;
        console.log(top);
        $("html,body").animate({
            scrollTop: top
        }, 300)
    });




    // content3_ 图片 突出显示 加CSS3

    $(".content3 li").on("mouseover", function () {
        $(this).siblings().css("opacity", "0.4").css("transform", "scale(0.8)").siblings().css("transition", "all 1s")
        $(this).css("transform", "scale(1.3)")
    });
    $(".content3 li").on("mouseout", function () {
        $(this).css("transform", "scale(1)").siblings().css("opacity", "1").css("transform", "scale(1)");
        $(this).css("transition", "all 1s");


    })


});






