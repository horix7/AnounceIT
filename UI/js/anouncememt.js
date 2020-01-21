const anouncementOutput = document.querySelector('.anouncement')
let outputInfo = localStorage.inputValues.split(',')
let status = 'pending'

const moreBtn = document.querySelector('.more')

console.log(outputInfo.length)
let runIt = outputInfo.length / 4
for (let x = 0; x< runIt; x++) {
    anouncementOutput.innerHTML =  ` 
    <div class = "anouncement_form" id="front_anouncement"><div>
    ${localStorage.anouncementName} 
    </div>
    <div class="status" id="status"> 
    ${status}
    </div>
    </div>
        <div class = "inline_div"><div> ${localStorage.anouncementDescription}  </div>
            <div>
            <span class="start"><i class="fa fa-dot-circle-o" aria-hidden="true" id = "dot"></i> Starts ${localStorage.anouncementStarting}</span>
            <span class="end"><i class="fa fa-dot-circle-o" aria-hidden="true" id = "dot"></i> Ends ${localStorage.anouncementEnding}</span> 
            </div>
        </div> 
        
    <div>
        <i class="fa fa-ellipsis-v more" id="readMore" onclick = "show()"></i>
        <i class="fa fa-eye see"  id="readMore" onclick = "viewAll()"></i>
        <i class="fa fa-edit edit" id="readMore"  onclick = "editAnouncement()"></i>
        <i class="fa fa-trash-o delete" id="readMore"  onclick = "deleteAnouncement()"></i>

    </div>

    ` 
}


let show = () => {
   if (document.querySelector(".see").style.visibility == 'hidden') {
      document.querySelector(".see").style.visibility = 'visible'
   document.querySelector(".edit").style.visibility = 'visible'
   if (localStorage.userType == 'admin') {
      document.querySelector(".delete").style.visibility = 'visible'
   }
   } else {
      document.querySelector(".see").style.visibility = 'hidden'
   document.querySelector(".edit").style.visibility = 'hidden'
   document.querySelector(".delete").style.visibility = 'hidden'
   }

}
const anounceName = document.querySelector('.anounceName')
const anounceDescription = document.querySelector('.AnounceDescription')
const anounceSdate = document.querySelector('.Sdate')
const anounceEdate = document.querySelector('.Edate')
const anounceStatus = document.querySelector('.status')


const viewAll = () => {
   location.href = '#viewAnouncement';
   anounceName.innerHTML = localStorage.anouncementName;
   anounceDescription.innerHTML = localStorage.anouncementDescription;
   anounceStatus.innerHTML = 'status: ' + ' Pending'
   anounceSdate.innerHTML = '  Starts At: ' + localStorage.anouncementStarting
   anounceEdate.innerHTML = '  Ends At: ' + localStorage.anouncementEnding

}

const changeBtn = document.querySelector("#changeAnouncement")
const changeName = document.querySelector("#newName")
const changeDescription = document.querySelector("#newDescription")
const changeSdate = document.querySelector("#Sdate")
const changeEdate = document.querySelector("#Edate")



const editAnouncement = () => {
   location.href = '#editElement'
   changeName.value = localStorage.anouncementName
   changeDescription.value = localStorage.anouncementDescription
   changeSdate.value = localStorage.anouncementStarting
   changeEdate.value = localStorage.anouncementEnding

   changeBtn.addEventListener('click', () => {
      localStorage.anouncementName =  changeName.value;
      localStorage.anouncementDescription = changeDescription.value;
      localStorage.anouncementStarting = changeSdate.value;
      localStorage.anouncementEnding = changeEdate.value;
      location.href = '/AnounceIT/UI/html/Anouncement.html'
   })
   
}

const deleteMessage = document.querySelector('.deleteName')
const deleteAnouncement = () => {
   location.href = '#deleteAnouncement'
   if (localStorage.userType == 'Advertiser') {
      deleteMessage.innerHTML = 'Advertizer cant delete the Anouncement'
   }
}
