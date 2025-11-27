import Appointment from "../model/appointment.js"
import Client from "./client.js"
 

class ServiceAppointment {
    async FindAll() {
        return Appointment.findAll()
    }
    async FindOne(id) {
        if (!id) {
            throw new Error("Informe o ID")
        }

        const appointment = await appointment.findByPk(id)

        return appointment
    }
    async Create(date, time, value, done, clientId) {
        if (!date || !time || !value) {
            throw new Error("favor preencher todos os campos")
        }

        await Appointment.create({
            date,
            time,
            value,
            done,
            clientId
        })
    }
    async Update(id, date, time, value, done) {
        const PastAppointment = await Appointment.findByPk(id)
        PastAppointment.date = date || PastAppointment.date
        PastAppointment.time = time || PastAppointment.time
        PastAppointment.value = value || PastAppointment.value
        PastAppointment.done = done || PastAppointment.done

        PastAppointment.save()
    }
    async Delete(id) {
        const PastAppointment = await Appointment.findByPk(id)

        PastAppointment.destroy()
    }
    
}

export default new ServiceAppointment()