/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-01-31 16:28:32
 * @LastEditors: went
 * @LastEditTime: 2023-03-09 15:49:50
 */

const path = require("path")
//fs:文件管理系统，操作磁盘中文件
const fs = require('fs')
// const buf = fs.readFileSync(path.resolve(__dirname, './hello.txt'),{
//   encoding:'utf-8'
// })
//同步读取文件会阻塞代码执行
//buffer是一个临时存储数据的缓冲区
// console.log('buf===', buf.toString());
//异步读取文件
fs.readFile(path.resolve(__dirname, './hello.txt'),
  (err, buffer) => {
    if (err) {
      console.log('出错了')
    } else {
      console.log('async buf===', buffer.toString())
    }
  }
)
//文件描述符，获取文件信息
fs.open(path.resolve(__dirname, './hello.txt'),
  (err, fd) => {
    if (err) return
    fs.fstat(fd, (err, status) => {
      if (err) return
      console.log('文件信息===', status);
      //手动关闭文件
      fs.close(fd)
    })
  })

//promise读取文件
const fsPm = require('fs/promises')
fsPm.readFile(path.resolve(__dirname, './hello.txt'))
  .then(buffer => {
    console.log('promise buf===', buffer.toString())
  })
  .catch(err => {
    onsole.log('promise bu err===', err)
  })
//创建新文件/添加数据到已有文件(writeFile是执行内容覆盖而不是追加)
fsPm.appendFile(path.resolve(__dirname, './hello.txt'), '创建的新文件内容')
  .then(r => {
    console.log('创建成功');
  })

/**
 * fs.mkdir() 创建目录
 * fs.rmdir() 删除目录
 * fs.rm() 删除文件
 * fs.rename() 重命名 （剪切）
 * fs.copyfile() 复制文件
 */
fsPm.mkdir(path.resolve(__dirname, './一级/二级'), {
  recursive: true
})
  .then(r => {
    console.log('创建文件夹成功');
  }).catch(err => {
    console.log(err);
  })

fsPm.rename(
  path.resolve(__dirname, './一级'),
  path.resolve(__dirname, './新文件'))
  .then(r => {
    console.log('创建文件夹成功');
  }).catch(err => {
    console.log(err);
  })

//递归读取文件夹的所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true },(err, files) => {
    files.forEach(item => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`)
      } else { 
        console.log('获取到的文件：',item.name);
        
      }
    })
  })
}
readDirectory(__dirname)

