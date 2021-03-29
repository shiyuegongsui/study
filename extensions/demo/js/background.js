
$(function(){
    setTimeout(() => {
        $("body >div").each(function(i){
            if(i>3){
                $(this).remove();
            }
        });
    }, 200);
})
