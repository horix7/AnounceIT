const newFirstName = document.querySelector("#sign_up_inputs_f1")
const newSecondName = document.querySelector("#sign_up_inputs_f2")
const newUserName = document.querySelector("#sign_up_inputs_f3")
const newPassword1 = document.querySelector("#sign_up_inputs_f4")
const phoneNumber = document.querySelector("#sign_up_inputs_f6")
const userAdrress = document.querySelector("#sign_up_inputs_f7")
const newPassword2 = document.querySelector("#sign_up_inputs_f5")
const submitBtn = document.querySelector("#sign_up_btn")
const userType = document.querySelector("#userType")

let userInfo;
let userRefer;
let element;
let moveOn = false;

let signUpInformation;
submitBtn.onclick = () => {

    localStorage.setItem('firstName', newFirstName.value)
    localStorage.setItem('secondName', newSecondName.value)
    localStorage.setItem('userName', newUserName.value)
    localStorage.setItem('password', newPassword1.value)
    localStorage.setItem('phoneNumber', phoneNumber.value)
    localStorage.setItem('userAdress', userAdrress.value)
    localStorage.setItem('userType', 'Advertiser')
    // localStorage.setItem('firstName', newFirstName.value)
    console.log(localStorage)

    if (newPassword1.value !== newPassword2.value) {
        console.log('password doesnot match')
        document.querySelector('.mark').style.border = 'red 1px solid'
        document.querySelector('.message').innerHTML = 'Your password does not match'
        document.querySelector('.message').style.color = 'red'
        // document.querySelector('.message').style.visibilty = 'visible'        


    } else {
        document.querySelector('.message').style.innerHTML = ''     
        document.querySelector('.mark').style.border = 'black 1px solid'       
          
        let checker;
        let check;
        let nonez = [];
        element = [newFirstName, newSecondName, newUserName, newPassword1, phoneNumber, userAdrress, userType]
        userRefer = ['FirstName', 'SecondName','UserName','Password', 'phoneNumber', 'userAdrress', 'userType']
        userInfo = [newFirstName.value, newSecondName.value,newUserName.value,newPassword1.value, phoneNumber.value, userAdrress.value, userType.value]
        userInfo.forEach( n => {
            if ( n == "") {
                check = element[userInfo.indexOf(n)]
                checker =  userRefer[userInfo.indexOf(n)] +  ' was not filled'
            } else if(n !== "") {
               nonez.push(n)
               
            }
        });
        
        console.log(checker)
        console.log(nonez)
        if (nonez.length < userRefer.length) {
            check.placeholder = checker
            check.style.border = 'red 1px solid'
        }
        else if (nonez.length === userRefer.length) {
            signUpInformation = [
                {
                    'FirstName': newFirstName.value,
                    'SecondName': newSecondName.value,
                    'UserName': newUserName.value,
                    'Password': newPassword1.value,
                    'phoneNumber': phoneNumber.value,
                    'userAdrress': userAdrress.value,
                    'userType': 'Advertiser'
                }
            ]

            if ( userType.value == 'Advertiser') {
                location.href = '/AnounceIT/UI/html/home.html'
            } else {
                location.href = '/AnounceIT/UI/html/admin.html'
            }
        }
console.log(moveOn)
    }
}

console.log(moveOn)

