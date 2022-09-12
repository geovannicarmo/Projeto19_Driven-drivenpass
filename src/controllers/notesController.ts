import { Request, Response } from "express";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { insertNotesServices, getAllNotesService, getNoteservice, deleteNoteservice } from '../services/noteService '

export async function postNotesController(req: Request, res: Response){

   const idUser = res.locals.idUser

   const dataNotes = req.body

   dataNotes.userId = idUser

   await insertNotesServices(dataNotes)

   return res.status(201).send("Registration successfully complete")
}

export  async function getidNotesController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const idNotes = Number(req.params.idcredential)

    if(!idNotes){
      const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
      throw erro
    }


      const dados = await getNoteservice(idUser, idNotes)
    
      return res.status(200).send(dados)
  }
    
  export  async function getNotesController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const dados = await getAllNotesService(idUser)
    
    return res.status(200).send(dados)

}

export async function deleteNotesController(req: Request, res: Response){

  const idNotes = Number(req.params.idcredential)
  const idUser = res.locals.idUser

  if(!idNotes){
    const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
    throw erro
  }

  const dados = await deleteNoteservice(idUser, idNotes)

  return res.status(200).send("credential successfully deleted")
  
}