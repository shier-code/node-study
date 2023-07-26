const express = require("express")
const path = require("path")
const app = express()
//配置静态资源路径（public == http://localhost:3000）
app.use(express.static(path.resolve(__dirname, "./public")))
//引入解析请求体中间件
app.use(express.urlencoded())

/**
 * 使用模板引擎
 * 1、安装ejs
 * 2、配置express模板引擎为ejs
 * 3、配置模板路径
 */
app.set("view engine", "ejs")
//配置模板路径
app.set("views", path.resolve(__dirname, 'views'))//后面的views为目录名称

const stuList = [
  { name: 'shier', age: 10 },
  { name: 'lx', age: 12 },
]
app.get("/students", (req, res) => {
  //渲染模板引擎并返回给浏览器,第二个参数传入对象模板引擎可接收
  res.render("students", {
    name: 'shier',
    age: 18,
    stuList
  })
})

app.listen(3000, () => {
  console.log('服务器已启动2');
})