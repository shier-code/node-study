/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-31 16:17:04
 * @LastEditors: went
 * @LastEditTime: 2023-08-03 10:52:51
 */

const { OPERATION_IS_NOT_ALLOWED } = require('../config/error')

const permissionService = require('../service/permission.service')
// 验证权限
const verifyPermission = async (ctx, next) => {
  const { id } = ctx.user
  const keyName = Object.keys(ctx.params)[0]
  const resourceId = ctx.params[keyName]
  const resourceName = keyName.replace('Id', '')

  const isPermission = await permissionService.checkRecource(resourceName, resourceId, id)
  if (!isPermission) {
    return ctx.app.emit('myEvent', OPERATION_IS_NOT_ALLOWED, ctx)
  }
  await next()
}

module.exports = { verifyPermission }