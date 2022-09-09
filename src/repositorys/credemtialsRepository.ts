import client from "../dbs/posgresPrisma";
import {Credentials} from '@prisma/client'

export async function createdCredentils(dataCredentials: Credentials){

    await client.credentials.create({

        data: dataCredentials
    })
}


export async function findByTitleAndId(title: string, idUser: number){

    console.log(idUser)
    console.log(title)

  return await client.credentials.findFirst({

        where:{
            AND: {
                    title: title,
                    userId:  idUser
                    
                    
                }
        }
    })

}