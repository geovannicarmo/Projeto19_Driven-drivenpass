import express from 'express'
import "express-async-errors"
import cors from 'cors'
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware'
import dotenv from 'dotenv'
import router from './routes/indexRoute';
dotenv.config()


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlingMiddleware);


const PORT = process.env.PORT || 5009

app.listen(PORT, ()=>console.log(`server run in port ${PORT}`))