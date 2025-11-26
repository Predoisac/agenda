import express from "express"
import ControllerAppointment from "../controller/appointment.js"
import authMiddleware from "../middleware/auth.js"

const routerAppointment = express.Router()

routerAppointment.get('/appointments', ControllerAppointment.Findall)
routerAppointment.get('/appointment/:id', ControllerAppointment.FindOne)
routerAppointment.post('/appointment', ControllerAppointment.Create)
routerAppointment.put('/appointment/:id', ControllerAppointment.Update)
routerAppointment.delete('/appointment/:id', ControllerAppointment.Delete)

export default routerAppointment