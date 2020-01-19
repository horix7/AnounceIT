const loginName = document.querySelector("#sign_in_inputs_name")
const loginPass  = document.querySelector("#sign_in_inputs_pass")
const loginBtn = document.querySelector("#sign_in_btn")

function loginFun() {
    if (loginName.value == localStorage.userName && loginPass.value == localStorage.password) {
        location.href = '/AnounceIT/UI/html/home.html'
        console.log(loginName.value, ' => ', localStorage.userName)
    } else {
        console.log('no')
    }
}

loginBtn.addEventListener('click', () => {
    loginFun()
})

loginPass.addEventListener('keydown', (e) => {
    if ( e.keyCode === 13 ) {
        loginFun(e)
    }
})
