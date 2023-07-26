/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-26 16:20:52
 */
const fs = require('fs')
const Koa = require('koa')
const app = new Koa();
const KoaRouter = require('@koa/router')

const userRouter = new KoaRouter({ prefix: '/users' })
//返回流
userRouter.post('/', (ctx, next) => {
  let isToken = false
  if (isToken) {
    ctx.app.emit('error', 1001)
  }
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(9000)
app.on('error', (errCode) => {
  console.log('errCode===', errCode);
})
