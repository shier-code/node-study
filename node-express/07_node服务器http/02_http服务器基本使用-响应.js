/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-13 11:18:25
 * @LastEditors: went
 * @LastEditTime: 2023-05-18 17:12:06
 */
const http = require('http')

const server = http.createServer((request,response) => { 
  // response.statusCode=401//响应状态码
  response.writeHead(200,{
    'Content-Type':'application/json;charset=utf8'
  })
  const list=[{name:'shier',age:19},{name:'wt',age:19}]
  response.write(JSON.stringify(list))
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