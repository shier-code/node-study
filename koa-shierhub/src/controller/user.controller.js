/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 17:24:07
 * @LastEditors: went
 * @LastEditTime: 2023-07-26 16:39:10
 */
const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body

    //存入数据库
    const result = await userService.create(user)

    ctx.body = {
      message: "用户创建成功",
      data: result
    }
  }
}

module.exports = new UserController()