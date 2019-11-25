// 所有接口的网址
var localhost='http://localhost:8000';
var allurl={
        // 游客页面
        

        //  文章管理
        // 1.文章类别管理
        category_show:localhost+'/admin/category_search', //文章类型显示接口
      

        // 文章列表
        article_show:localhost+'/admin/search',
        // 获取评论
        article_comment:localhost+'/get_comments',
        // 发表评论
        send_comment:localhost+'/post_comment',
}