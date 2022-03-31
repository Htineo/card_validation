

/**
 * - Obtener los datos del formularios
 * - Monstrar el nombre y apellido en HTML
 * - Crear la funcion de algoritmo de luhn
 * - Mostrar los 4 
 */
function validation ()
{
    getinformation()
   
}

function getinformation()
{
const asterisco ="*"
let number = document.getElementById("card_Number");
document.getElementById("number").innerHTML= asterisco.repeat(12) + number.value.slice(12,16);
let expiration = document.getElementById("expiration_Date");
document.getElementById("expiration").innerHTML= expiration.value;
let cvv = document.getElementById("cvv_Number")
document.getElementById("cvv").innerHTML= cvv.value;
let name_Card = document.getElementById("name_Card");
let lastname = document.getElementById("lastname_Card");
document.getElementById("full_Name").innerHTML= name_Card.value +" "+ lastname_Card.value;
}




