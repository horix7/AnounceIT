import anouncementData from './anouncementData';

function AnouncementInfo () {

        this.createAnounce = (anounce) => {
        
            const anounceData = {
                id:anounce.id,
                owner:anounce.id,
                status:anounce.status||"pending",
                text:anounce.text,
                start_date:anounce.starts,
                end_date:anounce.ends
            }

            anouncementData.push(anounceData)
            return anounceData
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
                    }
                    anounce = newAnounce
                    foundId = false;
                }
            })
            if (foundId) {
                return 'anouncement does not exist'
            }

            return newAnounce
        };

        this.deleteAnounce = (anouncementId) => {
            let idFound = false
            anouncementData.forEach( anounce => {
                if (anouncementId == anounce.id) {
                    anouncementData.splice(anouncementData.indexOf(anounce), 1)
                    idFound = true
                }
            });
            if (idFound) {
                return true 
            }
        }

        this.viewAllAnounce = () => {
            
        }

        this.viewOneAnounce = () => {

        }

        this.getAnounceByStatus = () => {

        }

    
}

module.exports = new AnouncementInfo()