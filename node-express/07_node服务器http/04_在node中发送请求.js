/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-13 11:18:25
 * @LastEditors: went
 * @LastEditTime: 2023-05-18 17:22:41
 */
const http = require('http')

http.get('http://localhost:8000', (res) => {
  res.on('data', (data) => {
    console.log('====', JSON.parse(data.toString()));

  })
})
//发送post请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8000
}, (res) => {
  res.on('data', (data) => {
    console.log('====', JSON.parse(data.toString()));

  })
})
req.end()