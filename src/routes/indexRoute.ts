import { Router } from "express";
import authRouter from "./authRouter";
import credentialsRoute from "./credentialsRoute";


const router = Router()


router.use(authRouter)
router.use(credentialsRoute)


export default router