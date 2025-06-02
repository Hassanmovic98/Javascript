
let count = 0;
let correctCount = 0;




for(; count < 10; count++){
	let number1 =(Math.floor(Math.random()* 100));
       let  number2 =(Math.floor(Math.random()* 100));
	if(number1 < number2){ 
		let temp = number1
		number1 = number2
		secondnumber2 =temp;
		}
	
		for (let attempt = 0; attempt < 2; attempt++){

       		const prompt = require('prompt-sync')();
		let result = prompt("your result is" + number1 + "-" + number2 + "?");

		if (number1 - number2 == result){
		console.log ("correct!");
		correctcount++;
		}
		else{
		console.log("Wrong!")
		let result = prompt ("What is " + number1 + "-" +  number2 + "?");
		}
		}
	
      }

       console.log("true count" + correctCount);
	




