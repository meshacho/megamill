
function megaNumber(){
	var numMega = Math.floor(Math.random() * 25 + 1);
	document.getElementById("circlem").innerHTML = numMega;
}



function lottoNumbers(){
	var lottoNums = [];

	for(var i = 0; i < 5 ; i += 1){
		var random = Math.floor(Math.random() * 70 + 1);

		if(lottoNums.indexOf(random) == -1){
			lottoNums.push(random);
			document.getElementById("circle" + i).innerHTML = lottoNums[i];
		}else{
			i--;
		}
	}	
}


lottoNumbers();
megaNumber();






// create the Mega number which is 1-25

// Create a function that prints the random number to the page.







