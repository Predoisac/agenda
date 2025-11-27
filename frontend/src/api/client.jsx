import api from "./api"

export const getClients = async () => {
    const response = await api.get('/api/v1/clients')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.clients
}

export const createClient = async (client) => {
   const response = await api.post('/api/v1/client', client)

   return response
}

export const updateClient = async (id, client) => {
    const response = await api.put(`/api/v1/client/${id}`, client)

    return response
}

export const deleteClient = async (id) => {
    const response = await api.delete(`/api/v1/client/${id}`)

    return response
}

export const loginClient = async (email, password) => {
    const response = await api.post('/api/v1/login', { email, password })

   return response
}