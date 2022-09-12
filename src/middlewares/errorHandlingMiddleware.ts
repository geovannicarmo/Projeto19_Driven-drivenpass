import { Request, Response, NextFunction} from "express";


export default function errorHandlingMiddleware(
    error:IError, 
    req: Request, 
    res: Response, 
    rext: NextFunction){

      console.log(error)

    if(error.code==='conflict'){

      return  res.status(409).send(error.details)
    }

    if(error.code ==='not-found'){

      return  res.status(404).send(error.details)
    }

    if(error.code ==='Unprocessable-Entity'){

      return  res.status(422).send(error.details)
    }



    

    return res.sendStatus(500);
    
}



export interface IError {
    code: string;
    details: string
}