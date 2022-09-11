import client from "../dbs/posgresPrisma";
import { IWifis } from "../types/WifisTypes";

export async function createdWifis(dataWifis: IWifis){

    await client.wifis.create({
        data: dataWifis
    })
}

export async function findByTitleAndId(title: string, idUser: number){

  return await client.wifis.findFirst({

        where:{
            AND: {
                    title: title,
                    userId:  idUser 
                }
        }
    })
}


export async function getAllWifisRepository (idUser: number){

    return client.wifis.findMany({
        where:{
            userId: idUser
        }
    })
}

export async function getWifisRepository (idUser: number, idWifis: number){

    return client.wifis.findMany({
        where:{
            AND: {
                id: idWifis,
                userId: idUser
            }
        }
    })
}

export async function deleteWifisRepository (idUser: number, idWifis: number){

    return client.wifis.deleteMany({
        where:{
            AND: {
                id: idWifis,
                userId: idUser
            }
        }
    })
}