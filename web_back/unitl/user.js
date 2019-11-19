var localhost='http://localhost:8000';

var user={
    quit:function(tuichu){
     $.post(localhost+'/admin/logout',function(res){

            tuichu(res);
           
            
     })
    },
   getuser:function(huoqu){
      
    $.get(localhost+'/admin/getuser',function(res){

       huoqu(res);
  

})

   },

   login:function(name,password,callback){
    $.post(localhost+'/admin/login',{user_name:name,password:password},function(res){

     callback(res);
      
    })
  }

}



