const express = require("express")
const path = require("path")
const app = express()
//配置静态资源路径（public == http://localhost:3000）
app.use(express.static(path.resolve(__dirname, "./public")))
//引入解析请求体中间件
app.use(express.urlencoded())

//添加一个路由，可以读取get请求参数
app.get('/login', (req, res) => {
  console.log(req.query);
  if (req.query.username === "admin" && req.query.password === "123") {
    res.send("登录成功")
  } else {
    res.send("登录失败")
  }
})
app.get('/hello/:id', (req, res) => {
  console.log('params获取参数', req.params);

})
app.post("/login", (req, res) => { 
  //获取请求体参数
  console.log('post 参数',req.body);
  
})
app.listen(3000, () => {
  console.log('服务器已启动2');
})