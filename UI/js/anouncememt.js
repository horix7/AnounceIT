const anouncementOutput = document.querySelector('.anouncement')
let outputInfo = localStorage.inputValues.split(',')
let status = 'pending'
console.log(outputInfo.length)
let runIt = outputInfo.length / 4
for (let x = 0; x< runIt; x++) {
    anouncementOutput.innerHTML =  ` 
    <div class = "anouncement_form" id="front_anouncement"><div>
        ${outputInfo[0]}
    </div>
    <div class="status" id="status"> 
    ${status}
    </div>
    </div>
        <div class = "inline_div"> ${outputInfo[1]}
        </div>  
    <div>
        <i class="fa fa-ellipsis-v" id="readMore"></i>
        <!-- fa fa-ellipsis-v -->
    </div>
    ` 
}