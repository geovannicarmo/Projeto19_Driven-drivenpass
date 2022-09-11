import client from "../dbs/posgresPrisma";
import { INotes } from "../types/notesTypes";

export async function createdCredentils(dataNotes: INotes){

    await client.notes.create({
        data: dataNotes
    })
}

export async function findByTitleAndId(title: string, idUser: number){

  return await client.notes.findFirst({

        where:{
            AND: {
                    title: title,
                    userId:  idUser 
                }
        }
    })
}


export async function getAllNotesRepository (idUser: number){

    return client.notes.findMany({
        where:{
            userId: idUser
        }
    })
}

export async function getCredentialRepository (idUser: number, idNotes: number){

    return client.notes.findMany({
        where:{
            AND: {
                id: idNotes,
                userId: idUser
            }
        }
    })
}

export async function deleteCredentialRepository (idUser: number, idNotes: number){

    return client.notes.deleteMany({
        where:{
            AND: {
                id: idNotes,
                userId: idUser
            }
        }
    })
}