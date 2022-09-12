import joi from "joi";

const patterna = "^(((0[123456789]|10|11|12)([/])(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))$"

export  const doscumentsSchemas = joi.object({

name: joi.string().required(),
number:joi.number().required(),
validateDate: joi.string().pattern(new RegExp(patterna)).required(),
issueDate: joi.string().pattern(new RegExp(patterna)).required(),
title: joi.string().required(),
type: joi.valid('rg', 'cnh').required(),
issuer: joi.string().required()
})

