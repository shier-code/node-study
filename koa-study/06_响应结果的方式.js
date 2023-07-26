/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-17 11:20:37
 */
const fs = require('fs')
const Koa = require('koa')
const app = new Koa();
const KoaRouter = require('@koa/router')

const userRouter = new KoaRouter({ prefix: '/users' })
//返回流
userRouter.get('/', (ctx, next) => {
  const readStream = fs.createReadStream('./uploads/1689321639432_6.30浏览器记录.png')
  ctx.status = 201
  ctx.type = 'image/png'
  ctx.body = readStream

})
app.use(userRouter.routes())
// app.use(userRouter.allowedMedhods())
app.listen(9000)
console.log('app is starting');
