const validator = {
  isValid: function () {
    let cifra = creditCardNumber.value.split("");
    let suma = 0;

    for (i = 0; i < cifra.length; i = i + 2) {
      cifra[i] = cifra[i] * 2;
      if (cifra[i] > 9) {
        cifra[i] = Math.floor(cifra[i] / 10) + (cifra[i] % 10);
        console.log("I", cifra[i]);
      }
    }

    for (let j = 0; j < cifra.length; j++) {
      suma = suma + Number(cifra[j]);
    }

    if (suma % 10 === 0) {
      console.log("CIFRA", cifra, suma);
      document.getElementById("validMessage").style.display = "grid";
      document.getElementById("invalidMessage").style.display = "none";
    } 
    
    else {
      document.getElementById("invalidMessage").style.display = "grid";
      document.getElementById("validMessage").style.display = "none";
    }
  },

  maskify: function () {
    console.log("ingresando a maskify");
    document.getElementById("creditCardNumber").innerHTML = asterisco.repeat(creditCardNumber.value.length - 4) + creditCardNumber.value.slice(creditCardNumber.value.length - 4, creditCardNumber.value.length);
    document.getElementById("expiration").innerHTML = expiration.value;
    document.getElementById("cvv").innerHTML = cvv.value;
    document.getElementById("fullName").innerHTML =
      nameCard.value + " " + lastname.value;
  },
};