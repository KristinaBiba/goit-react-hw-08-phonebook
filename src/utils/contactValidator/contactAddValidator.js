const Joi = require('joi');

export const contactAddValidator = Joi.object({
  contactName: Joi.string().min(3).max(30).required().messages({
    'string.base': `Name should be a type of string`,
    'string.min': `Name must contain min 3 simbols`,
    'string.max': `Name must contain max 30 simbols`,
    'any.required': `Name is a required field`,
  }),
  contactPhone: Joi.string().min(12).max(17).required().messages({
    'string.base': `Phone should contain numbers, "(", ")", "+"`,
    'string.min': `Phone must contain min 12 simbols`,
    'string.max': `Phone must contain max 17 simbols`,
    'any.required': `Phone is a required field`,
  }),
});
