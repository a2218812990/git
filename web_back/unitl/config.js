// 所有接口的网址
var localhost='http://localhost:8000';
var allurl={
        //  用户相关地址
         quiteurl:localhost+'/admin/logout',
         getuserurl:localhost+'/admin/getuser',
         loginurl:localhost+'/admin/login',

        //  文章管理
        // 1.文章类别管理
        category_show:localhost+'/admin/category_search', //文章类型显示接口
        category_add:localhost+'/admin/category_add',//文章类型新增接口
        category_edit:localhost+'/admin/category_edit',//编辑文章类别
        category_del:localhost+'/admin/category_delete',//删除文章类别



}