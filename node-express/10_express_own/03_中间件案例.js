/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-13 10:10:09
 */
const express = require('express')

const app = express()
//公共操作在普通中间件处理
// app.use((req, res, next) => {
//   if (req.headers['content-type'] === "application/json") {
//     req.on('data', (data) => {
//       const jsonInfo = JSON.parse(data.toString())
//       req.body = jsonInfo
//     })
//     req.on('end', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })
//使用中间件插件
app.use(express.json())//解析客户端传过来的json
app.use(express.urlencoded({ extended: true }))//解析x-www-form-urlencoded
//日志第三方中间件：Morgan

//中间件、
app.post('/login', (req, res, next) => {
  console.log(req.body);

})
app.post('/register', (req, res, next) => {
  console.log(req.body);
})

app.listen(9000, () => {
  console.log('express 服务启动成功');
})