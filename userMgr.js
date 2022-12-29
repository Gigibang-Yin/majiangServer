let user = require('./user')
class UserMgr {
    static getinstance() {
        if(UserMgr.instance){
            return UserMgr.instance
        }else {
            UserMgr.instance = new UserMgr()
            return UserMgr.instance
        }
    }
    constructor() {
        this._userList = []
    }
    responseUserLoginMessage(id) {
        return new Promise((reslove,reject) => {
            for(let i = 0; i < this._userList.length; i++) {
                let player = this._userList[i]
                if(player._id === id) {
                console.log('你确实会经过这里吗')
                    return
                }
            }
            global.instance.db.getUserInfo(id).then((result) => {
                if(result.length > 0) {
                    let id = result[0].user_id
                    let nickName = result[0].user_name
                    let houseCardCount = result[0].user_house_cart_count
                    let player = new user(id, nickName, houseCardCount)
                    this._userList.push(player)
                    reslove(player.getPlayerInfo())
                } else {
                    reject({err: '数据库未有玩家信息'})
                }
            }).catch((err) => {
                console.log('未查询到此玩家', err)
            })
        })
        // global.instance.db.getUserInfo(id).then((result) => {
        //     console.log('获取玩家信息成功', result)
        // }).catch((err) => {
        //     console.log('未查询到此玩家', err)
        // })
    }
}
global.instance.userMgr = UserMgr.getinstance()
module.exports = UserMgr