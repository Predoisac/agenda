import database from "../config/database.js";

class Appointment {
    constructor() {
        this.model = database.db.define('Appointment', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: { type: database.db.Sequelize.DATE },
            time: { type: database.db.Sequelize.TIME },
            value: { type: database.db.Sequelize.DECIMAL },
            done: { type: database.db.Sequelize.BOOLEAN }
        })
    }
}

export default new Appointment().model