
$(document).ready(function(){
    $(".content:not(:eq(0))").toggle();
    $(".arrow").toggleClass("arrowdonw");
    /* $(".title").css("color","#4a4b5e"); */


    $(".title").click(function(){
        
        $(".content").hide(100, "linear",callback());
        $(this).css("color","black"); 
        $(".arrow").removeClass("arrowUP");
        $(".arrow").addClass("arrowdonw");
        $(this).next().show();
        $(this).children().removeClass("arrowdonw");
        $(this).children().addClass("arrowUP");
        function callback(){        
            $(".arrow").removeClass("arrowUP");
            $(".arrow").addClass("arrowdonw");
             colorCallBack();  
        }
        function colorCallBack (){
            $(".title").css("color","");
        }
    })
})



