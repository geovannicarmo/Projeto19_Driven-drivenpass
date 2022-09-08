import { Router } from "express";
import { singinController, loginController } from "../controllers/authController";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { authSchema } from "../schemas/authSchema";

const authRouter = Router()

authRouter.post('/signin', validationsMiddleware(authSchema), singinController)

authRouter.post('/login', validationsMiddleware(authSchema), loginController)

export default authRouter