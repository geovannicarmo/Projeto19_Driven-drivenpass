import joi, { boolean } from "joi";

const patterna = "^(((0[123456789]|10|11|12)([/])(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))$"

export  const cardsSchemas = joi.object({

cardName: joi.string().required(),
nuberCard: joi.string().length(16).required(),
securityCode: joi.number().min(100).max(999).required(),
expirationDate: joi.string().pattern(new RegExp(patterna)).required(),
isVirtual: joi.boolean().required(),
password: joi.string().required(),
title: joi.string().required(),
type: joi.valid('ambos', 'debito', 'credito').required()
})

