/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-14 12:00:59
 */
const Koa = require('koa')
const KoaRouter = require('@koa/router')//创建路由对象
const app = new Koa();

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = 'users list==' + id
})
userRouter.get('/', (ctx, next) => {
  const query = ctx.query
  ctx.body = 'users list==' + JSON.stringify(query)
})
userRouter.post('/json', (ctx, next) => {
  const query = ctx.request.body
  ctx.body = 'users list==' + JSON.stringify(query)
})

//让路由生效
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(9000)
console.log('app is starting');
