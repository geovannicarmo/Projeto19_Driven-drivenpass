import client from "../dbs/posgresPrisma";
import { ICredentials } from "../types/credentilsTypes";

export async function createdCredentils(dataCredentials: ICredentials){

    await client.credentials.create({
        data: dataCredentials
    })
}

export async function findByTitleAndId(title: string, idUser: number){

  return await client.credentials.findFirst({

        where:{
            AND: {
                    title: title,
                    userId:  idUser 
                }
        }
    })
}


export async function getAllCredentialsRepository (idUser: number){

    return client.credentials.findMany({
        where:{
            userId: idUser
        }
    })
}

export async function getCredentialRepository (idUser: number, idCredentials: number){

    return client.credentials.findMany({
        where:{
            AND: {
                id: idCredentials,
                userId: idUser
            }
        }
    })
}

export async function deleteCredentialRepository (idUser: number, idCredentials: number){

    return client.credentials.deleteMany({
        where:{
            AND: {
                id: idCredentials,
                userId: idUser
            }
        }
    })
}