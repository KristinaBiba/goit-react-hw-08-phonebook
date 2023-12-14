const Joi = require('joi');

export const userRegisterValidator = Joi.object({
  userName: Joi.string().min(3).max(30).required().messages({
    'string.base': `Name should be a type of string`,
    'string.min': `Name must contain min 3 simbols`,
    'string.max': `Name must contain max 30 simbols`,
    'any.required': `Name is a required field`,
  }),
  userEmail: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua'] },
    })
    .required()
    .messages({
      'string.email': `Email should contain @ and current domen (com, net or ua)`,
      'string.email.tlds': `Email should in com, net or ua domen`,
      'any.required': `Email is a required field`,
    }),
  userPassword: Joi.string()
    .min(6)
    .max(300)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,300})/
    )
    .required()
    .messages({
      'string.base': `Password should be a type of string`,
      'string.min': `Password must contain min 6 simbols`,
      'string.max': `Password must contain max 300 simbols`,
      'string.pattern.base': `Password must contain a number, a letter in lower and upper case and symbol !@#$%^&*`,
      'any.required': `Password is a required field`,
    }),
});
