/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-13 10:34:59
 * @LastEditors: went
 * @LastEditTime: 2023-03-13 10:42:41
 */
const fs = require('fs')
const writeStream = fs.createWriteStream('./hello.txt', {
  flags:'r+',//windows兼容性问题使用'r+',本来使用'a+'
  start:10
})
writeStream.write('my name is cxk')
writeStream.close()
