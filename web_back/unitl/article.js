var article={
    
    show:function(pages,callback){
        $.get( allurl.article_show,{page:pages},function(res){
   
            callback(res);
   
        })
       },
 



}