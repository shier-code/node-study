const Koa = require('koa')
const app = new Koa();
app.use(async (ctx, next) => {
  ctx.body = 'hello shier'
  console.log('=======', ctx.request);//koa封装的请求对象
  console.log('=======', ctx.req);//node封装的请求对象
  console.log('=======', ctx.query)
  next()
})
app.use((ctx, next) => {
  console.log('=======', ctx.request.path)
  if (ctx.path === '/user') {
    ctx.body = {
      name: 'user'
    }
  } else if (ctx.path === '/home') {
    ctx.body = {
      name: 'home'
    }
   }
})
app.listen(9000, () => {
  console.log('koa服务启动成功 ');

})