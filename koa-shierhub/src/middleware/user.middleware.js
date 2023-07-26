
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS } = require('../config/error')
const userService = require('../service/user.service')

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

module.exports = { verifyUser }