import ServiceClient from "../service/client.js"

class ControllerClient {
    async Findall(req, res) {
        try {
            const clients = await ServiceClient.FindAll()

            res.status(200).send({ clients })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.client?.id

            const client = await ServiceClient.FindOne(id)
            res.status(200).send({ client })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Create(req, res) {
        try {
            // const loggedClient = req.headers?.user

            const { name, email, password } = req.body
            await ServiceClient.Create(name, email, password)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Update(req, res) {
        try {
            const id = req.params.id || req.headers?.client?.id
            const { name, email, password } = req.body
            await ServiceClient.Update(id, name, email, password)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.client?.id
            await ServiceClient.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async Login(req, res) {
        try {
            const {email, password} = req.body
            const token = await ServiceClient.Login(email, password)
            res.status(200).send({token})
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

export default new ControllerClient()