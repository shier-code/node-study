/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-13 11:18:25
 * @LastEditors: went
 * @LastEditTime: 2023-05-22 19:12:27
 */
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  req.setEncoding('binary')
  const boundary = req.headers['content-type'].split(';')[1].replace('boundary', '')
  let formData = ''
  req.on("data", (data) => {
    console.log('file===', data);
    formData+=data

  })
  req.on("end", (data) => {
    //截取从image/jpeg"后的数据
    const imageType = "image/jpeg"
    const imageTypePostion = formData.indexOf(imageType) + imageType.length
    let imageData = formData.substring(imageTypePostion) 

    imageData=imageData.replace(/^\s\s*/,'')
  
    imageData=imageData.substring(0,imageData.indexOf(`--${boundary}--`))
    //imageData存储
    fs.writeFile('./file.pmg',imageData,'binary',()=>{
      console.log('文件存储成功');
      
    })
    res.end('文件上传成功')
  })
})
server.listen(8000, () => {
  console.log('服务器开启成功');
})