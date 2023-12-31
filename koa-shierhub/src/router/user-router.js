/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 16:43:59
 * @LastEditors: went
 * @LastEditTime: 2023-07-27 14:05:49
 */
const KoaRouter = require('@koa/router')
const UserController = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')
const userRouter = new KoaRouter({ prefix: '/users' })
// 用户注册
userRouter.post('/', verifyUser, handlePassword, UserController.create)

module.exports = userRouter