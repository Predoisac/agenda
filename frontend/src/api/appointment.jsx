import api from "./api"

export const getAppointments = async () => {
    const response = await api.get('/api/v1/appointments')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.appointments
}

export const createAppointment = async (appointment) => {
   const response = await api.post('/api/v1/appointment', appointment)

   return response
}

export const updateAppointment = async (id, appointment) => {
    const response = await api.put(`/api/v1/appointment/${id}`, appointment)

    return response
}

export const deleteAppointment = async (id) => {
    const response = await api.delete(`/api/v1/appointment/${id}`)

    return response
}