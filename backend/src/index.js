import express from "express"
import cors from "cors"
import router from "./route/client.js"
import database from "./config/database.js"
import routerAppointment from "./route/appointment.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)
app.use('/api/v1', routerAppointment)

const port = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info("Servidor rodando na porta " + port)
        })
    })