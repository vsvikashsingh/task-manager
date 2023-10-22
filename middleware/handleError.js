import { customAPIError } from "../errors/custom-error.js"

export const handleError = (err, req, res, next)=>{
    if(err instanceof customAPIError){
        res.status(err.statusCode).json({ msg: err.message})
    }
    return res.status(500).json({msg: err})
}