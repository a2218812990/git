var category={
    show:function(callback){
        $.post( allurl. category_show,function(res){
   
            callback(res);
              
               
        })
       },
      add:function(callback){
        $.post( allurl.category_add,{name:name,slug:slug},function(res){
   
            callback(res);
              
               
        })
       },
       edit:function(callback){
        $.post( allurl.category_edit,{id:id,name:name,slug:slug},function(res){
   
            callback(res);
              
               
        })
       },
     del:function(callback){
        $.post( allurl.category_del,{id:id},function(res){
   
            callback(res);
              
               
        })
       },


}