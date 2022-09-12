import { Request, Response } from "express";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { insertCredentialsServices, getAllCredentialsService, getCredentialService, deleteCredentialService } from "../services/credentialsService";

export async function postCredentialsController(req: Request, res: Response){

   const idUser = res.locals.idUser

   const dataCredentials = req.body

   dataCredentials.userId = idUser

   await insertCredentialsServices(dataCredentials)

   return res.status(201).send("Registration successfully complete")
}

export  async function getidCredentialsController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const idCredentials = Number(req.params.idcredential)

    if(!idCredentials){
      const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
      throw erro
    }

      const dados = await getCredentialService(idUser, idCredentials)
    
      return res.status(200).send(dados)
      
  }
  export  async function getCredentialsController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const dados = await getAllCredentialsService(idUser)
    
    return res.status(200).send(dados)

}

export async function deleteCredentialsController(req: Request, res: Response){

  const idCredentials = Number(req.params.idcredential)
  const idUser = res.locals.idUser

  if(!idCredentials){
    const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
    throw erro
  }

  const dados = await deleteCredentialService(idUser, idCredentials)

  return res.status(200).send("credential successfully deleted")
  
}