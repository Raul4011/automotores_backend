

const validation = (schema) =>{
    console.log(schema)
    let JoiValidation = (req,res,next)=>{
        let {error} = schema.validate(req.body)
        //console.log(error);
    }
    return JoiValidation
}


module.exports = validation