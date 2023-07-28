/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 17:24:07
 * @LastEditors: went
 * @LastEditTime: 2023-07-28 15:13:31
 */
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const privateKey = fs.readFileSync(path.resolve(__dirname, '../config/keys/private.key'))
class LoginController {
  async sign(ctx, next) {
    //获取用户信息
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, privateKey, {
      expiresIn: 24 * 60 * 60,
      algorithm: 'RS256'
    })

    ctx.body = {
      code: 0,
      data: {
        id, name, token
      }
    }
  }
  async test(ctx, next) {
    ctx.body = {
      code: 0,
      data: '验证通过'
    }
  }

}

module.exports = new LoginController()