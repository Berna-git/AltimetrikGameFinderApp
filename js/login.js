const btnLogin = document.getElementById('btn__login');

btnLogin.addEventListener('click',()=> {
    let inputTextMail = document.getElementById('email__Input');
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputTextMail.value.match(mailformat))
    {       
    //Uppercase (A-Z) and lowercase (a-z) English letters.
    //Digits (0-9).
    // Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    // Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
    } else {
        // inputTextMail.classList.add('.validation_style__err')
        inputTextMail.classList.add('.validation_style__ok')

        // alert("You have entered an invalid email address!");
        return false;
    }
})