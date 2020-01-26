const anouncementInfo = require('../models/userAnouncement')

const anouncementEnds = {
    createAnounment(req, res) {
        let announcement = anouncementInfo.createAnounce(req.body)
        return res.status(201).json({
            "status":"success",
            "data":announcement
        });

    }
}


module.exports = anouncementEnds