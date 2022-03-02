//menuscroll
$(function () {
    $("a.scr").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html,body").animate({
                scrollTop: e.offset().top - 70
            }, "slow"), $(".menu, .menu-icon, body").removeClass("active"), !1
        };

    });
});

//menu adaptiv open close
$(".menu-icon").click(function () {
    $(".menu, .menu-icon, body").toggleClass("active");
});

$("body").on("click",".send",function(){
    var name=$(this).data("name")
    $("#recall [type=hidden]").val(name)
});






