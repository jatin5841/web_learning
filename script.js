var count=document.querySelector(".count");
var follower=document.querySelector(".followers");

let counter=1;

setInterval( function(){
	if (counter<1000) {

	counter++
	count.innerText=counter
	


	}

},3)



setTimeout( function (){
follower.innerText="followers on instagram";
},3993)