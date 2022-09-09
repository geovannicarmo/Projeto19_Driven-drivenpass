import joi from "joi";


export  const credentialsSchemas = joi.object({

url: joi.string().uri().required(),
userName: joi.string().required(),
password: joi.string().required(),
title: joi.string().required()
})

