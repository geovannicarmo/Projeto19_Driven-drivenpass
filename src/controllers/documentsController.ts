import { Request, Response } from "express";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { insertDocumentsServices, getAllDocumentsService, getDocumentservice, deleteDocumentservice } from '../services/documentsService'

export async function postDocumentsController(req: Request, res: Response){

   const idUser = res.locals.idUser

   const dataDocuments = req.body

   dataDocuments.userId = idUser

   await insertDocumentsServices(dataDocuments)

   return res.status(201).send("Registration successfully complete")
}

export  async function getidDocumentsController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const idDocuments = Number(req.params.idcredential)

    if(!idDocuments){
      const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
      throw erro
    }


      const dados = await getDocumentservice(idUser, idDocuments)
    
      return res.status(200).send(dados)
  }
    
  export  async function getDocumentsController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const dados = await getAllDocumentsService(idUser)
    
    return res.status(200).send(dados)

}

export async function deleteDocumentsController(req: Request, res: Response){

  const idDocuments = Number(req.params.idcredential)
  const idUser = res.locals.idUser

  if(!idDocuments){
    const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
    throw erro
  }

  const dados = await deleteDocumentservice(idUser, idDocuments)

  return res.status(200).send("credential successfully deleted")
  
}