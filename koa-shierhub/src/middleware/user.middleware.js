
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')
// 验证密码
const verifyUser = async (ctx, next) => {
  //验证数据是否能保存到数据库
  const { name, password } = ctx.request.body
  console.log('ctx.request.body===', ctx.request.body);

  if (!name || !password) {
    return ctx.app.emit('myEvent', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  const users = await userService.findUserByname(name)
  if (users.length) {
    // ctx.body = {
    //   code: -1002,
    //   message: "用户已存在，注册失败",
    // }
    return ctx.app.emit('myEvent', NAME_IS_ALREADY_EXISTS, ctx)
  }
  await next()
}
// 密码加密
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next() 

}
module.exports = { verifyUser, handlePassword }