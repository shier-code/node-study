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