import Joi from 'joi';
    

const validss = {
    
    schemas:{   UserSchema:Joi.object().keys({
                            email: Joi.string().email(),
                            firstName: Joi.string(), 
                            lastName: Joi.string(),
                            address: Joi.string(),
                            phoneNumber: Joi.number(),
                            password: Joi.string().min(5),
                            is_admin: Joi.boolean()
                            }).options({abortEarly : false}),
             
                        AnouncementSchema:Joi.object().keys({
                            text:Joi.string().required(),
                            starts:Joi.date(),
                            ends:Joi.date()
                        }).options({abortEarly : false}),
                        changeAnnouncement:Joi.object().keys({
                            id:Joi.number().integer().required(),
                            status:Joi.string().valid(['pending','accepted','declined','active','deactive']),
                            text:Joi.string(),
                            starts:Joi.string(),
                            ends:Joi.string()
                        }).options({abortEarly : false})
                                   },

             inputsValids:(schema)=>{
                return (req,res,next)=>{
                Joi.validate(req.body,schema, (err, results) => {
                    if(err){
                        res.status(400).json({
                            "message": `solve this  ${err}`
                        })
                    }
                    else{
                          next();
                    }
                });
            }
         }
}

module.exports  = validss
