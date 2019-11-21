// 用户相关的ajax请求
var user={
    quit:function(tuichu){
     $.post( allurl.quiteurl,function(res){

            tuichu(res);
           
            
     })
    },
   getuser:function(huoqu){
      
    $.get( allurl.getuserurl,function(res){

       huoqu(res);
  

})

   },

   login:function(name,password,callback){
    $.post(allurl.loginurl,{user_name:name,password:password},function(res){

     callback(res);
      
    })
  }

}



