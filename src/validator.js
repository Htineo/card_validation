const validator = {
  isValid: function (creditCardNumber) {
    let cifra = creditCardNumber.split("");
    let suma = 0;
    console.log('creditCardNumber', cifra)

    for (let i = 0; i < cifra.length ; i = i + 2) {
      cifra[i] = cifra[i] * 2;
      console.log("cifra par por dos", cifra[i]);
      console.log("length", cifra.length);
      if (cifra[i] > 9) {
        cifra[i] = Math.floor(cifra[i] / 10) + (cifra[i] % 10);
        console.log("suma de cifras mayores a 9", cifra[i]);
        console.log("resultado", cifra);
      }
    }

    for (let j = 0; j < cifra.length; j++) {
      suma = suma + Number(cifra[j]);
      console.log("suma", cifra[j]);
    }
    console.log("SUMAAA", cifra, suma);

    if (suma % 10 === 0) {
      console.log("CIFRA", cifra, suma);
      return true
    } 

  },

  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4){
    return creditCardNumber
    }

    else {
    let encryption = "#".repeat(creditCardNumber.length - 4) + creditCardNumber.slice(creditCardNumber.length - 4, creditCardNumber.length);
    return encryption
    }
  }
}

// export default validator;