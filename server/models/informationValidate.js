import Joi from 'joi';
    

const validator = {
    
    schemas:{   UserSchema:Joi.object().keys({
                            id:Joi.number().integer().required(),
                            email: Joi.string().required().email(),
                            first_name : Joi.string().min(5).max(15), 
                            last_name : Joi.string().min(5).max(15),
                            phoneNumber: Joi.number().min(10),
                            address: Joi.string(),
                            password: Joi.string(),
                            is_admin: Joi.boolean()
                        }).options({abortEarly : false}),
             
                AnouncementSchema:Joi.object().keys({
                            id:Joi.number().integer().required(),
                            status:Joi.string().valid(['pending','accepted','declined','active','deactive']),
                            text:Joi.string().required(),
                            start_date:Joi.date().required(),
                            end_date:Joi.date().required()
                        }).options({abortEarly : false}),
                changeAnnouncement:Joi.object().keys({
                            id:Joi.number().integer(),
                            status:Joi.string().valid(['pending','accepted','declined','active','deactive']),
                            text:Joi.string(),
                            start_date:Joi.date(),
                            end_date:Joi.date()
                        }).options({abortEarly : false})
                                   },
    valid: (schema)=>{
                return (req,res,next)=>{
                const validInput= Joi.validate(req.body,schema);
                if(validInput.error){
                    return res.status(400).json({
                        message : 'erro has occured'
                      })
                } else {
                      next();
                }}
                }
}


module.exports = validator