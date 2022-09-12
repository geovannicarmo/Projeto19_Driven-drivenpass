import { Request, Response } from "express";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { insertCardsServices, getAllCardsService, getCardservice, deleteCardservice } from "../services/CardsService";

export async function postCardsController(req: Request, res: Response){

   const idUser = res.locals.idUser

   const dataCards = req.body

   dataCards.userId = idUser

   await insertCardsServices(dataCards)

   return res.status(201).send("Registration successfully complete")
}

export  async function getidCardsController(req: Request, res: Response){

    const idUser = res.locals.idUser
    
    const idCards = Number(req.params.idCard)

    if(!idCards){
      const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
      throw erro
    }

      const dados = await getCardservice(idUser, idCards)
    
      return res.status(200).send(dados)
      
  }

  export  async function getCardsController(req: Request, res: Response){

    const idUser = res.locals.idUser

    const dados = await getAllCardsService(idUser)
    
    return res.status(200).send(dados)

}

export async function deleteCardsController(req: Request, res: Response){

  const idCards = Number(req.params.idCard)
  const idUser = res.locals.idUser

  if(!idCards){
    const erro:IError = {code: "Unprocessable-Entity", details: "parameter must be a number"}; 
    throw erro
  }

  const dados = await deleteCardservice(idUser, idCards)

  return res.status(200).send("Card successfully deleted")
  
}