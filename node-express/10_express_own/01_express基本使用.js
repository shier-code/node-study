/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-12 15:57:42
 */
const express = require('express')

const app = express()
//客户端访问
app.post('/login', () => { 

})
app.get('/home', () => { 
  
})
app.listen(9000, () => {
  console.log('express 服务启动成功');

})