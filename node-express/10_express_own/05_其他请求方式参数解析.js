/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-13 14:43:13
 */
const express = require('express')
const app = express()


//解析querystring
app.get('/home/list', (req, res, next) => {

  const queryInfo = req.query
  console.log(queryInfo);
  res.end('data list')

})
//解析params
app.get('/user/:id', (req, res, next) => {

  const id = req.params.id
  console.log('id====', id);

  //设置响应状态
  res.status(201)
  // res.end('获取到id:', id)
  res.json({
    code: 0,
    message: "success",
    list: []
  })


})
app.listen(9000, () => {
  console.log('express 服务启动成功');

})