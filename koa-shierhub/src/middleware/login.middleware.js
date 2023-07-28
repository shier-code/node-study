/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-28 10:15:04
 * @LastEditors: went
 * @LastEditTime: 2023-07-28 15:17:16
 */
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, UNAUTHORIZATION } = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')

const publicKey = fs.readFileSync(path.resolve(__dirname, '../config/keys/public.key'))

// 验证密码
const verifyLogin = async (ctx, next) => {
  //验证数据是否能保存到数据库
  const { name, password } = ctx.request.body
  console.log('ctx.request.body===', ctx.request.body);

  if (!name || !password) {
    return ctx.app.emit('myEvent', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  const users = await userService.findUserByname(name)
  if (!users.length) {
    return ctx.app.emit('myEvent', NAME_IS_NOT_EXISTS, ctx)
  }
  // 验证密码
  if (users[0].password !== md5password(password)) {
    return ctx.app.emit('myEvent', PASSWORD_IS_INCORRENT, ctx)
  }
  //保存users信息
  ctx.user = users[0]
  await next()
}
const verifyAuth = async (ctx, next) => {
  //获取token
  const authorization = ctx.headers.authorization
  const token = authorization.replace('Bearer', '')
  try {
    //验证token
    const res = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    })
    ctx.user = res
    await next()
  } catch (error) {
    ctx.app.emit('myEvent', UNAUTHORIZATION, ctx)
  }

}
module.exports = { verifyLogin, verifyAuth }