import { Router } from "express";
import authRouter from "./authRouter";
import credentialsRoute from "./credentialsRoute";
import notesRoute from "./notesRoute";
import WifisRoute from "./wifisRoute";
import CardsRoute from "./cardssRoute";

const router = Router()


router.use(authRouter)
router.use(credentialsRoute)
router.use(notesRoute)
router.use(WifisRoute)
router.use(CardsRoute)


export default router