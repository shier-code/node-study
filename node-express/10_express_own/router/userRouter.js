/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-13 15:18:41
 * @LastEditors: went
 * @LastEditTime: 2023-07-13 15:19:20
 */
const express = require('express')
//创建路由
const userRouter = express.Router()
//定义路由映射接口
userRouter.get('/', (req, res, next) => {

  const queryInfo = req.query
  console.log(queryInfo);
  res.end('data list')

})
//解析params
userRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.json({
    code: 0,
    message: "success",
    list: []
  })
})
module.exports = userRouter