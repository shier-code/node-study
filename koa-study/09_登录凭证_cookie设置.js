/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-27 15:37:09
 */
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const KoaSession = require('koa-session')
const app = new Koa();
const userRouter = new KoaRouter({ prefix: '/users' })
const session = KoaSession({
  key: 'sessionid',
  signed: true
}, app)
// 加盐
app.keys = ['why', 'cobe']
app.use(session)
userRouter.get('/login', (ctx, next) => {
  //设置cookie,
  //内存cookie：浏览器关闭删除，硬盘cookie:设置了过期时间
  // ctx.cookies.set('slogan', 'ikun', {
  //   maxAge: 60 * 1000 * 5
  // })
  //通过session设施sessionid加密
  ctx.session.slogan = 'ikun'
  ctx.body = '登录成功'
})
userRouter.get('/list', (ctx, next) => {
  // const value = ctx.cookies.get('slogan')
  const value = ctx.session.slogan
  console.log(value);

  if (value === 'ikun') {

  } else {

  }
})
//cookie缺点
//会被附加到每个http,增加了流量，
//明文传递
//cookie大小限制是4kb,复杂需求不满足
// 除浏览器外其他客户端必须手动设置
//分布式系统和服务器集群 如何保重其他系统可以正确解析
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(9000)

