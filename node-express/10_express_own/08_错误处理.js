/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-13 16:34:17
 */
const express = require('express')

const app = express()
app.use(express.json())
app.post('/login', (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    next(-1001)
  } else if (username !== 'shier' || password !== '123456') {
    next(-1002)
  } else {
    next(0)
  }
})
app.use((errCode, req, res, next) => {
  let message = "未知错误信息"
  let code = errCode
  console.log('code===', code);

  switch (code) {
    case code -1001:
      message = "没有输入用户名或密码"
      break
    case code -1002:
      message = "用户名或密码错误"
      break 
  }
  res.json({
    code, message
  })

})
app.listen(9000, () => {
  console.log('express 服务启动成功');

})