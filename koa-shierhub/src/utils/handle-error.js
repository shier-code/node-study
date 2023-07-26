/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-26 14:18:46
 * @LastEditors: went
 * @LastEditTime: 2023-07-26 17:17:30
 */
const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')

app.on('myEvent', (error, ctx) => {
  let code = 0
  let message = ''
  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或密码不能为空'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已存在'
      break
  }
  ctx.body = { code, message }
})