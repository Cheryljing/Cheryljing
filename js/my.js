/*鼠标滚动事件*/
$(function () {
    var num = 0;
    //定时器
    var timer = null;
    //网页加载完前初始化放大后回到初始状态
    $(".page").removeClass("active");
   /* $(".header").css("opacity","0");*/
    $(window).mousewheel(function (event) {
        console.log(event.deltaY);
        //页面滚动前清除定时器
        clearTimeout(timer);
        timer = setTimeout(function () {
            //监听屏幕的上下滚动：event.deltaY  1 是向上，-1是向下
            /*if (event.deltaY == -1){
                //向下滚动
                num++;
            }
            else {
                //向上滚动
                num--;
            }*/
            num = num - event.deltaY;

            //判断导航指示点的滚动
            if (num > $(".page").length -1){
                num = $(".page").length -1;
            }
            if (num < 0){
                num = 0;
            }

            going();
        },300);
    });
    
    $(".nav span").click(function () {
        //让导航指示点和当前页面同时滚动显示
        num = $(this).index();
        going();
    });
    
    function going() {
        //判断5屏页面的headerlogo
        if (num == 0){
            $(".header").css("opacity","0");
        }
        else {
            $(".header").css("opacity","1");
        }
        //滚动切换屏数
        $(".page").eq(num).show().siblings(".page").hide();
        //导航指示点,
        $(".nav span").eq(num).addClass("current").siblings().removeClass();
        setTimeout(function () {
            //对每一屏删除active类名(不正常状态),兄弟们添加类名让他们每次都有动画
            $(".page").eq(num).removeClass("active").siblings(".page").addClass("active");
        },1)
    }
});