/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-10 14:24:37
 * @LastEditors: went
 * @LastEditTime: 2023-03-10 14:55:15
 */
//buffer:处理二进制
const fs=require('fs')
//创建8个字节大小的bugger内存空间
const buf=Buffer.alloc(8)
buf[0]=100
console.log('----',buf);
console.log('----',buf.toString());

