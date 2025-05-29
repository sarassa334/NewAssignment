// 

import Joi from "joi";

export const registerSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
).message('Password must contain at least...')
.required(),
});

export const loginScema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().required(),
})










