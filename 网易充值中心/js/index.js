$(window).ready(function () {
  <!--充值产品部分-->
  //需求：鼠标进入哪个ul中的li上，让该li添加类active;其他的兄弟节点删除active类
  //需求：鼠标进入哪个ul中的li上，让该li对应索引值的下面的products里面的div添加selected类
  //      其他的兄弟节点删除selected类
  $("#content-tab li").click(function () {
    //让该li添加类active;其他的兄弟节点删除active类
    $(this).addClass("active").siblings("li").removeClass("active");
    //让该li对应索引值的下面的products里面的div添加selected类,其他的兄弟节点删除selected类
    $(".game").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
  });

  <!--顶部右边部分的菜单-->
  $("#top-menu a").click(function () {

    $(this).addClass("red-bg").siblings("a").removeClass("red-bg");
  });

  var menuList=$("#top-menu a");
  console.log(menuList);
  for(var i = 0; i < menuList.length; i++) {
    menuList.eq(i).css("background-position-x",i*(-140),"background-position-y",-35);
  }

  // 返回顶部按钮
  $(window).scroll(function () {
    var scrollTOP = $(window).scrollTop();
//      console.log(scrollTOP);
    if (scrollTOP > 0) {
      $("#back-top").show();
    } else {
      $("#back-top").hide();
    }
  });

  $("#back-top").click(function () {
    $("#back-top").hide();
    var top = 0;
    $("html,body").animate({
      scrollTop: top
    }, 800);
  });
});