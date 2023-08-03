/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-31 16:13:37
 * @LastEditors: went
 * @LastEditTime: 2023-08-03 11:12:50
 */

const momentService = require('../service/moment.service')
class MomentController {
  async create(ctx, next) {
    //获取动态内容
    const { content } = ctx.request.body
    //获取用户信息
    const { id } = ctx.user
    console.log('content====', content);

    //保存数据
    const result = await momentService.create(content, id)
    ctx.body = {
      code: 0,
      message: '创建动态成功',
      data: result
    }
  }
  async list(ctx, next) {
    const { offset, size } = ctx.query
    const result = await momentService.quertList(offset, size)
    ctx.body = {
      code: 0,
      message: '获取动态列表成功',
      data: result
    }
  }
  async detail(ctx, next) {
    const { momentId } = ctx.params
    const result = await momentService.queryById(momentId)
    ctx.body = {
      code: 0,
      message: '获取动态详情成功',
      data: result[0]
    }
  }
  async update(ctx, next) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body
    const result = await momentService.update(content, momentId)
    ctx.body = {
      code: 0,
      message: '修改成功',
      data: result
    }
  }
  async remove(ctx, next) {
    const { momentId } = ctx.params
    const result = await momentService.remove(momentId)
    ctx.body = {
      code: 0,
      message: '删除动态成功',
      data: result
    }
  }

}

module.exports = new MomentController()