import anounceModel from '../models/userAnouncement';

const anouncementEnds = {
    createAnounment(req, res) {
        let announcement =   anounceModel.createAnounce(req.body)
        return res.status(201).json({
            "status":"success",
            "data":announcement
        });

    },

    updateAnouncement(req, res) {
        let changeId = anounceModel.updateAnounce(req.params.id, req.body)

        if (changeId == 'anouncement does not exist') {
            return res.status(403).json({
                "status": "error",
                "error": "your id provided does not exist"
            })
        } else {
            return res.status(200).json({
                "status": "success",
                "data": changeId
            })
        }

    },

    getAllAnouncement(req, res) {
        let allanouncements  = anounceModel.viewAllAnounce()
        return res.status(200).json({
            "status": "success",
            "data": allanouncements
        })

    },

    getOneAnouncement(req, res) {
        let oneAnouncement = anounceModel.viewOneAnounce(req.params.id)
        return res.status(200).json({
            "status": "success",
            "data": oneAnouncement
        })
    }
}


export default anouncementEnds