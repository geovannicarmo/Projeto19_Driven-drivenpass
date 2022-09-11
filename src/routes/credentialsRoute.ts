import { Router } from "express";
import {postCredentialsController, getCredentialsController, deleteCredentialsController} from "../controllers/credentialsController";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { credentialsSchemas } from "../schemas/credentialsSchemas";


const credentialsRoute = Router()

credentialsRoute.post('/credentials', validationsMiddleware(credentialsSchemas), verifyTokenMiddleware ,postCredentialsController)

credentialsRoute.get('/credentials',verifyTokenMiddleware, getCredentialsController)

credentialsRoute.get('/credentials/:idcredential',verifyTokenMiddleware, getCredentialsController)

credentialsRoute.delete('/credentials/:idcredential',verifyTokenMiddleware, deleteCredentialsController)

export default credentialsRoute