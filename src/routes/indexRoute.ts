import { Router } from "express";
import authRouter from "./authRouter";
import credentialsRoute from "./credentialsRoute";
import notesRoute from "./notesRoute";
import WifisRoute from "./wifisRoute";
import CardsRoute from "./cardssRoute";
import documentsRoute from "./documentsRoute";

const router = Router()


router.use(authRouter)
router.use(credentialsRoute)
router.use(notesRoute)
router.use(WifisRoute)
router.use(CardsRoute)
router.use(documentsRoute)


export default router