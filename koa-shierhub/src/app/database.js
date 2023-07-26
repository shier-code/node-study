const mysql = require('mysql2')
//创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'WAxx..2008512',
  connectionLimit: 5
})
//获取连接是否chengg
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log('获取连接失败');
    return
  }
  //尝试和数据库建立连接
  connection.connect(err => {
    if (err) {
      console.log('和数据库交互失败', err);
    } else {
      console.log('数据库连接成功');
    }
  })
})
//获取连接对象
const connection = connectionPool.promise()

module.exports = connection