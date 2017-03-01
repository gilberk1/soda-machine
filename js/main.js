var cashAmount, buttons;

var pennies = document.getElementById('pennies');

/* Function vends the soda chosen when clicking one of the buttons
	or it tells the soda price */

function getCost(price) {
	if(document.getElementById('choices').innerHTML == "Choose a soda.") {
		document.getElementById('screen').innerHTML = "VENDING";

		buttons = document.getElementById('buttons');

		buttons.addEventListener("click", clicked, false);
	}
	else {
		var sodaPrice = price.getAttribute('data-price');
		document.getElementById('screen').innerHTML = '$'+sodaPrice;
	}
}

/* Function goes through the animation of vending the soda */

function clicked(evt) {

	/* Vends Sierra Mist */

	if(evt.target.id == "sierra_mist_button") {

		var sierra_mist_can = document.getElementById('sierra_mist_can');
		var sierra_mist_button = document.getElementById('sierra_mist_button');

		var change = parseFloat(cashAmount - sierra_mist_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0) {
			sierra_mist_can.style.transform = "translate(220px, 390px)";
			sierra_mist_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);

			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Dr Pepper */

	else if(evt.target.id == "dr_pepper_button") {
		var dr_pepper_can = document.getElementById('dr_pepper_can');
		var dr_pepper_button = document.getElementById('dr_pepper_button');
		
		var change = parseFloat(cashAmount - dr_pepper_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0) {
			dr_pepper_can.style.transform = "translate(75px, 390px)";
			dr_pepper_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Mountain Dew */

	else if(evt.target.id == "mountain_dew_button") {
		var mountain_dew_can = document.getElementById('mountain_dew_can');
		var mountain_dew_button = document.getElementById('mountain_dew_button');

		var change = parseFloat(cashAmount - mountain_dew_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0){
			mountain_dew_can.style.transform = "translate(-85px, 390px)";
			mountain_dew_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Mug Root Beer */

	else if(evt.target.id == "mug_root_beer_button") {
		var mug_root_beer_can = document.getElementById('mug_root_beer_can');
		var mug_root_beer_button = document.getElementById('mug_root_beer_button');
		
		var change = parseFloat(cashAmount - mug_root_beer_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0) {
			mug_root_beer_can.style.transform = "translate(-250px, 390px)";
			mug_root_beer_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Pepsi */

	else if(evt.target.id == "pepsi_button") {
		var pepsi_can = document.getElementById('pepsi_can');
		var pepsi_button = document.getElementById('pepsi_button');

		var change = parseFloat(cashAmount - pepsi_button.getAttribute('data-price')).toFixed(2);
		
		if(change >= 0) {
			pepsi_can.style.transform = "translate(220px, 190px)";
			pepsi_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Sprite */

	else if(evt.target.id == "sprite_button") {
		var sprite_can = document.getElementById('sprite_can');
		var sprite_button = document.getElementById('sprite_button');

		var change = parseFloat(cashAmount - sprite_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0) {
			sprite_can.style.transform = "translate(75px, 190px)";
			sprite_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Coca Cola */

	else if(evt.target.id == "coca_cola_button") {
		var coca_cola_can = document.getElementById('coca_cola_can');
		var coca_cola_button = document.getElementById('coca_cola_button');

		var change = parseFloat(cashAmount - coca_cola_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0) {
			coca_cola_can.style.transform = "translate(-85px, 190px)";
			coca_cola_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}

	/* Vends Sunkist */

	else {
		var sunkist_can = document.getElementById('sunkist_can');
		var sunkist_button = document.getElementById('sunkist_button');

		var change = parseFloat(cashAmount - sunkist_button.getAttribute('data-price')).toFixed(2);

		if(change >= 0) {
			sunkist_can.style.transform = "translate(-250px, 190px)";
			sunkist_can.style.zIndex = "2000";
			buttons.style.animation = "fade 2s linear";

			setTimeout(function() {
				buttons.style.opacity = "0";
			}, 2000);

			setTimeout(function() {
				pennies.style.animation = "fadeIn 1s linear";
			}, 2000);

			setTimeout(function() {
				pennies.style.opacity = "1";
			}, 3000);

			setTimeout(function() {
				document.getElementById('choices').innerHTML = "Your soda and change are there. To get another soda, press the refresh button in the top left corner. Have a great day!";
			}, 3000);
			
			setTimeout(function() {
				document.getElementById('screen').innerHTML = '$'+change;
				choices.style.display = "block";
			}, 3000);
		}
		else {
			document.getElementById('screen').innerHTML = 'ERROR';
		}
	}
}

/* Function goes through the animation of inserting the cash into the soda machine */

function insertCash() {
	var dollars = document.getElementById('dollars').value;
	var cents = document.getElementById('cents').value;
	if(dollars < 100 && cents < 100 && dollars > 0 && dollars != '' && cents != '')
	{

		cashAmount = parseFloat(dollars+'.'+cents).toFixed(2);

		var money = document.getElementById('money');
		var choices = document.getElementById('choices');
		var sign = document.getElementById('$');
		var dol = document.getElementById('dollars');
		var period = document.getElementById('.');
		var cen = document.getElementById('cents');
		var cashButton = document.getElementById('insert_cash_button');

		money.style.transform = "translate(-375px, -230px)";
		
		setTimeout(function() {
			money.style.animation = "fade 1s linear";
			choices.style.animation = "fade 1s linear";
			sign.style.animation = "fade 1s linear";
			dol.style.animation = "fade 1s linear";
			period.style.animation = "fade 1s linear";
			cen.style.animation = "fade 1s linear";
			cashButton.style.animation = "fade 1s linear";
		}, 2000);
		
		setTimeout(function() {
			money.style.display = "none";
			choices.style.display = "none";
			sign.style.display = "none";
			dol.style.display = "none";
			period.style.display = "none";
			cen.style.display = "none";
			cashButton.style.display = "none";
			document.getElementById('choices').innerHTML = "Choose a soda.";
		}, 3000);
		
		setTimeout(function() {
			document.getElementById('screen').innerHTML = '$'+cashAmount;
			choices.style.display = "block";
		}, 3000);
	}
	else {
		document.getElementById('screen').innerHTML = 'ERROR';
	}
}