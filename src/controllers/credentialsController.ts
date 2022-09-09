import { Request, Response } from "express";
import { insertCredentialsServices } from "../services/credentialsService";

export async function postCredentialsController(req: Request, res: Response){

   const idUser = res.locals.idUser

   const dataCredentials = req.body

   dataCredentials.userId = idUser

   await insertCredentialsServices(dataCredentials, idUser)

     res.send(req.body)

}


export  async function getCredentialsController(req: Request, res: Response){

    res.send(req.body)

}