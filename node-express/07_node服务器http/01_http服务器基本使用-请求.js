/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-13 11:18:25
 * @LastEditors: went
 * @LastEditTime: 2023-05-17 16:32:25
 */
const http = require('http')
const url = require('url')
const qs=require('querystring')
const server = http.createServer((request,response) => { 
  console.log('===',request.url);
  //获取query参数
  const urlInfo=url.parse(request.url)
  console.log(urlInfo.query);
  const queryInfo=qs.parse(urlInfo.query)
  console.log('queryInfo===',queryInfo);
  //解析body
  request.setEncoding('utf-8')
  request.on('data',(data)=>{
    console.log('body===',data);
  })
  //解析header
  console.log('headers===',request.headers);
  response.end('hello')
})
//监听1025~65535
server.listen(8000, () => { 
  console.log('服务器开启成功');
})
//127.0.0.1 回环地址（自己发出去的包只能自己接收）
//在网络层就被获取到了，不经过数据链路层和物理层，其他主机无法访问到
// server.listen(8000,'127.0.0.1', () => {
//   console.log('服务器开启成功');
// })