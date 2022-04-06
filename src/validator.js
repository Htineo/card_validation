const validator = {
    isValid: function (){
    
        let cifra= creditCardNumber.value.split("");
        let suma = 0

        for(i=0; i<cifra.length; i=i+2) {
            cifra[i] = cifra[i]*2;
            if(cifra[i]>9){
               
                cifra[i] = Math.floor(cifra[i]/10)+ (cifra[i]%10);
                console.log('IIII',cifra[i]);
            }
            
        }

        for (let j = 0; j < cifra.length; j++) {
            
            suma = suma + Number(cifra[j]);
            
        }

        if (suma%10===0){
            console.log('cifraaaaa', cifra, suma);    
            alert("Tarjeta validada")
        }
        else{
            alert("Tarjeta no válida")
        }
    },

        maskify: function(){
           document.getElementById("creditCardNumber").innerHTML= asterisco.repeat(creditCardNumber.length-4) + creditCardNumber.value.slice(creditCardNumber.length-4,creditCardNumber.length);
           document.getElementById("expiration").innerHTML= expiration.value;
           document.getElementById("cvv").innerHTML= cvv.value;
           document.getElementById("fullName").innerHTML= nameCard.value + " " + lastname.value;

    }
}
// let cifra0 = Number(cifra[i].toString()[0]);
// let cifra1 = Number(cifra[i].toString()[1]);

// cifra[i]= cifra0 + cifra1;
// console.log('IIII',cifra[i]);