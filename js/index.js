
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

   $(window).on("resize",width).trigger('resize');

    function width(){
        //根据屏幕宽度的变化决定轮播图片应该展示什么
//     获取屏幕宽度
        var width = $(window).width();

//    根据大小为界面上的每一张轮播图设置背景
        //判断屏幕属于大还是小
        var isSmallWidth = width < 768;//小屏幕
        console.log(isSmallWidth);
        if (isSmallWidth) {
            $("#slider .item").each(function(index,ele) {
                var imgSrc = $(ele).data(isSmallWidth ? "image-xs" : "image-lg");

                $(ele).html('<img src="' + imgSrc + '" alt="" />');

            });
        }
        else{

            $("#slider .item").each(function(index,ele) {
                var imgSrc = $(ele).data(isSmallWidth ? "image-xs" : "image-lg");
                //设置背景图片
                $(ele).css('backgroundImage', 'url("' + imgSrc + '")');

                $(ele).empty();

            });
        }

    }
    function resize(){
        //控制标签页的标签容器宽度
        var $ulContainer = $(".nav-products");
        //获取所有的子元素的宽度和
        var width = 0;

        $ulContainer.children().each(function(index,ele){

            //console.log($(this).width());
            //所有li的宽度总和
            width += ele.clientWidth;
        });
        //判端当前ul的宽度是否超出了屏幕，如果超出了就显示横向滚动条
        if(width>$(window).width()){
            $ulContainer.css("width",width).parent().css("overflow-x","scroll");
        }
    }
});


