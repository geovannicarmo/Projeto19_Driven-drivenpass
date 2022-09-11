import { Router } from "express";
import {postNotesController, getNotesController, deleteNotesController} from '../controllers/notesController'
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { noteSchemas } from "../schemas/noteSchemas ";


const notesRoute = Router()

notesRoute.post('/note', validationsMiddleware(noteSchemas), verifyTokenMiddleware ,postNotesController)

notesRoute.get('/note',verifyTokenMiddleware, getNotesController)

notesRoute.get('/note/:idcredential',verifyTokenMiddleware, getNotesController)

notesRoute.delete('/note/:idcredential',verifyTokenMiddleware, deleteNotesController)

export default notesRoute