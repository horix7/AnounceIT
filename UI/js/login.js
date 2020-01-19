const loginName = document.querySelector("#sign_in_inputs_name")
const loginPass  = document.querySelector("sign_in_inputs_pass")
const loginBtn = document.querySelector("#sign_in_btn")

loginBtn.onclick = () => {
    if (loginName.value == localStorage.userName) {
        console.log(loginName.value, ' => ', localStorage.userName)
    } else {
        console.log('no')
    }
}