/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-18 10:47:04
 */
const Koa = require('koa')
const app = new Koa();

app.use((ctx, next) => {
  console.log('111');
  next()
  console.log('111');

})
app.use((ctx, next) => {
  console.log('222');
  next()
  console.log('222');

})
app.use((ctx, next) => {
  console.log('333');
  next()
  console.log('333');

})
app.listen(9000)

