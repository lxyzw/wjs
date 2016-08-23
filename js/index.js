
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

   $(window).on("resize",width).trigger('resize');

    function width(){
        //������Ļ��ȵı仯�����ֲ�ͼƬӦ��չʾʲô
//     ��ȡ��Ļ���
        var width = $(window).width();

//    ���ݴ�СΪ�����ϵ�ÿһ���ֲ�ͼ���ñ���
        //�ж���Ļ���ڴ���С
        var isSmallWidth = width < 768;//С��Ļ
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
                //���ñ���ͼƬ
                $(ele).css('backgroundImage', 'url("' + imgSrc + '")');

                $(ele).empty();

            });
        }

    }
    function resize(){
        //���Ʊ�ǩҳ�ı�ǩ�������
        var $ulContainer = $(".nav-products");
        //��ȡ���е���Ԫ�صĿ�Ⱥ�
        var width = 0;

        $ulContainer.children().each(function(index,ele){

            //console.log($(this).width());
            //����li�Ŀ���ܺ�
            width += ele.clientWidth;
        });
        //�ж˵�ǰul�Ŀ���Ƿ񳬳�����Ļ����������˾���ʾ���������
        if(width>$(window).width()){
            $ulContainer.css("width",width).parent().css("overflow-x","scroll");
        }
    }
});


