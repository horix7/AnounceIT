import anounceModel from '../models/userAnouncement';
import checkToken from '../models/userData'
import UserType from 'jwt-decode'

const anouncementEnds = {
    createAnounment(req, res) {

        if (checkToken.token == undefined) {
            return res.status(401).json({
                "status": "error",
                "error": "you are not signed in the system"
            })
        } else if (UserType(checkToken.token).is_admin) {
            return res.status(403).json({
                "status": "error",
                "error": "you can not post the anouncement"
            })
        }
        else {
        let announcement =   anounceModel.createAnounce(req.body)
        return res.status(201).json({
            "status":"success",
            "data":announcement
        });
    }

    },

    updateAnouncement(req, res) {
        let changeId = anounceModel.updateAnounce(req.params.id, req.body)
        if (checkToken.token == undefined) {
            return res.status(401).json({
                "status": "error",
                "error": "you are not signed in the system"
            })
        }
        else if (changeId == 'anouncement does not exist') {
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
        if (checkToken.token == undefined) {
            return res.status(401).json({
                "status": "error",
                "error": "you are not signed in the system"
            })
        }
        else {
            let allanouncements  = anounceModel.viewAllAnounce()
            return res.status(200).json({
                "status": "success",
                "data": allanouncements
            })
        }

    },

    getOneAnouncement(req, res) {
        let oneAnouncement = anounceModel.viewOneAnounce(req.params.id)
        return res.status(200).json({
            "status": "success",
            "data": oneAnouncement
        })
    },

    getAnounceByStatus(req, res) {
        let sortedAnounce = anounceModel.getAnounceByStatus(req.params.status)

        return res.status(200).json({
            "status": "success",
            "data":  sortedAnounce
        })
    },

    changeAnounceStatus(req, res) {
        let newStatus = anounceModel.changeStatus(req.body);
        if (newStatus == "no") {
            return res.status(403).json({
                "status": "error",
                "error": " invalid id"
            })
        } else {
            return res.status(200).json({
                "status": "success",
                "data": newStatus
            })
        }
    },

    deleteAnouncement(req, res) {
        let deleteAnnounce = anounceModel.deleteAnounce(req.params.id)
        if (deleteAnnounce) {
            return res.status(200).json({
                "status": "success",
                "message": "delete done successfully " 
            })
        } else {
            return res.status(403).json({
                "status": "error",
                "error": "invalid id" 
            })
        }
    }
}


export default anouncementEnds
