
/*
 * @Desc: 数据库操作
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-26 17:39:17
 * @LastEditors: went
 * @LastEditTime: 2023-08-03 09:56:38
 */

const connection = require('../app/database')

class MomentService {
  async create(content, userId) {
    // 保存到数据库
    const statement = 'INSERT INTO `moment` (content,user_id) VALUES (?,?);'

    const [result] = await connection.execute(statement, [content, userId])
    return result
  }
  async quertList(offset = 0, size = 10) {
    // 保存到数据库
    const statement = `SELECT  
    m.id id,m.content content,m.createAt createTime,
   JSON_OBJECT('id',u.id,'name',u.name) AS user 
   FROM moment m \
   LEFT JOIN user u ON u.id=m.user_id  LIMIT ? OFFSET ?;`

    const [result] = await connection.execute(statement, [String(size), String(offset)])
    return result
  }
  async queryById(id) {
    // 保存到数据库
    const statement = `SELECT  
    m.id id,m.content content,m.createAt createTime,
   JSON_OBJECT('id',u.id,'name',u.name) AS user 
   FROM moment m \
   LEFT JOIN user u ON u.id=m.user_id  
   WHERE m.id=?`

    const [result] = await connection.execute(statement, [id])
    return result
  }
  async update(content, id) {
    console.log(content, id);

    // 保存到数据库
    const statement = 'UPDATE moment SET content=? WHERE id=?'
    const [result] = await connection.execute(statement, [content, id])
    return result
  }
  async remove(id) {
    const statement = 'DELETE FROM moment WHERE id=?'
    const [result] = await connection.execute(statement, [id])
    return result
  }
}
module.exports = new MomentService() 