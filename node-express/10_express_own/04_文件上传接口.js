/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-12 15:44:19
 * @LastEditors: went
 * @LastEditTime: 2023-07-13 11:16:03
 */
const express = require('express')
const multer = require('multer')
const app = express()

//内置express上传中间件
const upload = multer({
  // dest: './uploads'//上传文件存放位置
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
  })
})
//上传单文件
app.post('/avatar', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功')

})
app.post('/photos', upload.array('photos'), (req, res, next) => {
  console.log(req.files);
  res.end('多个文件上传成功')

})

app.listen(9000, () => {
  console.log('express 服务启动成功');

})