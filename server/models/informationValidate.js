import { object, number, string, boolean, date, validate } from 'joi';


const validates = {
    
    schemas:{   UserSchema:object().keys({
                            id:number().integer().required(),
                            email: string().email().required(),
                            firstName : string().min(3).max(15).required(), 
                            lastName : string().min(3).max(15).required(),
                            phoneNumber: number().min(10).required(),
                            address: string().required(),
                            password: string().min(5).required(),
                            is_admin: boolean().required()
                        }).options({abortEarly : false}),
             
                AnouncementSchema:object().keys({
                            id:number().integer().required(),
                            status:string().valid(['pending','accepted','declined','active','deactive']),
                            text:string().required(),
                            starts:date().required(),
                            ends:date().required()
                        }).options({abortEarly : false}),
                changeAnnouncement:object().keys({
                            id:number().integer(),
                            status:string().valid(['pending','accepted','declined','active','deactive']),
                            text:string(),
                            starts:date(),
                            ends:date()
                        }).options({abortEarly : false})
                                   },
        inputsValidator: (inputs) => {
            return (req, res, next) => {
                validate(req.body, inputs, (err, result) => {
                    if (err) {
                        res.status(400).json({
                            "message": "please fill in all required information"
                        })
                    } else {
                        next()
                    }
                })
            }
         }


                                

}

export default  validates;

