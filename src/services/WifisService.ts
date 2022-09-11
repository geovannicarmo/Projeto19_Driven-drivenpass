import * as WifisRepository from '../repositorys/WifisRepository'
import { encryptingByCryptr, descryptingByCryptr } from "../utils/utils";
import { IError } from "../middlewares/errorHandlingMiddleware";
import { IWifis } from "../types/WifisTypes";

export async function insertWifisServices(
    dataWifis: IWifis){

    // const dataUser = await findUserByIdService(dataWifis.userId)

    const passwordCrypt: string = encryptingByCryptr(dataWifis.password)
    
    dataWifis.password = passwordCrypt

    const isTitle = await WifisRepository.findByTitleAndId(dataWifis.title, dataWifis.userId)

    if(isTitle){
        const erro:IError = {code: "conflict", details: "There is already credential with this title."}; 
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

    
    const dataCredential = await WifisRepository.getWifisRepository(idUser, idWifis)
    
    if(!dataCredential){
        const erro:IError = {code: "not-found", details: "Credential does not exist or does not belong to the user."}; 
        throw erro
    }

    return dataCredential
}


export async function deleteWifiservice(idUser: number, idWifis: number){

    const dataCredential = await WifisRepository.deleteWifisRepository(idUser, idWifis)

    if(dataCredential.count===0){
        const erro:IError = {code: "not-found", details: "Credential does not exist or does not belong to the user."}; 
        throw erro
    }
    return
}
