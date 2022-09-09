import { Request, Response } from "express";
import {singinSevice, loginService} from "../services/authSevice";


export  async function singinController(req: Request, res: Response){

    const resSevice = await  singinSevice(req.body)

    return res.send(resSevice)

}



export  async function loginController(req: Request, res: Response){

    const resSevice = await  loginService(req.body)

    return res.send(resSevice)

}