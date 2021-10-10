$(function () {
    $(".nav-top li").mouseover(function () {
        $(this).css("background-color", "#C8D9ED").siblings().css("background-color", "");
    });
    $(".nav-top li").mouseleave(function () { 
        $(this).css("background-color", "");
    });

    $(".tab-style").each(function () {
        $(this).click(function () {
            $(this).addClass("current").siblings().removeClass("current");
        });
    });

    var isShow = true;
    $(".viewBox").click(function() {
        if(isShow) {
            $(this).removeClass("viewBoxHide").addClass("viewBoxShow");
            $("#password").attr("type","text");
            isShow = false;
        }else {
            $(this).removeClass("viewBoxShow").addClass("viewBoxHide");
            $("#password").attr("type","password");
            isShow = true;
        }
    });

    function footerPosition() {
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight, winHeight = window.innerHeight;
        if(!(contentHeight > winHeight)){
            $("footer").addClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});