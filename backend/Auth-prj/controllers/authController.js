import UserModel from "../models/usersModel.js";
import { registerSchema } from "../utils/validation.js";
const AuthController = {
  async register(req, res, next) {
    try {
      const { error, value } = registerSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { email, password, name } = value;

      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) throw new Error("Email already in use");

      const newUser = await UserModel.create({ email, password, name });

      const token = UserModel.generateToken(newUser.id);

      res.status(201).json({
        success:true,
        token:token,
        user:{
            id:newUser,
            name:newUser.name,
            email:newUser.email,
        },

      })

    } catch (error) {
        next(error);
    }
  },

//async login (req,res,next)







};

export default AuthController;
