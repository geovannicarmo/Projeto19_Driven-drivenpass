import client from "../dbs/posgresPrisma";
import { IDocument } from "../types/documentsTypes";

export async function createdCredentils(dataDocuments: IDocument){

    await client.documents.create({
        data: dataDocuments
    })
}

export async function findByTitleAndId(title: string, idUser: number){

  return await client.documents.findFirst({

        where:{
            AND: {
                    title: title,
                    userId:  idUser 
                }
        }
    })
}


export async function getAllDocumentsRepository (idUser: number){

    return client.documents.findMany({
        where:{
            userId: idUser
        }
    })
}

export async function getDocumentRepository (idUser: number, idDocuments: number){

    return client.documents.findFirst({
        where:{
            AND: {
                id: idDocuments,
                userId: idUser
            }
        }
    })
}

export async function deleteDocumentRepository (idUser: number, idDocuments: number){

    return client.documents.deleteMany({
        where:{
            AND: {
                id: idDocuments,
                userId: idUser
            }
        }
    })
}