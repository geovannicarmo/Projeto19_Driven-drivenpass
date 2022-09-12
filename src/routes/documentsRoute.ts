import { Router } from "express";
import {postDocumentsController, getDocumentsController, deleteDocumentsController, getidDocumentsController} from '../controllers/documentsController'
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { doscumentsSchemas } from "../schemas/documentsSchemas";


const documentsRoute = Router()

documentsRoute.post('/document', validationsMiddleware(doscumentsSchemas), verifyTokenMiddleware ,postDocumentsController)

documentsRoute.get('/document',verifyTokenMiddleware, getDocumentsController)

documentsRoute.get('/document/:idcredential',verifyTokenMiddleware, getidDocumentsController)

documentsRoute.delete('/document/:idcredential',verifyTokenMiddleware, deleteDocumentsController)

export default documentsRoute