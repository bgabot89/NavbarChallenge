$(document).ready(function(){

$("#login, #logout").on("click",(function(e){
	if (this.id == "login"){
		console.log('check');
		$("#login").hide();
		$("#logout").show();
		e.preventDefault();
		// window.location = this.href;
 }
 	else if (this.id == "logout"){
	 	console.log('checkout');
	 	$("#logout").hide();
	 	$("#login").show();
	 	e.preventDefault();
	 }
	}));
});

 
