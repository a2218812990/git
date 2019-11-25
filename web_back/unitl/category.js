var category={
    // 文章类别显示
    show:function(callback){
        $.get( allurl.category_show,function(res){
   
            callback(res);
              
               
        })
       },
      add:function(name,slug,callback){
        $.post( allurl.category_add,{name:name,slug:slug},function(res){
   
            callback(res);
              
               
        })
       },
       edit:function(id,name,slug,callback){
        $.post( allurl.category_edit,{id:id,name:name,slug:slug},function(res){
   
            callback(res);
              
               
        })
       },
     del:function(id,callback){
        $.post( allurl.category_del,{id:id},function(res){
   
            callback(res);
              
               
        })
       },


}