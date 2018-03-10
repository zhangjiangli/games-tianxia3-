$(window).load = function () {
/* 把验证表单的功能封装起来 */
function checkRegExp(para1,para2,para3) {
  /* 1. 获取到手机输入框 */
  var tag = document.getElementById(para1);

  tag.onkeyup = function () {

    var txt = this.value;
    var reg = para2;

    /* 5.不满足条件，给用户提示 */
    if( reg.test(txt) === false ){
      console.log(this.nextElementSibling);
      /* 给p标签添加内容提示用户 */
//                  this.nextElementSibling  下一个兄弟
      this.nextElementSibling.innerHTML = para3;
      this.nextElementSibling.style.color = "#f00";
    }else {
      /* 另外情况：满足条件(复合规则) */
      this.nextElementSibling.innerHTML = '';
    }
  }
}

/* 调用表单验证功能，传入对应的参数 */
checkRegExp('txtPhone',/^1\d{10}$/,'请输入正确的手机号码');
/* 邮编 */
checkRegExp('txtMail',/^\d{6}$/,'请输入正确邮编');
/* QQ号 */
checkRegExp('txtQQ',/^[1-9]\d{5,10}$/,'请输入正确QQ号');
/* 生日 */
checkRegExp('txtBirthday',/^\d{4}-\d{1,2}-\d{1,2}$/,'请输入正确日期');
/* 邮箱 */
checkRegExp('txtEmail',/^\w+@\w+\.\w+$/,'请输入正确邮箱');
/* 姓名 */
checkRegExp('txtName',/^[\u4e00-\u9fa5]{0,}$/,'请输入正确姓名');

}