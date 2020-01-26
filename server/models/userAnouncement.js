import anouncementData from './anouncementData';

class anouncementInfo {
    constructor () {
        this.createAnounce = (anounce) => {
            const anounceData = {
                id:anounce.id,
                owner:anounce.id,
                status:anounce.status||"pending",
                text:anounce.text,
                start_date:anounce.starts,
                end_date:anounce.ends
            }

            anounceData.push(anounce)
        };

    }
}