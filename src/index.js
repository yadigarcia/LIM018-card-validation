import validator from './validator.js';
//console.log(validator);

let creditCardNumber = document.getElementById("creditCardNumber");
let btnPay = document.getElementById("btnPay");

btnPay.addEventListener("click",(e) => {
    e.preventDefault();
    
let algLunh = validator.isValid(creditCardNumber.value);
creditCardNumber.value = validator.maskify(creditCardNumber.value);
   if(algLunh === true){
           alert("Procesando Pago")
    } else {
            alert("Tarjeta Invalida, Ingrese otra tarjeta");
    }
    
});
