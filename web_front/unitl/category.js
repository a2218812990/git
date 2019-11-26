var category={
    // 搜索文章类型
    show:callback=>$.get( allurl.category_show,res=>callback(res)),
    //   焦点图
    getfcousimg:callback=>$.get( allurl.article_show,{perpage:5,state:'已发布'},res=>callback(res)),
    article_leirong:(id,callback)=>$.get(allurl.article_show,{id:id},res=>callback(res)),
     //   文章评论功能
    article_comment:(id,callback)=>$.get(allurl.article_comment,{article:id},res=>callback(res)),   
   //  发表评论
    send_comment:(name,content,id,callback)=>$.post(allurl.send_comment,{name:name,content:content,id:id},res=>callback(res))
            
   
        

  
   
        
            
        
   
    
}