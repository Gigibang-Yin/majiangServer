class User {
    constructor(id, nickName, houseCardCount) {
        this._id = id
        this._nickName = nickName
        this._houseCardCount = houseCardCount
    }
    getPlayerInfo() {
        let tmpData = {
            id: this._id,
            nickName: this._nickName,
            houseCardCount: this._houseCardCount
        }
        return tmpData
    }
}
module.exports = User
