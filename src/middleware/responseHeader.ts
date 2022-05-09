import { Response, Request, NextFunction } from "express";

const responseHeader = (req : Request, res: Response, next : NextFunction) => {
    const { origin, Origin, referer, Referer } = req.headers
    const allowOrigin = origin || Origin || referer || Referer || '*'
    
    // 允许该源
    res.header('Access-Control-Allow-Origin', allowOrigin);
    // 允许的请求头部
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // 允许的请求方法
    res.header('Access-Control-Allow-Method', 'PUT,POST,GET,DELETE,OPTIONS')
    // 允许携带凭据
    res.header('Access-Control-Allow-Credentials', 'true');


    // 允许公开的头部字段???
    res.header('Access-Control-Expose-Headers', 'Content-Disposition')

    if(req.method === 'OPTIONS') { // 预检请求 返回204
        res.sendStatus(204);
    } else {
        next();
    }

}

export default responseHeader