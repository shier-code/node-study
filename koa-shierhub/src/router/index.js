/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-28 16:23:57
 * @LastEditors: went
 * @LastEditTime: 2023-07-28 16:39:03
 */
const fs = require('fs')
function registerRouter(app) {
  //读取文件夹下所有问题件
  const files = fs.readdirSync(__dirname)
  console.log('--', files);
  for (const file of files) {
    if (!file.endsWith('-router.js')) continue
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }

}
module.exports = registerRouter