import pg from "pg";
import dotenv from "dotenv";
import { query } from './db';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({ // حتى نعمل كويريز عالداتابيس البول
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: true }
      : false,
});

pool.connect().then(()=>{
    console.log("Database connected");
})

//للسيكيوريتي مهم

export const query = (text,params) => pool.query(text,params); //function 
export default pool;

//شكل تاني للفنكشن عشان نفهم
// function query(text,params){
//     return pool.query(text,params)
// }
