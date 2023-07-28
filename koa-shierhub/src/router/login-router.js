/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 16:43:59
 * @LastEditors: went
 * @LastEditTime: 2023-07-28 10:38:48
 */
const KoaRouter = require('@koa/router')
const LoginController = require('../controller/login.controller')
const { verifyLogin, verifyAuth } = require('../middleware/login.middleware')
const loginRouter = new KoaRouter({ prefix: '/login' })
// 用户注册
loginRouter.post('/', verifyLogin, LoginController.sign)
loginRouter.post('/test', verifyAuth, LoginController.test)
module.exports = loginRouter