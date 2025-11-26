import jwt from 'jsonwebtoken'
import ServiceClient from "../service/client.js"

const JWTSECRET = "orosh"

export default function authMiddleware() {
    return async (req, res, next) => {
        try {
            const token = req.headers['authorization']
            if (!token) {
                throw new Error("Você não tem permissão para realizar esta ação.")
            }
            const decoded = jwt.verify(token.split(' ')[1], JWTSECRET)

            const client = await ServiceClient.FindOne(decoded.id)

            req.headers.client = client
            next()
        } catch (erro) {
            res.status(403).send({
                data: null,
                msg: erro.message,
                error: true
            })
        }
    }
}