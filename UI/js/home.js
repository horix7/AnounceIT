const signOutBtn = document.querySelector('#homebtn')
let signedIn = true
signOutBtn.onclick = () => {
    signedIn = false;
    location.href = '/AnounceIT/UI/html/sign_in.html'
}


