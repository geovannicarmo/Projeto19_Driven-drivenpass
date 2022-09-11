import * as NotesRepository from '../repositorys/noteRepository'
import { IError } from "../middlewares/errorHandlingMiddleware";
import { INotes } from "../types/notesTypes";

export async function insertNotesServices(
    dataNotes: INotes){


    const isTitle = await NotesRepository.findByTitleAndId(dataNotes.title, dataNotes.userId)

    if(isTitle){
        const erro:IError = {code: "conflict", details: "There is already credential with this title."}; 
        throw erro
    }
    await NotesRepository.createdCredentils(dataNotes)

}


export async function getAllNotesService(idUser: number){

    const dataNotes = await NotesRepository.getAllNotesRepository(idUser)



    return dataNotes
}

export async function getNoteservice(idUser: number, idNotes: number){

    
    const dataCredential = await NotesRepository.getCredentialRepository(idUser, idNotes)
    
    if(!dataCredential){
        const erro:IError = {code: "not-found", details: "Credential does not exist or does not belong to the user."}; 
        throw erro
    }

    return dataCredential
}


export async function deleteNoteservice(idUser: number, idNotes: number){

    const dataCredential = await NotesRepository.deleteCredentialRepository(idUser, idNotes)

    if(dataCredential.count===0){
        const erro:IError = {code: "not-found", details: "Credential does not exist or does not belong to the user."}; 
        throw erro
    }
    return
}
