const article={
    
    show:(pages,type,state,callback)=>$.get( allurl.article_show,{page:pages,type:type,state:state},res=>callback(res)), 
//    文章删除
    del:(id,callback)=> $.get( allurl.article_del,{id:id},res=>callback(res) ),
//    添加文章
  add:(fd,callback)=>
    $.ajax({
         url:allurl.article_add,
         type:'post',
         data:fd,
         processData: false, // 不要让jquery去处理formdata数据和表头
         contentType: false,
         success:res=> callback(res)
    })
,
// 获取文章详情  文章搜索的接口，只发送id参数的话就能获取文章详情
getarticle:(id,callback)=>$.get( allurl.article_show,{id:id},res=>callback(res) ),
// 修改文章
  edit:(fd,callback)=>
    $.ajax({
         url:allurl.article_edit,
         type:'post',
         data:fd,
         processData: false, // 不要让jquery去处理formdata数据和表头
         contentType: false,
         success:res=>callback(res)
    })
    



}