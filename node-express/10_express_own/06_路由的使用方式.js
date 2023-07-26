/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-13 15:20:19
 */
const express = require('express')

const app = express()
const userRouter=require('./router/userRouter')

app.use('/users',userRouter)
app.listen(9000, () => {
  console.log('express 服务启动成功');

})