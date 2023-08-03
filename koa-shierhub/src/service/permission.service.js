
const connection = require('../app/database')

class PermissionService {
  async checkRecource(resourceName, resourceId, userId) {
    console.log('--------', resourceName, resourceId, userId);

    const statement = `SELECT * FROM ${resourceName} WHERE id=? AND user_id=?`

    const [result] = await connection.execute(statement, [resourceId, userId])
    console.log(result);

    return !!result.length
  }
}
module.exports = new PermissionService() 