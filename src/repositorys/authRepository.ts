import client from "../dbs/posgresPrisma";
import { IError } from "../middlewares/errorHandlingMiddleware";


export async function createdUser(dataSignin: ISigin){


     try{
        await client.users.create({

            data: dataSignin

        })
    }catch(error: any){
        if(error.code==='P2002'){
            const error:IError =  {code: "conflict", details: "email already cadasted"};  
            throw error
        }
        throw {code: "internal-server-error", details: "Internal Server Error"}; 
    }
}

export async function findByEmail(email: string){

    return  await client.users.findFirst({

        where:{
            email
        }
    })

}


export interface ISigin 
{
    email: string,
    password: string
}


