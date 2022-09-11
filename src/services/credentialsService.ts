import * as credentialsRepository from '../repositorys/credemtialsRepository'
import { encryptingByCryptr, descryptingByCryptr } from "../utils/utils";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { ICredentials } from "../types/credentilsTypes";

export async function insertCredentialsServices(
    dataCredentials: ICredentials){

    // const dataUser = await findUserByIdService(dataCredentials.userId)

    const passwordCrypt: string = encryptingByCryptr(dataCredentials.password)
    
    dataCredentials.password = passwordCrypt

    const isTitle = await credentialsRepository.findByTitleAndId(dataCredentials.title, dataCredentials.userId)

    if(isTitle){
        const erro:IError = {code: "conflict", details: "There is already credential with this title."}; 
        throw erro
    }
    await credentialsRepository.createdCredentils(dataCredentials)

}


export async function getAllCredentialsService(idUser: number){

    const dataCredentials = await credentialsRepository.getAllCredentialsRepository(idUser)

    dataCredentials.map((data)=>{

        data.password = descryptingByCryptr(data.password)
    })

    return dataCredentials
}

export async function getCredentialService(idUser: number, idCredentials: number){

    
    const dataCredential = await credentialsRepository.getCredentialRepository(idUser, idCredentials)
    
    if(!dataCredential){
        const erro:IError = {code: "not-found", details: "Credential does not exist or does not belong to the user."}; 
        throw erro
    }

    return dataCredential
}


export async function deleteCredentialService(idUser: number, idCredentials: number){

    const dataCredential = await credentialsRepository.deleteCredentialRepository(idUser, idCredentials)

    if(dataCredential.count===0){
        const erro:IError = {code: "not-found", details: "Credential does not exist or does not belong to the user."}; 
        throw erro
    }
    return
}
