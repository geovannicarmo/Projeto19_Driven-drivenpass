import { Request, Response } from "express";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { insertWifisServices, getAllWifisService, getWifiservice, deleteWifiservice } from "../services/WifisService";

export async function postWifisController(req: Request, res: Response){

   const idUser = res.locals.idUser

   const dataWifis = req.body

   dataWifis.userId = idUser

   await insertWifisServices(dataWifis)

   return res.status(201).send("Registration successfully complete")
}

export  async function getidWifisController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const idWifis = Number(req.params.idcredential)

    if(!idWifis){
      const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
      throw erro
    }
      const dados = await getWifiservice(idUser, idWifis)
    
      return res.status(200).send(dados)
      

  }

  export  async function getWifisController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const dados = await getAllWifisService(idUser)
    
    return res.status(200).send(dados)

}

export async function deleteWifisController(req: Request, res: Response){

  const idWifis = Number(req.params.idcredential)
  const idUser = res.locals.idUser

  if(!idWifis){
    const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
    throw erro
  }

  const dados = await deleteWifiservice(idUser, idWifis)

  return res.status(200).send("Wi-fi successfully deleted")
  
}