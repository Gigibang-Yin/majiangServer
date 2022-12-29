let mysql = require('mysql')

class Db {
    static getinstance() {
        if(Db.instance){
            return Db.instance
        }else {
            Db.instance = new Db()
            return Db.instance
        }
    }
    constructor() {
        let Mysql = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'majiang'
        })
        Mysql.connect()
        console.log('数据库连接成功')
        this._mysql = Mysql
    }
    getUserInfo(id){
        return new Promise((reslove,reject) => {
            this._mysql.query('select * from user_info where user_id =' + id,(err,res) => {
                if(res) {
                    reslove(res)
                } else {
                    reject(err)
                }
            })
        })
    }
}
global.instance.db = Db.getinstance()
module.exports = Db