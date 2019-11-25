var category={
    // 搜索文章类型
    show:function(callback){
        $.get( allurl.category_show,function(res){
   
            callback(res);
              
               
        })
       },
    //   焦点图
      getfcousimg:function(callback){
        $.get( allurl.article_show,{perpage:5,state:'已发布'},function(res){
   
            callback(res);
   
        })

      },
      article_leirong:function(id,callback){
        $.get( allurl.article_show,{id:id},function(res){
   
            callback(res);
   
        })

      },
    //   文章评论功能
    article_comment:function(id,callback){
        $.get(allurl.article_comment,{article:id},function(res){
             callback(res)
        })
    },
    //  发表评论
    send_comment:function(name,content,id,callback){

        $.post(allurl.send_comment,{name:name,content:content,id:id},function(res){
            callback(res)
       })

    }



}