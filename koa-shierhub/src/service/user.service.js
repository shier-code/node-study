
/*
 * @Desc: 数据库操作
 * @Version: v1.00
 * @Author: went
 * @Date: 2023-07-26 17:39:17
 * @LastEditors: went
 * @LastEditTime: 2023-07-26 17:47:11
 */

const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    // 保存到数据库
    const statement = 'INSERT INTO `user` (name,password) VALUES (?,?);'

    const [result] = await connection.execute(statement, [name, password])
    return result
  }
  async findUserByname(name) {
    const statement = 'SELECT * FROM `user` WHERE name = ?;'
    const [values] = await connection.execute(statement, [name])
    return values
  }
}
module.exports = new UserService() 