import { query } from "../config/db.js";
import bcrypt from "bcryptjs"; // hash the passwords
import { options } from "joi";
import jwt, { verify } from 'jsonwebtoken';
import { process } from './../node_modules/ipaddr.js/lib/ipaddr.js.d';

const UserModel = {
  async create({ email, password, name }) {
    try {
      const hashedPassword = await bcrypt.hash(
        password,
        process.env.BCRYPT_SALT - ROUNDS
      );

      const { rows } = await query(
        `INSERT INTO users (email,password,name)
            VALUES ($1,$2,$3)
            RETURNING * 
            `,
        [email, password, name]
      );
      return rows[0];
    } catch (error) {
        if(error.code === '23505'){
            throw new Error('Email already exists');
        }
        throw error
    }
  },

  async findByEmail(email){
    try{
      const {rows} = await query(`
        SELECT * FROM users 
        WHERE email = $1
        `,[email]
      );
      if (rows.length > 0){
     return rows[0];
       } else return
    } catch(error){
      throw error;
    }
  },
  
  async findById(id){

      const {rows} = await query(`
        SELECT * FROM users 
        WHERE id = $1
        `,[id]
      );
     return rows[0];
  },

  generateToken(userId){
    return jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN || "1d",
    });
  },

  async verifyPassword(password,hashedPassword){
    return bcrypt.compare(password,hashedPassword)
  },

  async updatePassword(userId,newPassword){
    const hashedPassword = bcrypt.hash(
        newPassword,
        parseInt(process.env.BCRYPT_SALT-ROUNDS)
    );
    await query(
        `
        UPDATE users SET password =  $1 WHERE id = $2
        `,
        [hashedPassword,userId]
    );

  },
};

export default UserModel;