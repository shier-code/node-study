/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-02 16:40:29
 * @LastEditors: went
 * @LastEditTime: 2023-07-14 16:33:12
 */
const Koa = require('koa')
const app = new Koa();
const static = require('koa-static')

app.use(static('./uploads'))
app.listen(9000)
console.log('app is starting');
