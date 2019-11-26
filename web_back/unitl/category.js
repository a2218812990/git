const category={
    // 文章类别显示
    show:(callback)=> $.get( allurl.category_show,res=>callback(res)  ) ,
    add:(name,slug,callback)=>$.post( allurl.category_add,{name:name,slug:slug},res=> callback(res)),   
    edit:(id,name,slug,callback)=>$.post( allurl.category_edit,{id:id,name:name,slug:slug},res=>callback(res)),
    del:(id,callback)=>$.post( allurl.category_del,{id:id},res=>callback(res)),        
}