
let ATMnumber = [1, 2, 3, 4, 5, 6, 7, 9, ]

let  cardlength = numbers.length
let visacard = 

 

if (ATMnumber(0) ==4 && numbers.length == 16){
let obj = {
    	issuer: "visa card",
     	validity: "true"
      	
	};
}

else if (ATMnumber(0) ==5 && numbers.length == 16){
let obj = {
    	issuer: "mastercard",
     	validity: "true"
     
        };
}

else if (ATMnumber(0) ==6 && numbers.length == 16){
let obj = {
    	issuer: "Discover",
     	validity: "PASSED"
      
        };
}
else if (ATMnumber(0) ==5 && numbers.length == 15){
let obj = {
    	issuer: "American Express",
     	 validity: "PASSED"
      	
        };
}
else{
    console.log.object("invalid")
};
console.log(obj.issuer)
