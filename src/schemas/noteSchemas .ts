import joi from "joi";


export  const noteSchemas = joi.object({

    text: joi.string().max(1000).required(),
title: joi.string().max(50).required()
})

