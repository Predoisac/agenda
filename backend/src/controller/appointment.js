import ServiceAppointment from "../service/appointment.js"
import client from "./client.js"

class ControllerAppointment {
    async Findall(req, res) {
        try {
            const appointments = await ServiceAppointment.FindAll()

            res.status(200).send({ appointments })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.appointment?.id

            const appointment = await ServiceAppointment.FindOne(id)
            res.status(200).send({ appointment })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Create(req, res) {
        try {
            const { date, time, value, done } = req.body
            await ServiceAppointment.Create(date, time, value, done)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id || req.headers?.appointment?.id
            const { date, time, value, done } = req.body
            await ServiceAppointment.Update(id, date, time, value, done)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.appointment?.id
            await ServiceAppointment.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

export default new ControllerAppointment()