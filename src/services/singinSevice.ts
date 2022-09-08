import { ISigin } from "../repositorys/authRepository"
import * as authRepository from '../repositorys/authRepository'
import { IError } from "../middlewares/errorHandlingMiddleware"
import bcrypt from 'bcrypt' 
import jwt from 'jsonwebtoken'


export  async function singinSevice(dataSignin: ISigin){
    
    const saltRounds = 10
    const passwordCrypt = bcrypt.hashSync(dataSignin.password, saltRounds)

    console.log(passwordCrypt)

    dataSignin.password = passwordCrypt
    const resRespository = await authRepository.createdUser(dataSignin)
    
    return "created"
}


export  async function loginService(dataSignin: ISigin){

   const dataUserRepository = await authRepository.findByEmail(dataSignin.email)

   console.log(dataUserRepository)

   if(!dataUserRepository){
    const erro:IError = {code: "not-found", details: "email not cadaster"}; 
    throw erro
}

const veriryPassword = bcrypt.compareSync(dataSignin.password, dataUserRepository.password)

if(!veriryPassword){
    const erro:IError = {code: "not-found", details: "email ou senha errada"}; 
    throw erro
}

const iduser = dataUserRepository.id;
const SECRET = process.env.SECRET
const config = { expiresIn: 60 * 60 * 2 }

if(SECRET===undefined){
    const erro:IError = {code: "internal-server-error", details: "Internal Server Error"}; 
    throw erro
}

const token = jwt.sign({iduser}, SECRET, config)

   return {token}
}


