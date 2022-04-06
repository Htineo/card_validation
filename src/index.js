let creditCardNumber = document.getElementById("cardNumber");
let expiration = document.getElementById("expirationDate");      
let cvv = document.getElementById("cvvNumber");
let nameCard = document.getElementById("nameCard");
let lastname = document.getElementById("lastnameCard");
const asterisco ="#";

function validation (){ 
    if(creditCardNumber.length=16){
    validator.isValid()
    validator.maskify()
    }
    else{
        alert("No es posible validar")
        document.getElementById("creditCardNumber").innerHTML= creditCardNumber.value;
        document.getElementById("expiration").innerHTML= expiration.value;
        document.getElementById("cvv").innerHTML= cvv.value;
        document.getElementById("fullName").innerHTML= nameCard.value +" "+ lastname.value;
    }
    
}
