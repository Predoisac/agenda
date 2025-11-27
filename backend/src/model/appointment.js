import database from "../config/database.js";
import Client from "./client.js";

class Appointment {
    constructor() {
        this.model = database.db.define('Appointment', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: { type: database.db.Sequelize.STRING },
            time: { type: database.db.Sequelize.STRING },
            value: { type: database.db.Sequelize.STRING },
            done: { type: database.db.Sequelize.STRING },
        }
        )
        this.model.belongsTo(Client)
    }
}


export default new Appointment().model