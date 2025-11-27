import Client from "../model/client.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWTSECRET = "orosh"
const SALT = 10

class ServiceClient {
    async FindAll() {
        return Client.findAll()
    }
    async FindOne(id) {
        if (!id) {
            throw new Error("Informe o ID")
        }

        const client = await Client.findByPk(id)

        return client
    }
    async Create(name, email, password) {
        if (!name || !email || !password) {
            throw new Error("favor preencher todos os campos")
        }

        const passCrypt = await bcrypt.hash(String(password), SALT)

        await Client.create({
            name,
            email,
            password: passCrypt
        })
    }
    async Update(id, name, email, password) {
        const Pastclient = await Client.findByPk(id)
        Pastclient.name = name || Pastclient.name
        Pastclient.email = email || Pastclient.email
        Pastclient.password = password ? await bcrypt.hash(String(password), SALT) : Pastclient.password

        Pastclient.save()
    }
    async Delete(id) {
        const Pastclient = await Client.findByPk(id)

        Pastclient.destroy()
    }
    async Login(email, password) {
        if (!email || !password) {
            throw new Error("Email ou senha inválidos.")
        }

        const client = await Client.findOne({ where: { email } })

        if (!client || !(await bcrypt.compare(String(password), client.password))) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign(
            {id: client.id, name: client.name},
            JWTSECRET,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceClient()