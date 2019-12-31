var email = document.getElementById('email')
var name = document.getElementById('name')
var surname = document.getElementById('surname')
var pass1 = document.getElementById('pass1')
var pass2 = document.getElementById('pass2')

var a = document.querySelectorAll('.info-container .success-message')
console.log(a)

if(email.includes("@")){
    document.querySelectorAll('.info-container .success-message').innerHTML = "Hurra"
} else{
    document.querySelectorAll('.info-container .success-message').innerHTML = "Email musi posiadać znak @"
}

if(name.length < 6){
    document.querySelectorAll('.info-container .success-message').innerHTML = "Hurra"
} else{
    document.querySelectorAll('.info-container .success-message').innerHTML =  "Twoje imię jest za krótkie"
}

if(surname.length < 6){
    document.querySelectorAll('.info-container .success-message').innerHTML = "Hurra"
} else{
    document.querySelectorAll('.info-container .success-message').innerHTML =  "Twoje nazwisko jest za krótkie"
}

if(pass1 === pass2 && (pass1 == "" || pass2 == "")){
    document.querySelectorAll('.info-container .success-message').innerHTML = "Hurra"
} else{
    document.querySelectorAll('.info-container .success-message').innerHTML =  "Hasła nie są takie same lub puste"
}