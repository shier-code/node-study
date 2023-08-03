/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 16:43:59
 * @LastEditors: went
 * @LastEditTime: 2023-08-03 10:42:09
 */
const KoaRouter = require('@koa/router')
const MomentController = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')
const { verifyPermission } = require('../middleware/permission.middleware')
const momentRouter = new KoaRouter({ prefix: '/moment' })
// 用户注册
momentRouter.post('/', verifyAuth, MomentController.create)
momentRouter.get('/', MomentController.list)
momentRouter.get('/:momentId', MomentController.detail)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, MomentController.update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, MomentController.remove)

module.exports = momentRouter  