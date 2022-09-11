import joi from "joi";


export  const WifisSchemas = joi.object({

network: joi.string().required(),
password: joi.string().required(),
title: joi.string().required()

})

