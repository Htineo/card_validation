function validation (){ 
    let creditCardNumber = document.getElementById("cardNumber").value;
    let expiration = document.getElementById("expirationDate").value;      
    let cvv = document.getElementById("cvvNumber").value;
    let nameCard = document.getElementById("nameCard").value;
    let lastname = document.getElementById("lastnameCard").value;

    console.log("AAA", creditCardNumber)
    if(creditCardNumber){
        const valid = validator.isValid(creditCardNumber)
        if(valid === true){
            document.getElementById("validMessage").style.display = "grid";
            document.getElementById("invalidMessage").style.display = "none";
            document.getElementById("creditCardNumber").innerHTML = validator.maskify(creditCardNumber)
            document.getElementById("expiration").innerHTML = expiration;
            document.getElementById("cvv").innerHTML = cvv;
            document.getElementById("fullName").innerHTML = nameCard + " " + lastname;
        }
        else{
            document.getElementById("invalidMessage").style.display = "grid";
            document.getElementById("validMessage").style.display = "none";
        }
    }
    else{
        alert("No es posible validar")
    }
    
}