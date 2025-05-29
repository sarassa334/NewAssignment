import app from './app.js';
import dotenv from "dotenv";

const PORT = process.env.PORT || "5000";
const ENV = process.env.NODE_ENV || "5000";

dotenv.config();

app.listen(PORT,()=>{
    console.log(`server is running on port ${ENV} mode on port ${PORT}`);
});