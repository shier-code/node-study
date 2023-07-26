/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-12 17:22:11
 */
const express = require('express')

const app = express()
//中间件、
app.post('/login', (res, req, next) => {
  console.log('first middleware exec..');
  //执行任何代码
  //更改请求，响应对象
  //结束请求/请求周期 res.end() / res.json({msg:'xxx'})

  //执行下一个中间件
  next()
})

//任何请求方式都能匹配上，后续中间件是否执行取决于师傅next()
app.use((res, req, next) => {
  console.log('second middleware exec..');

})
//注册中间件匹配路由
app.use('/login', (res, req, next) => {
  console.log('second middleware exec..');

})
//同时注册多个中间件
app.get('/home', (res, req, next) => {
  console.log('second middleware exec..');
  next( )
}, (res, req, next) => {
  console.log('second middleware exec..');
})
app.listen(9000, () => {
  console.log('express 服务启动成功');

})