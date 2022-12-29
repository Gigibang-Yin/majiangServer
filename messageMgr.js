const ws = require("nodejs-websocket");

class messageMgr {
  static getinstance() {
    if(messageMgr.instance){
        return messageMgr.instance
    }else {
      messageMgr.instance = new messageMgr()
        return messageMgr.instance
    }
}
  constructor() {
  }
  createServer() {
    console.log("开始监听客户端消息");
    let websocket = ws.createServer( (client) => {
      client.on("text", (data) => {
        console.log("客户端发送了数据", data);
        let message = JSON.parse(data)
        let type = message.type
        let tmpData = message.data
        this.responseMessage(type,tmpData)
      });
      client.on("close", () => {
        console.log("客户端断开连接");
      });
      client.on("error", () => {
        console.log("网络连接出错");
      });
    });
    websocket.listen(9500);
  }

  
  responseMessage(type,data) {
    console.log('接受的type', type)
    console.log('接受的data', data)
    switch(type) {
      case 'login':
        global.instance.userMgr.responseUserLoginMessage(data).then((result) => {
          console.log('登录返回的信息是',result)
        }).catch(() => {
          console.log('未查到此玩家',err)
        })
    }
  }
}
global.instance.messageMgr = messageMgr.getinstance()
module.exports = messageMgr
