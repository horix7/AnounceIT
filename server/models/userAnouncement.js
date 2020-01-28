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

        this.updateAnounce = (anounceChange) => {
            const newAnounce = {
                id: anounceChange.id,
                owner: anounceChange.id,
                status: anounceChange.status,
                text: anounceChange.text,
                start_date: anounceChange.starts,
                end_date: anounceChange.ends
            }
            return newAnounce
        };

        this.deleteAnounce = () => {

        }

        this.viewAllAnounce = () => {

        }

        this.viewOneAnounce = () => {

        }

        this.getAnounceByStatus = () => {

        }

    
}

module.exports = new AnouncementInfo()