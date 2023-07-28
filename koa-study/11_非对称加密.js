/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-27 17:57:09
 */
const fs = require('fs')
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const jwt = require('jsonwebtoken')
const app = new Koa();
const userRouter = new KoaRouter({ prefix: '/users' })
const privateKey = fs.readFileSync('./keys/private.key')
const publicKey = fs.readFileSync('./keys/public.key')
userRouter.get('/login', (ctx, next) => {
  const payload = { id: 111, name: 'shier' }
  const token = jwt.sign(payload, privateKey, {
    expiresIn: 60,
    algorithm: 'RS256'
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
    const res = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    })
    console.log(res);
    ctx.body = {
      code: 0,
      list: []
    }
  } catch (error) {
    ctx.body = {
      code: -1000,
      message: '无效的token'
    }
  }
})
//生成私钥

// cd keys> openssl
// genrsa -out private.key 1024

//生成公钥
// rsa -in private.key -pubout -out public.key
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(9000)

