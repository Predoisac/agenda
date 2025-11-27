import database from "../config/database.js";
import appointment from "./appointment.js";

class Client {
    constructor() {
        this.model = database.db.define('client', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: { type: database.db.Sequelize.STRING },
            email: { type: database.db.Sequelize.STRING },
            password: { type: database.db.Sequelize.STRING }
        })

        this.model.hasMany(appointment)
    }
}

export default new Client().model