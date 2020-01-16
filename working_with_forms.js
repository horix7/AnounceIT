// const userName = document.querySelector("#sign_in_inputs_name")
// const UserPassword = document.querySelector("#sign_in_inputs_pass")
const newFirstName = document.querySelector("#sign_up_inputs_f1")
const newSecondName = document.querySelector("#sign_up_inputs_f2")
const newUserName = document.querySelector("#sign_up_inputs_f3")
const newPassword1 = document.querySelector("#sign_up_inputs_f4")
const newPassword2 = document.querySelector("#sign_up_inputs_f5")
const submitBtn = document.querySelector("#sign_up_btn")
let array;
submitBtn.addEventListener( 'click', () => {
    array = [ newFirstName.value ,newSecondName.value,newUserName.value,newPassword1.value,newPassword2.value]
    if (newPassword1.value !== newPassword2.value) {
        console.log('password does not match')
    } else {
        console.log('password correct')
    }
    console.log(array)
})

function trial() {
    console.log(array)
}