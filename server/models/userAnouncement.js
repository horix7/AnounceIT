import anouncementData from './anouncementData';

class AnouncementInfo {
    constructor() {
        this.createAnounce = (anounce) => {
            const anounceData = {
                id: anounce.id,
                owner: anounce.id,
                status: anounce.status || "pending",
                text: anounce.text,
                start_date: anounce.starts,
                end_date: anounce.ends
            };
            anouncementData.push(anounceData);
            return anounceData;
        };
        this.updateAnounce = (anounceChange, changes) => {
            let newAnounce;
            let foundId = true;
            anouncementData.forEach(anounce => {
                if (anounce.id == anounceChange) {
                    newAnounce = {
                        id: changes.id,
                        owner: changes.id,
                        status: changes.status,
                        text: changes.text,
                        start_date: changes.starts,
                        end_date: changes.ends
                    };
                    anounce = newAnounce;
                    foundId = false;
                }
            });
            if (foundId) {
                return 'anouncement does not exist';
            }
            return newAnounce;
        };
        this.deleteAnounce = (anouncementId) => {
            let idFound = false;
            anouncementData.forEach(anounce => {
                if (anouncementId == anounce.id) {
                    anouncementData.splice(anouncementData.indexOf(anounce), 1);
                    idFound = true;
                }
            });
            if (idFound) {
                return true;
            }
        };
        this.viewAllAnounce = () => {
            return anouncementData;
        };
        this.viewOneAnounce = (anounceID) => {
            let noId = false;
            let oneAnounce;
            anouncementData.forEach(anounce => {
                if (anounceID == anounce.id) {
                    noId = true;
                    oneAnounce = anounce;
                }
            });
            if (noId) {
                return oneAnounce;
            }
            else {
                return "not working";
            }
        };
        this.getAnounceByStatus = (status) => {
            let results = [];
            anouncementData.forEach(anounce => {
                if (anounce.status == status) {
                    results.push(anounce);
                }
            });
            return results;
        };
        this.changeStatus = (anounceId) => {
            let resAnounce;
            anouncementData.forEach(anounce => {
                if (anounce.id == anounceId.id) {
                    anounce.status = anounceId.status;
                    resAnounce = anounce;
                    return anounce;
                }
                else {
                    return 'no';
                }
            });
        };
        this.deleteAnounce = (announceId) => {
            let done;
            anouncementData.forEach(anounce => {
                if (announceId == anounce.id) {
                    done = true;
                    anouncementData.splice(anouncementData.indexOf(anounce), 1);
                }
            });
            if (done) {
                return done;
            }
        };
    }
}

export default new AnouncementInfo()

