import {Sequelize} from "sequelize"

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'agenda_8nus',
            host: 'dpg-d4l2d87gi27c73es2etg-a',
            username: 'agenda_8nus_user',
            password: 'rzzfiFLyXOevg02C2FP3zZyPx9Ucobfl',
            dialect: 'postgres'
        })
    }
}

export default new Database()