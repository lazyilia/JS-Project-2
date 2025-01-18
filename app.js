let $ = document
let nameError = $.getElementById('name-error')
let phoneError = $.getElementById('phone-error')
let emailError = $.getElementById('email-error')
let messageError = $.getElementById('message-error')
let submitError = $.getElementById('submit-error')


let contactName = $.getElementById('contact-name')
function validateName(){
    let name = contactName.value

    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
    }else{
    nameError.innerHTML = 'valid'}
}


let contactPhone = $.getElementById('contact-phone')

function validatePhone(){
    let phone = contactPhone.value

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required'
    }else if(isNaN(phone)){
        phoneError.innerHTML = 'Numbers Only!'

    }
    else if(phone.length !== 11){
        phoneError.innerHTML = 'phone is invalid'
    }else{
         phoneError.innerHTML = 'valid'
    }
}

let contactEmail = $.getElementById('contact-email')
function validateEmail(){
    let email = contactEmail.value

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
    }else if(!email.match(/^[A-Zaz]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid'
    }else{
        emailError.innerHTML = 'valid'
    }
}

let contactMessage = $.getElementById('contact-message')
function validateMessage(){
    let message = contactMessage.value
    let required = 30
    let left = required - message.length

    if(left > 0){
        messageError.innerHTML = left + 'more characters required'
    }else{
        messageError.innerHTML = 'valid'

    }
}

function validateFrom (){

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'fix error to submit'
        setTimeout(function(){submitError.style.display = 'none'},4000)
    }
}