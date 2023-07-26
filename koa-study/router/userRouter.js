const KoaRouter = require('@koa/router')//创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  ctx.body = 'users list'
})
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = 'users 获取' + id
})
userRouter.patch('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = 'users 修改' + id
})
module.exports = userRouter