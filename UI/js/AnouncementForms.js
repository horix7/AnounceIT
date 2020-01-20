const anouncementName = document.querySelector("#anouncement_inputs_name")
const anouncementStartDate = document.querySelector("#anouncement_inputs_Sdate")
const anouncementEndtDate = document.querySelector("#anouncement_inputs_Edate")
const anouncementDescription = document.querySelector("#anouncement_inputs_Description")
// const anouncementStatus = document.querySelector()
const submitBtn = document.querySelector('#submit_btn')

console.log('working')
let AnouncememntInfo; 
let counter = 0

submitBtn.addEventListener( 'click', () => {
    AnouncememntInfo = [anouncementName.value , anouncementStartDate.value , anouncementEndtDate.value , anouncementDescription.value];
    console.log(AnouncememntInfo)
    AnouncememntInfo.forEach(n => {
        if (n == "") {
            counter++
        } 
    })
    console.log(counter, AnouncememntInfo.length)
    
})

if (counter == AnouncememntInfo.length) {
    console.log('the matches ', counter, AnouncememntInfo.length)
}