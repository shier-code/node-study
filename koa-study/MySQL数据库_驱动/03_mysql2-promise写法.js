/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 09:35:47
 * @LastEditors: went
 * @LastEditTime: 2023-07-24 14:58:20
 */
const mysql = require('mysql2')


//创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'WAxx..2008512',
  connectionLimit: 5,
})

//执行预处理语句，防止sql注入
const statement2 = 'SELECT * FROM `t_products` WHERE price > ? AND title = ?;'
connectionPool.promise().execute(statement2, [900, '小米']).then(res => {
  const [values, fields] = res
  console.log('===', values);

}).catch(err => {
  console.log('err===', err);
})