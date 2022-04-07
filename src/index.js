let creditCardNumber = document.getElementById("cardNumber");
let expiration = document.getElementById("expirationDate");      
let cvv = document.getElementById("cvvNumber");
let nameCard = document.getElementById("nameCard");
let lastname = document.getElementById("lastnameCard");
const asterisco ="#";

function validation (){ 
    if(creditCardNumber.value){
    validator.isValid()
    validator.maskify()
    }
    else{
        alert("No es posible validar")
    }
    
}
