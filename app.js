global.instance = {}
let messageMgr = require('./messageMgr')
let DB = require('./db')
let UserMgr = require('./userMgr')

// messagemgr.createServer()
global.instance.messageMgr.createServer()
// db.getUserInfo().then((res) => {
//     console.log('查询结果', res)
// }).catch((err) => {
//     console.log('查询失败', err)
// })