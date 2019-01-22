//检查主题信息
var theme = $.cookie('theme');
if(theme){
    changeTheme(theme)
}

$("#btn_setting").click(
    function () {
        $("#modal").fadeIn(300);
    }
);
$("#btn_close").click(
    function () {
        $("#modal").fadeOut(300);
    }
);
$(".cz-btn-55").click( function () {
    //获取主题信息
    var theme = $(this).data("class");

    //写 cookie
    $.cookie('theme', theme, { expires:30 });

    //换皮肤
    changeTheme(theme)
    //关闭 modal 框
    $("#modal").fadeOut(300);
});

function changeTheme(theme) {

    //换皮肤
    $(".cz-theme").each(function () {
        if($(this).hasClass("alert")){
            $(this).attr('class',"alert "+theme);
        }else{
            $(this).attr('class',theme);
        }
    });
}

$("body").css("visibility","visible");