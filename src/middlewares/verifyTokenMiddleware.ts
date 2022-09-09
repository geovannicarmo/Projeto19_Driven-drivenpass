import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import { IError } from './errorHandlingMiddleware';

export async function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction){

    const authorization = req.headers.authorization

    if(!authorization){
        return res.status(401).send("Invalid or Insistent Token")
    }

    const authorizationArray = authorization.split(" ")
    const token = authorizationArray[1]

    const SECRET = process.env.SECRET 

    if(SECRET===undefined){
        const erro:IError = {code: "internal-server-error", details: "Internal Server Error"}; 
        throw erro
    }

    try{
        const dataToken: any =  jwt.verify(token, SECRET)
        const idUser = dataToken.iduser

    
 
        res.locals.idUser = idUser
    }catch{
        return res.status(401).send("Invalid or Insistent Token")
    }

    next()
}

interface dataToken {

    iduser:number
    iat:number
    exp:number
} 
