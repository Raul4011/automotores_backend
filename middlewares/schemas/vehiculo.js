const Joi = require('joi');

const schema = Joi.object({
        marca : Joi.string().required(),
        modelo : Joi.string().required(),
        anio : Joi.number().integer().min(1900).max(2013).required(),
        tipo: Joi.string().required(),
        motor : Joi.string().required(),
        imagen : Joi.string().required(),
        precioCompra : Joi.string().required(),
        patente : Joi.string().required(),
        color : Joi.string().required()
    })

module.sports = schema