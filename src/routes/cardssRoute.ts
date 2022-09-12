import { Router } from "express";
import {postCardsController, getCardsController, deleteCardsController, getidCardsController} from "../controllers/cardsController";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import validationsMiddleware from "../middlewares/validationsMiddleware";
import { cardsSchemas } from "../schemas/cardsSchemas";


const CardsRoute = Router()

CardsRoute.post('/cards', validationsMiddleware(cardsSchemas), verifyTokenMiddleware ,postCardsController)

CardsRoute.get('/cards',verifyTokenMiddleware, getCardsController)

CardsRoute.get('/cards/:idCard',verifyTokenMiddleware, getidCardsController)

CardsRoute.delete('/cards/:idCard',verifyTokenMiddleware, deleteCardsController)

export default CardsRoute