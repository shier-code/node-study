/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-24 09:35:47
 * @LastEditors: went
 * @LastEditTime: 2023-07-24 14:08:11
 */
const mysql = require('mysql2')
// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'WAxx..2008512'
})
//操作数据库
// const statement = 'SELECT * FROM `t_song`;'
// connection.query(statement, (err, values, fields) => {
//   if (err) {
//     console.log('查询失败：', err);
//     return
//   }
//   console.log('====',values);

// })

//创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'WAxx..2008512',
  connectionLimit:5,
})

//执行预处理语句，防止sql注入
const statement2 = 'SELECT * FROM `t_song` WHERE price > ? AND score > ?;'
connectionPool.execute(statement2, [1000, 8], (err, values, fields) => {
  if (err) {
    console.log('查询失败：', err);
    return
  }
  console.log('====', values);

})