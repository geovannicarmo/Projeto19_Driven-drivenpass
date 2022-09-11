import Cryptr from 'cryptr'
import { IError } from '../middlewares/errorHandlingMiddleware';

export function encryptingByCryptr (data: string){

    const SECRET = process.env.SECRET

    if(SECRET===undefined){
        const erro:IError = {code: "internal-server-error", details: "Internal Server Error"}; 
        throw erro
    }

    const cryptr = new Cryptr(SECRET)

    return cryptr.encrypt(data)
}

export function descryptingByCryptr (data: string){

    const SECRET = process.env.SECRET

    if(SECRET===undefined){
        const erro:IError = {code: "internal-server-error", details: "Internal Server Error"}; 
        throw erro
    }

    const cryptr = new Cryptr(SECRET)

    return cryptr.decrypt(data)
}