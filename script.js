function error(text) {
  
$("#error_text").text(text);
$("#error").show();


}


$("#Speed").keyup(function(event){
    if(event.keyCode == 13){
        $("#calculate").click();
    }
});

$("#calculate").click( function()
	{
	 
	 var speedLimit = $('#speedLimit').val();

	 var Speed = $('#Speed').val();

	 var fine = 0;

	 var mcare = 0;

	 var points = 0;

	 if (speedLimit == "" || Speed == "" || Speed < 1 || speedLimit < 1){
	 	error("Please enter a valid value in both fields!");
	 	return;
	 }

	 if(Speed - speedLimit < 1){
	 	error("Speed must be greater then the speed limit!");
	 	return;
	 }

	if (speedLimit > 70){
		error("No speed limit greater then 70MPH in PA!");
		return;
	}

	$("#error").hide();
	/* if(speedLimit < 55 && (Speed - 10) < speedLimit) {
	 	alert("Speed must be at least 10 MPH over limit! (For speed limts less then 55)");
		return;
	 }*/

	/* if(speedLimit > 54 && (Speed - 6) < speedLimit) {
	 	alert("Speed must be at least 5 MPH over limit! (For speed limts less then 55)");
	 	return;
	 } */


	if(speedLimit < 65){
		if(Speed - speedLimit < 6){
			fine = 35.00;
		}
		else if((Speed - speedLimit > 35) ){
			fine = 95.00;
		}
		else{
			fine = ((((Speed - speedLimit) - 5)*2)+35);
		}

		if(Speed - speedLimit < 16){
			mcare = 45;
		}
		else if(Speed - speedLimit >15 && Speed - speedLimit < 26){
			mcare = 60;
		}
		else if(Speed - speedLimit > 25){
			mcare = 75;
		}

	}

	else if(speedLimit > 64 && speedLimit < 71){
		if(Speed - speedLimit == 6){
			fine = 44.50;
		}
		else if((Speed - speedLimit > 35) ){
			fine = 102.50;
		}
		else{
			fine = ((((Speed - speedLimit) - 6)*2)+44.50);
		}

		if(Speed - speedLimit < 16){
			mcare = 45;
		}
		else if(Speed - speedLimit >15 && Speed - speedLimit < 26){
			mcare = 60;
		}
		else if(Speed - speedLimit > 25){
			mcare = 75;
		}

	}

	if(Speed - speedLimit > 5 && Speed - speedLimit < 11){
		points = 2;
	}
	else if(Speed - speedLimit > 10 && Speed - speedLimit < 16){
		points = 3;
	}
	else if(Speed - speedLimit > 15 && Speed - speedLimit < 26){
		points = 4;
	}
	else if(Speed - speedLimit > 25 && Speed - speedLimit < 31){
		points = 5;
	}
	else if(Speed - speedLimit > 30){
		points = 5;
	}



	if(Speed - speedLimit > 30){
		$("#reckless").show();
	}
	else{
		$("#reckless").hide();	
	}



	var	total = fine + 57 + mcare;

	 $('#fine').html(fine.toFixed(2));
	 $('#mcare').html(mcare.toFixed(2));
	 $('#total').html(total.toFixed(2));
	 $('#points').html(points);



	}
);