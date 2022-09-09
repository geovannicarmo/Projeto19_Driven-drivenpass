import { findUserByIdService } from "./authSevice";
import * as credentialsRepository from '../repositorys/credemtialsRepository'
import { encryptingByCryptr } from "../utils/utils";
import { IError } from "../middlewares/errorHandlingMiddleware";
import {Credentials} from '@prisma/client'

export async function insertCredentialsServices(
    dataCredentials: any, 
    idUser: number){

    const dataUser = await findUserByIdService(idUser)

    const passwordCrypt = encryptingByCryptr(dataCredentials.password)

   

    dataCredentials.password = passwordCrypt

    const isTitle = await credentialsRepository.findByTitleAndId(dataCredentials.title, dataCredentials.userId)

    console.log(isTitle)

    if(isTitle){
        const erro:IError = {code: "not-found", details: "Já existe com esse title"}; 
        throw erro
    
    }

    await credentialsRepository.createdCredentils(dataCredentials)

}




