/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-26 14:18:46
 * @LastEditors: went
 * @LastEditTime: 2023-07-26 17:17:30
 */
const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, UNAUTHORIZATION } = require('../config/error')

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
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户不存在'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '输入密码错误'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = '无效的token '
      break
  }
  ctx.body = { code, message }
})