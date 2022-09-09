import { Router } from "express";
import {postCredentialsController, getCredentialsController} from "../controllers/credentialsController";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { credentialsSchemas } from "../schemas/credentialsSchemas";


const credentialsRoute = Router()

credentialsRoute.post('/credentials', validationsMiddleware(credentialsSchemas), verifyTokenMiddleware ,postCredentialsController)

credentialsRoute.get('/credentials', getCredentialsController)

export default credentialsRoute