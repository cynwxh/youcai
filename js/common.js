// 头部导航栏菜单按钮下拉动效
$("header .menu").on("click", function () {
    if ($(".select").height() == 0) {
        $(".select").css("height", "80vh")
        $(".select").css("padding-top", "0.8rem")
    } else {
        $(".select").css("height", "0")
        $(".select").css("padding-top", "0")
    }
})
// 二级菜单下拉
$(".select-child").on("click", function () {
    var listHeight = 0;
    $(this).find(".box ul li").each(function () {
        listHeight += $(this).height();
    })
    if ($(this).find(".box").height() == 0) {
        $(this).find(".box").css("height", listHeight + "px");
        $(this).siblings().find(".box").css("height", "0");
    } else {
        $(this).find(".box").css("height", "0");
    }
})