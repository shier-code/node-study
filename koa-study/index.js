/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2021-11-02 16:43:59
 */
const Koa = require('koa')
const app = new Koa();
app.use(async (ctx) => {
  ctx.body = 'hello shier'
})
app.listen(3001)
console.log('app is starting');
