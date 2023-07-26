/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-03-13 11:18:25
 * @LastEditors: went
 * @LastEditTime: 2023-05-17 19:10:40
 */
const axios = require('axios')
axios.get('http://localhost:8000').then(res=>{
  console.log('=====',res.data);
  
})
