/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 16:09:23
 * @LastEditors: went
 * @LastEditTime: 2023-07-26 17:15:12
 */
const app = require('./app')
const { SERVER_PORT } = require('./config/server')
require('./utils/handle-error')
app.listen(SERVER_PORT, () => {
  console.log('coderhub服务启动成功');
})