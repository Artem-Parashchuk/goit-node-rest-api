import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Set name for contact',
  }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Please provide a valid email address',
  }),
  phone: Joi.string().optional().messages({
    'string.base': 'Phone number must be a string',
  }),
  favorite: Joi.boolean().optional().messages({
    'boolean.base': 'Favorite must be a boolean value',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().optional().messages({
    'string.base': 'Name must be a string',
  }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Please provide a valid email address',
  }),
  phone: Joi.string().optional().messages({
    'string.base': 'Phone number must be a string',
  }),
  favorite: Joi.boolean().optional().messages({
    'boolean.base': 'Favorite must be a boolean value',
  }),
}).min(1);