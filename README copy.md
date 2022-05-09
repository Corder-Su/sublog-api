# sublog-api

-npm init 初始化项目
-npm i express --save
-cnpm i typescript ts-node-dev @types/express @types/node --dev
-.gitignore
-package.json 中的 dev脚本
-tsconfig.json ts的配置文件



数据库设计：
users :
    _id
    email 
    username
    password
    brief
    image
    createdTime
    updatedTime


articles :
    _id
    title
    description
    body
    tagList
    favouritesCount
    viewCount
    authorId
    createdTime
    updatedTime

comment:
    _id
    body
    articleId
    authorId
    createdTime
    updatedTime

collections:
    _id
    articles [articleId]
    authorId
    createdTime
    updatedTime


路由设计：
    用户相关的：
        登录        post    /api/user/login
        注册        post    /api/user/register
        更新个人        put    /api/user
        当前登录用户    get     /api/user

    文章相关的：
        发布文章        post    /api/article/publish
        删除文章        del     /api/article/:articleId
        获取文章列表        get /api/article/list
        根据Id获取单篇文章  get /api/article/:articleId
        更新文章        get /api/article/:articleId
        发布评论        post    /api/article/comment
        删除评论        delete  /api/article/comment
        获取文章全部评论    get     /api/article/comments
        收藏文章        post    /api/article/favourite
        取消收藏        delete  /api/article/favourite

    文集相关的：
        获取全部文集：  get     /api/collection
        获取该文集下的全部文章  get /api/collection/:collectionId


Nodejs记录 日志美化  日期库
-cnpm i pino pino-pretty dayjs 
-cnpm i @types/pino --dev
怎么使用呢？

mongodb安装与操作：
npm i mongoose zod --save
npm i @types/mongoose --dev


validator 参数校验工具


















