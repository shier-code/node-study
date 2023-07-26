/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-18 10:37:01
 */
const Koa = require('koa')
const axios = require('axios')
const app = new Koa();

//返回流
app.use(async (ctx, next) => {
  ctx.msg += 'aaa'
  //如果下一个中间件是异步，next不会等到异步中间件的结果，就会执行下一行
  //如果希望等到下一个异步函数的执行结果，那么需要再next函数前加上await

  await next()
  //express只能在异步函数中间件返回结果
  console.log('aaa');

})
app.use(async (ctx, next) => {
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  ctx.msg += res.data.data.banner.list[0].title
  console.log('ctx===', ctx.msg);

})

app.listen(9000)

