/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-01-31 10:07:47
 * @LastEditors: went
 * @LastEditTime: 2023-01-31 16:29:10
 */
//path:获取路径
//path.resolve() 用来生成一个绝对路径
const path = require("path")
console.log('path===', path.resolve());
console.log('__dirname===', __dirname);
console.log('fullpath===', path.resolve(__dirname, './hello.txt'));//node中尽量减少使用相对路径




