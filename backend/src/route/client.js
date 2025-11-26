import express from "express"
import ControllerClient from "../controller/client.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post('/login', ControllerClient.Login)

router.get('/clients', authMiddleware(), ControllerClient.Findall)
router.get('/client/:id', authMiddleware(), ControllerClient.FindOne)
router.post('/client', ControllerClient.Create)
router.put('/client/:id', authMiddleware(), ControllerClient.Update)
router.delete('/client/:id', authMiddleware(), ControllerClient.Delete)

export default router