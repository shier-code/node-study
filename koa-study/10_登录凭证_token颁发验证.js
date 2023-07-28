/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-27 17:14:36
 */
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const jwt = require('jsonwebtoken')
const app = new Koa();
const userRouter = new KoaRouter({ prefix: '/users' })
const secretKey = 'aaaabbbccc'
userRouter.get('/login', (ctx, next) => {
  const payload = { id: 111, name: 'shier' }
  const token = jwt.sign(payload, secretKey, {
    expiresIn: 60
  })
  ctx.body = {
    code: 0,
    token,
    message: "登录成功"
  }
})
userRouter.get('/list', (ctx, next) => {
  //获取token
  const authorization = ctx.headers.authorization
  const token = authorization.replace('Bearer', '')
  try {
    //验证token
    const res = jwt.verify(token, secretKey)
    console.log(res);
    ctx.body = {
      code: 0,
      list: []
    }
  } catch (error) {
    ctx.body = {
      code: -1000,
      message:'无效的token'
    }
  }
})
//token组成
//1、 header(通过base64Url算法进行编码)
// alg:采用的加密算法：默认HS256
// type:固定值JWT
//2、 payload(通过base64Url算法进行编码)
//携带的数据，比如用户id,name
//默认携带iat,令牌签发时间，exp:过期时间
//3、signature
//设置secretKey,将前两个结果合并后进行HMACSHA256算法加密
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(9000)

