import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoute from './routes/authRotes.js';
const app = express();

app.use(helmet());
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders:['Contant Type','Authorization']
})
);

app.use(morgan(process.env.NODE_ENV === "production"? "combined":"dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',)



export default app;
