// 轮播图
$(function () {
  var list = $(".list>i");
//    console.log(list);
  var index = 0;
  var imgWidth = $("#img-list>li").width();
  // console.log(imgWidth);
  list.mouseover(function () {
    index = $(this).index();
    // console.log(index);
    play();
  });

  function play() {
    var target = index * imgWidth * (-1);
    list.eq(index).addClass("current").siblings().removeClass("current");
    $("#img-list").animate({left: target});
  }

  $("#prev").click(function () {
    if (index == 0) {
      index = 5;
      $("#img-list").css({left: -index * imgWidth});
    }
    index--;
    play();
  });

  $("#next").click(function () {
    if (index == 5) {
      index = 0;
      $("#img-list").css({left: 0});
    }
    index++;
    if (index == 5) {
      list.eq(0).addClass("current").siblings().removeClass("current");
    } else {
      list.eq(index).addClass("current").siblings().removeClass("current")
    }
    var target = imgWidth * index * (-1);
    $("#img-list").animate({left: target});
  });

  var timer = setInterval(function () {
    $("#next").click();
  }, 1800)

  $("#inner").mouseover(function () {
    clearInterval(timer);
  });

  $("#inner").mouseout(function () {
    timer = setInterval(function () {
      $("#next").click();
    }, 1800);
  });
});
