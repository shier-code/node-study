/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-02-01 16:12:35
 * @LastEditors: went
 * @LastEditTime: 2023-02-02 13:50:22
 */
const express = require("express")
const app = express()
const path = require("path")
//路由
app.get("/app", (req, res) => {
  console.log('有人访问我', req.url);
  // res.sendStatus(404)
  // res.status(200) //默认
  res.send('请求已收到，暂不处理')
})

//中间件，路径模糊匹配
//next函数调用后可以触发后续的中间件
app.use("/", (req, res, next) => {
  // res.send('中间件返回的响应')
  //列入权限检查处理，不用每个路由都处理
  console.log('模拟处理鉴权');
  next()//放行，不能再响应处理完毕后调用（例如前面只能执行send）
})
//使用静态资源中间件
app.use(express.static(path.resolve(__dirname, "./public")))


app.get("/login", (req,res) => { 
  console.log('登录信息；',req.query); //查询字符串中的请求参数
  
  res.send('登录成功')
})
app.listen(3000, () => {
  console.log('服务启动');
})
