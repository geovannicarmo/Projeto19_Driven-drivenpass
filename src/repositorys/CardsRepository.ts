import client from "../dbs/posgresPrisma";
import { ICards } from "../types/cardsTypes";

export async function createdCards(dataCards: ICards){

    console.log(dataCards)

    await client.cards.create({
        data: dataCards
    })
}




export async function findByTitleAndId(title: string, idUser: number){

  return await client.cards.findFirst({

        where:{
            AND: {
                    title: title,
                    userId:  idUser 
                }
        }
    })
}


export async function getAllCardsRepository (idUser: number){

    return client.cards.findMany({
        where:{
            userId: idUser
        }
    })
}

export async function getCardsRepository (idUser: number, idCards: number){

    return client.cards.findFirst({
        where:{
            AND: {
                id: idCards,
                userId: idUser
            }
        }
    })
}

export async function deleteCardsRepository (idUser: number, idCards: number){

    return client.cards.deleteMany({
        where:{
            AND: {
                id: idCards,
                userId: idUser
            }
        }
    })
}