import { Router } from "express";
import {postWifisController, getWifisController, deleteWifisController, getidWifisController} from "../controllers/WifisController";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { WifisSchemas } from "../schemas/WifisSchemas";


const WifisRoute = Router()

WifisRoute.post('/wifis', validationsMiddleware(WifisSchemas), verifyTokenMiddleware ,postWifisController)

WifisRoute.get('/wifis',verifyTokenMiddleware, getWifisController)

WifisRoute.get('/wifis/:idcredential',verifyTokenMiddleware, getidWifisController)

WifisRoute.delete('/wifis/:idcredential',verifyTokenMiddleware, deleteWifisController)

export default WifisRoute