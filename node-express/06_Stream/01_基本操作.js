/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-10 14:24:37
 * @LastEditors: went
 * @LastEditTime: 2023-03-13 09:15:38
 */
//buffer:处理二进制
const fs = require('fs')

const readStream = fs.createReadStream('./hello.txt', {
  start: 6,
  end: 18,
  highWaterMark: 3//分段读取
})
readStream.on('data', (buf) => {
  console.log('buf===', buf.toString());
  readStream.pause()
  setTimeout(() => {
    readStream.resume()//重新开始
  }, 2000);
})
//获取文件信息
readStream.on('open', (fd) => {
  console.log(fd);
})
readStream.on('end', () => {
  console.log('已经读取到end位置');
})
//可写流复制文件
const writeStream = fs.createWriteStream('./helloCopy.txt')

readStream.on('data', (data) => { 
  writeStream.write(data)
})
readStream.on('end', (data) => { 
  readStream.close()
})
//在可读流和可写流建立管道
readStream.pipe(writeStream)
