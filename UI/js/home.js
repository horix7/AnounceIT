const signOutBtn = document.querySelector('#homebtn')
let signedIn = true
signOutBtn.addEventListener( 'click' ,() => {
    signedIn = false;
    location.href = '/AnounceIT/UI/html/sign_in.html'
})

console.log('working' , signOutBtn)

let responsive = () =>  {
    let x = document.getElementById("nav");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }
