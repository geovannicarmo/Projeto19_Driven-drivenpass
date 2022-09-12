import * as WifisRepository from '../repositorys/WifisRepository'
import { encryptingByCryptr, descryptingByCryptr } from "../utils/utils";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { IWifis } from "../types/WifisTypes";

export async function insertWifisServices(
    dataWifis: IWifis){


    const passwordCrypt: string = encryptingByCryptr(dataWifis.password)
    
    dataWifis.password = passwordCrypt

    const isTitle = await WifisRepository.findByTitleAndId(dataWifis.title, dataWifis.userId)

    if(isTitle){
        const erro:IError = {code: "conflict", details: "There is already Wifi with this title."}; 
        throw erro
    }
    await WifisRepository.createdWifis(dataWifis)

}


export async function getAllWifisService(idUser: number){

    const dataWifis = await WifisRepository.getAllWifisRepository(idUser)

    dataWifis.map((data)=>{

        data.password = descryptingByCryptr(data.password)
    })

    return dataWifis
}

export async function getWifiservice(idUser: number, idWifis: number){

    
    const dataWofi = await WifisRepository.getWifisRepository(idUser, idWifis)
    
    if(!dataWofi){
        const erro:IError = {code: "not-found", details: "Wifi does not exist or does not belong to the user."}; 
        throw erro
    }

    dataWofi.password = descryptingByCryptr(dataWofi.password)

    return dataWofi
}


export async function deleteWifiservice(idUser: number, idWifis: number){

    const dataWofi = await WifisRepository.deleteWifisRepository(idUser, idWifis)

    if(dataWofi.count===0){
        const erro:IError = {code: "not-found", details: "Wifi does not exist or does not belong to the user."}; 
        throw erro
    }
    return
}
