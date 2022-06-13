const validator = {
  // ...

  isValid: function (creditCardNumber) {

    const numberReverse =creditCardNumber.toString().split("").reverse().join("");
    let addNumber = 0 ;
    

    for (let i = 0; i < numberReverse.length; i++){
      let digit=parseInt(numberReverse[i]);
        if(i % 2 == 1){
          if((digit *=2) > 9){
            digit -= 9;
          }
        }
          addNumber += digit;
          }
        return addNumber % 10 === 0 ;
 },
      
  maskify: function(creditCardNumber){
    
      //separrar array con split
      let  newString = creditCardNumber.split("");
      //console.log(newString);

    //desde el final,para extraer los ultios 4 digitos de array

    let lastFourDigit = newString.slice(-4);
    
  // extraer desde el inicio hasta antes de los 4 digitios finales

      let newDigit= newString.slice(0,-4);
      newDigit.map((e, index) => {
      newDigit[index] = "#";
      });
     return newDigit.join("") + lastFourDigit.join("");
       


    
  }
};





 
 
export default validator;
