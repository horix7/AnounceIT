// const userName = document.querySelector("#sign_in_inputs_name")
// const UserPassword = document.querySelector("#sign_in_inputs_pass")
const newFirstName = document.querySelector("#sign_up_inputs_f1")
const newSecondName = document.querySelector("#sign_up_inputs_f2")
const newUserName = document.querySelector("#sign_up_inputs_f3")
const newPassword1 = document.querySelector("#sign_up_inputs_f4")
const newPassword2 = document.querySelector("#sign_up_inputs_f5")
const submitBtn = document.querySelector("#sign_up_btn")
let userInfo = {};

let array1 = [ newFirstName ,newSecondName,newUserName,newPassword1,newPassword2]
let array = [ newFirstName.value ,newSecondName.value,newUserName.value,newPassword1.value,newPassword2.value]
submitBtn.addEventListener( 'click', () => {
    
    if (newPassword1.value !== newPassword2.value) {
        console.log('password does not match')
    } else {
        console.log('password correct')
    }
    console.log(array)
})


array1.forEach( n => {
    userInfo[n] = array[array1.indexOf(n)]

})

console.log(userInfo)
console.log(array1)
console.log(array)
