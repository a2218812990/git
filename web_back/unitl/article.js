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
//    添加文章
  add:function (fd,callback) {
    $.ajax({
         url:allurl.article_add,
         type:'post',
         data:fd,
         processData: false, // 不要让jquery去处理formdata数据和表头
         contentType: false,
         success:function (res){
             callback(res);
         }

    })
    
},
// 获取文章详情  文章搜索的接口，只发送id参数的话就能获取文章详情
getarticle:function(id,callback) {
    $.get( allurl.article_show,{id:id},function(res){
   
        callback(res);

    })
},


// 修改文章
  edit:function (fd,callback) {
    $.ajax({
         url:allurl.article_edit,
         type:'post',
         data:fd,
         processData: false, // 不要让jquery去处理formdata数据和表头
         contentType: false,
         success:function (res){
             callback(res);
         }

    })
    
}


}