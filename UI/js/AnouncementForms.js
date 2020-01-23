const anouncementName = document.querySelector("#anouncement_inputs_name")
const anouncementStartDate = document.querySelector("#anouncement_inputs_Sdate")
const anouncementEndtDate = document.querySelector("#anouncement_inputs_Edate")
const anouncementDescription = document.querySelector("#anouncement_inputs_Description")


const submitBtn = document.querySelector('#submit_btn')
let inputInfo = [anouncementName, anouncementDescription, anouncementStartDate,anouncementEndtDate]
let inputValues = []
let inputDict = {}
let anouncementInformation;
submitBtn.addEventListener('click', () => {
    inputValues = []

    inputInfo.forEach(n => {

        console.log(n.value)
        if (n.value == "") {

            inputInfo[inputInfo.indexOf(n)].style.border = '1px red solid'
           
        } else {
            inputValues.push(n.value)
            inputInfo[inputInfo.indexOf(n)].style.border = '1px grey solid'
        }

    })

    if (inputValues.length  == inputInfo.length) {

        inputDict['name'] = anouncementName.value;
        inputDict['description'] = anouncementDescription.value;
        inputDict['starting'] = anouncementStartDate.value;
        inputDict['ending'] = anouncementEndtDate.value;

        localStorage.setItem('inputValues', inputValues)
        localStorage.setItem('inputDict', inputDict)
        localStorage.setItem('anouncementName', anouncementName.value)
        localStorage.setItem('anouncementDescription', anouncementDescription.value)
        localStorage.setItem('anouncementStarting', anouncementStartDate.value)
        localStorage.setItem('anouncementEnding', anouncementEndtDate.value)

        anouncementInformation = 
            {
                'anouncemtName':  anouncementName.value,
                'anouncementDescription': anouncementDescription.value,
                'anouncementStarting': anouncementStartDate.value,
                'anouncementEnding': anouncementEndtDate.value
            }
        

        console.log(anouncementInformation)
        console.log(inputDict)

        location.href = '/AnounceIT/UI/html/Anouncement.html'
    }
    
})

 