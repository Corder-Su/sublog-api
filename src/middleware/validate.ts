import { validationResult, buildCheckFunction, ValidationChain, Location } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose"; 


/**
 * create middleware function for validate chains
 * @param validations ValidationChain[] 
 * @returns 
 */ 
const validate = (validations : ValidationChain[]) => {
    return async (req : Request, res : Response, next : NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if(errors.isEmpty()){
            next()
            return 
        }

        res.status(400).json({
            errors : errors.array()
        })
    }   
}

/**
 * 
 * @param location Location[]
 * @param field  string | string[] | undefined
 */
const isValidMongoObjectId = (location : Location[], field : string | string[] | undefined) => {
    return buildCheckFunction(location)(field).custom(value => {
        if(!isValidObjectId){
            return Promise.reject(`${field} 不是一个有效的ObjectId`)
        }
    })
}

export {
    validate,
    isValidMongoObjectId
}