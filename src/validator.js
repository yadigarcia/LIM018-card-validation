const validator = {
  // ...

isValid: function (creditCardNumber) {

    const numberReverse =creditCardNumber.toString().split("").reverse().join("");
    let addNumber = 0 ;
    

     for (let i = 0; i < numberReverse.length; i++){
      let digit=parseInt(numberReverse[i]);
         if(i % 2 == 0){
           if((digit *=2) > 9){
             digit -= 9;
           }
         }
          addNumber += digit;
          }
        return addNumber % 10 === 0 ;
     }
    
 , maskify: function(creditCardNumber){
    let encriptNumber;//creditcardNumber con #
    let newArrayNumber= [];

    //separrar array
    let  arrayNumber = creditCardNumber.split("");
      
     arrayNumber.forEach((element, i) => { 
      if (i < arrayNumber.length - 4 ){ 
        element = "#";
      }
      
     // utilizar push para agregar digit al array vacio
      newArrayNumber.push(element);
      encriptNumber= arrayNumber.join("");
    });
   return encriptNumber;
  }
};

export default validator;
