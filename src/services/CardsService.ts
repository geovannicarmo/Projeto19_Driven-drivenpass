import * as CardsRepository from '../repositorys/CardsRepository'
import { encryptingByCryptr, descryptingByCryptr } from "../utils/utils";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { ICards } from "../types/cardsTypes";

export async function insertCardsServices(
    dataCards: ICards){

         dataCards.isVirtual = convertForBoolean(dataCards.isVirtual)

    
    dataCards.password  = encryptingByCryptr(dataCards.password)

    dataCards.securityCode  = encryptingByCryptr(dataCards.securityCode)

    const isTitle = await CardsRepository.findByTitleAndId(dataCards.title, dataCards.userId)

    if(isTitle){
        const erro:IError = {code: "conflict", details: "There is already Cards with this title."}; 
        throw erro
    }
    await CardsRepository.createdCards(dataCards)

}


export async function getAllCardsService(idUser: number){

    const dataCards = await CardsRepository.getAllCardsRepository(idUser)

    dataCards.map((data)=>{

        console.log(data)

         data.password = descryptingByCryptr(data.password)
        data.securityCode = descryptingByCryptr(data.securityCode)
    })


    return dataCards
}

export async function getCardservice(idUser: number, idCards: number){

    
    const dataCards = await CardsRepository.getCardsRepository(idUser, idCards)

    
    if(!dataCards || !dataCards.cardName){
        const erro:IError = {code: "not-found", details: "Cards does not exist or does not belong to the user."}; 
        throw erro
    }
    
    dataCards.password = descryptingByCryptr(dataCards.password)
    dataCards.securityCode = descryptingByCryptr(dataCards.securityCode)
    

    return dataCards
}


export async function deleteCardservice(idUser: number, idCards: number){

    const dataCards = await CardsRepository.deleteCardsRepository(idUser, idCards)

    if(dataCards.count===0){
        const erro:IError = {code: "not-found", details: "Cards does not exist or does not belong to the user."}; 
        throw erro
    }
    return
}


function convertForBoolean(data:any){

    if(data.toLowerCase()==='true'){
        return true
    }
    if(data.toLowerCase()==='false'){
        return false
    }
}
