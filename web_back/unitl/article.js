var article={
    
    show:function(pages,type,state,callback){
        $.get( allurl.article_show,{page:pages,type:type,state:state},function(res){
   
            callback(res);
   
        })
       },
//    文章删除
   del:function(id,callback){
    $.get( allurl.article_del,{id:id},function(res){

        callback(res);

    })
   },


}