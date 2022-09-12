import * as DocumentsRepository from '../repositorys/documentsRepository'
import { IError } from "../middlewares/errorHandlingMiddleware";
import { IDocument } from "../types/documentsTypes";

export async function insertDocumentsServices(
    dataDocuments: IDocument){


    const isTitle = await DocumentsRepository.findByTitleAndId(dataDocuments.title, dataDocuments.userId)

    if(isTitle){
        const erro:IError = {code: "conflict", details: "There is already Note with this title."}; 
        throw erro
    }
    await DocumentsRepository.createdCredentils(dataDocuments)

}


export async function getAllDocumentsService(idUser: number){

    const dataDocuments = await DocumentsRepository.getAllDocumentsRepository(idUser)



    return dataDocuments
}

export async function getDocumentservice(idUser: number, idDocuments: number){

    
    const dataNote= await DocumentsRepository.getDocumentRepository(idUser, idDocuments)
    
    if(!dataNote|| !dataNote.title ){
        const erro:IError = {code: "not-found", details: "Document does not exist or does not belong to the user."}; 
        throw erro
    }

    return dataNote}


export async function deleteDocumentservice(idUser: number, idDocuments: number){

    const dataNote= await DocumentsRepository.deleteDocumentRepository(idUser, idDocuments)

    if(dataNote.count===0){
        const erro:IError = {code: "not-found", details: "Document does not exist or does not belong to the user."}; 
        throw erro
    }
    return
}
